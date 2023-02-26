import React from "react";
import { useState } from "react";
export default function Post(props){
    const [editing, setEditing] = useState(false);
    const [inputValue, setInputValue] = useState(props.title);
    function handleInputChange(event){
        setInputValue(event.target.value);
    }
    return(
        <div id="post" key={props.id}>
            {!editing && <h3>{props.title}</h3>}
            {editing && <input value={inputValue} onChange={handleInputChange}></input>}
            By: {props.author}<br></br>
            <button onClick={() => {setEditing(!editing);}} id="btn">{editing ? "Done" : "Edit"}</button>&nbsp;
            {editing && <button onClick={()=>{props.updatePost(props.id, inputValue)}} id="btn">Update</button>}
            <button onClick={()=>{props.deletePost(props.id)}} id="btn">Delete</button>
        </div>
    );
}