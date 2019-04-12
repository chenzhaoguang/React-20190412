import React from "react";
import { Link } from "react-router-dom";

const Detail = () =>{
    return (
        <div>
            <Link to="/Reg">go to reg</Link>
            <br />
            <Link to="/Home">go to home</Link>
            <h1>我是Detail</h1>
        </div>
    );
}


export default Detail;