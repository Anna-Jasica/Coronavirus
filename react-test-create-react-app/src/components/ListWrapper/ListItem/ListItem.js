import React from "react";
import "./ListItem.css";
import mamaIStetoskopImage from "../../../assets/images/mamaistetoskop.jpg";

const ListItem = () => (
    <li className="listItem__wrapper">
        <img src={mamaIStetoskopImage} className="listItem__image" alt="" />
        <div>
            <h2 className="listItem__name">Mama i stetoskop</h2>
            <p className="listItem__description">
                Lekarka - Kasia Woźniak - przez swój kanał przekazuje medyczną
                wiedzę w przyjemny w odbiorze sposób
            </p>
            <button className="listItem__button">Szczegóły</button>
        </div>
    </li>
);

export default ListItem;
