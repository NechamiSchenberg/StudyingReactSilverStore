import React from "react";
import { Link, useLocation } from "react-router-dom";
import Cart from './cart'

export default function Header() {
    return (<div className={"flexWrapper"} id={"header"}>
        <Link to="/">Silver 925</Link>
        <Link to="/catgory">קטגוריות</Link>
        <Link to="/About">אודותינו</Link>
        <Link to="/Cart">Cart</Link>
    </div>
    )
}