import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Reg extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Link to="/Home">go to home</Link>
                <br/>
                <Link to="/Detail">go to detail</Link>
                <h1>我是Reg</h1>
            </div>
        )
    }
}

export default Reg;
