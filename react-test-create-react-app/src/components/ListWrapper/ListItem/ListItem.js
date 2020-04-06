import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../../Button/Button";

const ListItem = ({ image, name, description, link }) => {
    const ImageTag = image ? "img" : "div";

    return (
        <li className={styles.wrapper}>
            <ImageTag
                src={image}
                className={image ? styles.image : styles.imageNone}
                alt={name}
            />
            <div>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <Button href={link}>Szczegóły</Button>
            </div>
        </li>
    );
};

ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    image: null,
    description: "One of the React creators",
};

export default ListItem;
