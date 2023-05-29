import React from "react";
import Cart from "./cart";
import HomePageProduct from "./HomePageProduct";
// import{bi} from "bootstrap-icons"



function HomePage() {
    return (
        <div>
            <h1>כלי כסף מלווים את המסורת היהודית
                כבר מאות שנים ועוברים במשפחה מדור לדור.
                הם מקבלים מקום של כבוד בבתים היהודיים,
                <br />
                החל מהמזוזה הנמצאת בכניסה לבית, דרך גביעים,
                כלי הבשמים ומבחר כלי כסף טהור המשתלבים על שולחן השבת והחג,
                חנוכיות מעוצבות <br />
                ומגוון פרטי יודאיקה שמעטרים את הבית היהודי
                מוזמנים להתרשם ממגוון רחב של כלי כסף איכותיים,
                מעוצבים ומעניינים, לבחור את הפריט שלכם לבית או למתנה</h1>
            <HomePageProduct />
        </div>
    );
}
export default HomePage;