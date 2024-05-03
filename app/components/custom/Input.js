export default function Input({ type = 'text', id, placeholder, className, textArea, rows = '8', required, step, error = "",value,onChange,onBlur, onKeyUp, props }) {

    return (
        <>
            {!textArea && <input type={type} id={id} name={id} className={`input ${className}`} placeholder={placeholder} required={required} {...props} step={step} value={value} onChange={onChange} onBlur={onBlur} onKeyUp={onKeyUp}/>}
            {textArea && <textarea type={type} id={id} name={id} className={`input ${className} text-area-input`} placeholder={placeholder} rows={rows} required={required} {...props} value={value}onChange={onChange} onBlur={onBlur}/>}
            {error && <span className="error-p">{error}</span>}
        </>
    );
}

/*  4/30/2024 3:09PM
export default function Input({ type = 'text', id, placeholder, className, textArea, rows = '8', required, step, error = "", props }) {

    return (
        <>
            {!textArea && <input type={type} id={id} name={id} className={`input ${className}`} placeholder={placeholder} required={required} {...props} step={step} />}
            {textArea && <textarea type={type} id={id} name={id} className={`input ${className} text-area-input`} placeholder={placeholder} rows={rows} required={required} {...props} />}
            {error && <p className="error-p">{error}</p>}
        </>
    );
}
*/