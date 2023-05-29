import { observer } from "mobx-react";
import React from "react";
import { Link, Path } from "react-router-dom";
import { CartStore } from "../data/cartStore";
import Pay from "./pay";

function Cart() {
    return (
        <div>
            {CartStore.sum !== 0 ? (<div>
                <div className="flexWrapper">
                    <div>מוצר:{CartStore.cart.map(c => (<p key={c.Id}>{c.Name}</p>))}</div>
                    <div>כמות:{CartStore.cart.map(c => (<p key={c.Id}>{c.Price} ש"ח </p>))}</div>
                    <div>{CartStore.cart.map(c => (<p key={c.Id}><button onClick={() => { CartStore.remove(c) }}>להסרת הפריט מהסל</button></p>))}</div>
                </div>
                <p>
                    סה"כ לתשלום: {CartStore.sum} ש"ח
                </p>
                <Link to='/Payment' style={{ 'color': 'silver', 'backgroundColor': 'rgb(28, 10, 89)', 'paddingInline': '1%', "paddingBlock": "0.5%" }}>לקופה</Link>
            </div>) : (<div style={{ 'margin': '3%', 'fontSize': 'x-large' }}> סל הקניות שלך ריק לבינתיים...</div>)}
        </div>)
}

export default observer(Cart);