import React from "react";
import styles from "./Form.module.scss";
import Input from "../input/Input";
import Button from "../Button/Button";

const Form = ({ submitFn }) => (
    <div className={styles.wrapper}>
        <h2>Add new twitter account</h2>
        <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
            <Input name="name" label="Nazwa" maxLength={30} />
            <Input name="link" label="Link" />
            <Input name="image" label="Zdjęcie" />
            <Input tag="textarea" name="Description" label="Opis" />
            <Button>Dodaj</Button>
        </form>
    </div>
);

export default Form;
