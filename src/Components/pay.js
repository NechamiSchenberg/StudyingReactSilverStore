import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { CartStore } from "../data/cartStore";

const finish = () => {

}

function Pay() {
    return (
        <div>סה"כ לתשלום
            {
                CartStore.sum
            } ש"ח

            <form onSubmit={() => finish()}>
                <div><p>מספר אשראי:<input type="number"/></p></div>
                <div><p>תוקף:<input type="number"/></p></div>
                <div><p>cvc:<input type="number"/></p></div>
                <Link to='/Confirm'><input type="submit" value="לאישור  ההזמנה"/></Link>
            </form>

        </div>
    )
}

export default Pay