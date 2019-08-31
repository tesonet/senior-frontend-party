import React from "react";
import './InputField.scss';

const InputField: React.FC<{
    type: string,
    name: string,
    value?: string,
    placeholder?: string,
    extraClasses?: string,
    error?: string | null,
    onChange?: any
}> = (props) => {
    const {type, name, extraClasses, error, placeholder, onChange, value, children} = props;
    return (
        <div className="form-group">
            <input type={type}
                   name={name}
                   className={`form-control ${extraClasses} ${error ? 'form-control--error' : ''}`}
                   placeholder={placeholder}
                   onChange={onChange}
                   value={value}
            />
            { !!children ?
                <span className="form-group__icon">
                    {children}
                </span>
                : null
            }
            { error ?
                <label className="form-control__label form-control__label--error">
                    {error}
                </label>
                : null
            }
        </div>
    );
};

export default InputField;