import React from "react";
import "./ListItem.css";
import PropTypes from "prop-types";

const ListItem = ({ image, name, description, link }) => (
    <li className="listItem__wrapper">
        <img src={image} className="listItem__image" alt={name} />
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <a href={link} className="listItem__button">
                Szczegóły
            </a>
        </div>
    </li>
);

ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string.isRequired
};

ListItem.defaultProps = {
    description: "Źródła godne polecenia!"
};

export default ListItem;
