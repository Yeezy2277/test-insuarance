import { Fields, RenderFields } from "../../shared/RenderFields/RenderFields";
import fields from "../../../data/configuration.json";
import { useState } from "react";
import styles from "./MainScreen.module.css";

export const MainScreen = () => {
    const [values, setValues] = useState<Fields>({}); // This is the state that will hold the values of the field
    const [isSubmitted, setIsSubmitted] = useState(false); // This is the state that will hold the values of the field
    const handleSubmit = (e: React.FormEvent) => {
        setIsSubmitted(false);
        e.preventDefault();
        console.log(values);
        const isDisable = fields.some(field => field.required && !values[field.id].value);
        console.log(isDisable);
        if (!isDisable) {
            setIsSubmitted(true);
        }
    };

    return <form onSubmit={handleSubmit} className={styles.wrapper}>
        <div className={styles.form}>
            <h1>Авторизация</h1>
            <h3>Для доступа к личному кабинету вашей компании авторизуйтесь на сайте</h3>
            <RenderFields isSubmitted={isSubmitted} fields={fields} values={values} setValues={setValues} />
            <button className={styles.submitButton} type="submit">Submit</button>
        </div>
        {isSubmitted && <div className={styles.success}>Success</div>}
    </form>
}
