import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./component.css";
import Finish from "./finishbutton";
import Remove from "./removebutton";
function Form() {
  const navigate = useNavigate();
  const [task, settask] = useState();
  const [newlist, setnewlist] = useState([]);
  const [deletelist, newdeletelist] = useState([]);
  const [finishlist, newfinishlist] = useState([]);
  const handlesubmit = (event) => {
    event.preventDefault();
    setnewlist([...newlist, task]);
  };

  const handleinput = (event) => {
    const newadd = event.target.value;

    settask(newadd);
  };

  const handledelete = (t1) => {
    setnewlist(newlist.filter((item) => item !== t1));
    settask(t1);
    newdeletelist([...deletelist, t1]);
    console.log(deletelist);
    
  };
  const handlefinish = () => {
    newfinishlist([...finishlist, task]);
    console.log(finishlist);
  };
  const handleremove = () => {};
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          onChange={handleinput}
          style={{
            fontSize: "large",
            backgroundColor: "white",
            width: "400px",
            height: "50px",
            marginLeft: "30%",
          }}
       />
        <input
          type="submit"
          value="add new task"
          style={{ width: "200px", height: "50px" }}
        />

        <ol>
          {newlist.map((item) => {
            return (
              <li
                onClick={() => {
                  handledelete(item);
                }}
                style={{ backgroudColor: "blue" }}
                key={Math.random()}
              >
                {item}
                <Finish onClick={handlefinish} />
                <Remove onClick={handleremove} />
              </li>
            );
          })}
        </ol>
      </form>
      <button onClick={() => navigate("/deleted", {
       state:{
            list:{deletelist}
       } }
      )}>
        show all deleted
      </button>
      <button onClick={() => navigate("/completed")}>show all completed</button>
    </div>
  );
}

export default Form;
