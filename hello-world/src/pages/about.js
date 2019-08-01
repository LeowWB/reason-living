import React from "react"
import Header from "../components/header";
import { Link } from "gatsby"

export default () => (

    <div style={{color:'teal'}}>
        <Header headerText="hello"/>
        <p>wow</p>
        <Link to="/">go</Link>
    </div>
)
