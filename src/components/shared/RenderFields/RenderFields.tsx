import React, { useState } from 'react';
import styles from './RenderFields.module.css';

export interface Field {
    id: string;
    type: string;
    label: string;
    defaultValue?: string;
    required?: boolean;
    value?: string;
}

export interface Fields {
    [key: string]: Field;
}

interface FormProps {
    fields: Field[];
    values: Fields;
    setValues: (values: Fields) => void;
    isSubmitted: boolean;
}

export const RenderFields: React.FC<FormProps> = ({ fields, values, setValues, isSubmitted }) => {

    const handleChange = (field: Field, value: string) => {
        setValues({
            ...values,
            [field.id]: {
                ...field,
                value,
            },
        });
    };

    return (
        <div>
            {fields.map(field => {
                const value = values[field.id] ? values[field.id].value : field.defaultValue;
                return (
                    <div key={field.id}>
                        {field.type === 'inputText' && (
                            <input
                                className={`${styles.input} ${field.required && !value ? styles.inputError : ''}`}
                                placeholder={field.label}
                                type="text"
                                value={value}
                                onChange={e => handleChange(field, e.target.value)}
                            />
                        )}
                        {field.type === 'inputEmail' && (
                            <input
                                className={`${styles.input} ${field.required && !value ? styles.inputError : ''}`}
                                placeholder={field.label}
                                type="email"
                                value={value}
                                onChange={e => handleChange(field, e.target.value)}
                            />
                        )}
                        {field.type === 'inputPassword' && (
                            <input
                                className={`${styles.input} ${field.required && !value ? styles.inputError : ''}`}
                                placeholder={field.label}
                                type="password"
                                value={value}
                                onChange={e => handleChange(field, e.target.value)}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
