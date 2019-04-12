import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/Reg">go to reg</Link>
            <br />
            <Link to="/Detail">go to detail</Link>
            <h1>我是Home</h1>
        </div>
    );
}


export default Home;