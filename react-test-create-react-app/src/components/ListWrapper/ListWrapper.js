import React from "react";
import ListItem from "../ListWrapper/ListItem/ListItem";
import "./ListWrapper.css";
import { accounts } from "../../data/accounts";

const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        {accounts.map(item => (
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
);

export default ListWrapper;
