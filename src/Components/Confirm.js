import React from "react";
import { Link } from "react-router-dom";
import { CartStore } from "../data/cartStore";

export default function Confirm() {
    CartStore.cart=[];
    CartStore.sum=0;

    return (<div>
        <div>ההזמנה בוצעה בהצלחה</div>
        <Link to='/'>לחזרה לתפריט הראשי</Link>
    </div>)
}