import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { productContext, SilverStore } from "../data/silverStore";

const Products = () => {
    const [search, setSearch] = useState('');
    const { categoryID } = useParams();
    const products = SilverStore.getProductsByCategory(categoryID);
    const location = useLocation();
    const searchFunc = s => {
        return (
            s.Name.includes(search) ||
            s.categoryName.includes(search))
    }
    return (
        <div>
            <h2>המוצרים שלנו</h2>
            <h2>{products.length > 5 ? "" : products[0].categoryName}</h2>
            <input type="search" placeholder="חיפוש" onChange={e => setSearch(e.target.value)} />
            <ul >
                {/* //תנאי נקודתי שמתאים רק לנתונים העכשויים לא היה לי רעיון אחר  */}
                {products.filter(p => searchFunc(p))
                    .map(p => (<li key={p.Id}><Link to={`${location.pathname}/${p.Id}`} style={{'paddingBlock':'1%'}}>
                        <div>{p.Name} </div>
                        <div>מחיר: ₪{p.Price}</div>
                        <div><img src={`/pictures/${p.image}`}></img> </div>
                        {p.inStock === 0 ? (<div>המוצר אזל מהמלאי</div>) : (<div>נותרו עוד: {p.inStock} במלאי</div>)}
                    </Link></li>))}
            </ul>
        </div>
    )
}
export default observer(Products);

