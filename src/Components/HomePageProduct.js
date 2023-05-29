import React from "react";
import { HomePageStore } from "../data/homePageStore"
import Products from "./Products";
import { Link, useLocation } from "react-router-dom"
import { observer } from "mobx-react-lite";
import HomePage from "./HomePage";
import ProductDetails from "./productDetails";

// function HomePageProduct() {
//     return (
//         <div>
//             {HomePageStore.silver.map(p => (<div>
//                 {console.log(p)}
//                 <img src={`/pictures/${p.image}`}></img>
//                 <div>
//                     <p>{p.Name}</p>
//                     <p>להצגת כל הפריטים בקטגוריה זו</p>
//                 </div>
//             </div>))}
//         </div>
//     )
// }

function HomePageProduct() {


    return (
        <div>
            <h2>קטגוריות</h2>
            <div className="wrapper">
            <div style={{"fontSize":'x-large',"textDecoration":'underline',"backgroundColor":"white","width":"20%","paddingTop":"7%"}}><Link to={`/catgory/${0}`} style={{'marginTop':'10%','marginRight':'5%'}}>לצפיה בכל הפריטים</Link></div>
                {HomePageStore.categories.map(p => (<div key={p.category}>
                    <Link to={`/catgory/${p.category}`}><img src={`/pictures/${p.image}`}></img></Link>
                    <div>
                        <span>{p.Name}</span>
                        <span key={p.category}>
                            <Link to={`/catgory/${p.category}`}>הצג הכל</Link>
                        </span>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default observer(HomePageProduct);