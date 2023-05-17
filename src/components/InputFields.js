import React, { useEffect, useRef, useState } from 'react'

function InputFields({ inputType, theme, placeholder, maxLength, mandatory, required, id, validity, disabled, values }) {

    // const handleInputs = useRef();
    const [textValue, setTextValue] = useState('');

    useEffect(() => {

        if (values) {
            setTextValue(values)
        }

    }, [values])

    return (
        <>
            {/* required={required ? true : null} */}
            <input id={`${id ? id : ''}`} disabled={disabled ? true : null} value={textValue} maxLength={maxLength} placeholder={mandatory ? placeholder + mandatory : placeholder} onChange={(e) => setTextValue(e.target.value)} type={inputType} className={`sm:w-[387px] w-full p-[11px_16px] rounded-[5px] placeholder:capitalize bg-[#F8F8F8] placeholder:text-[#A3A3A3] text-black`} style={{ border: `${validity === true ? '1px solid #FF3E5B' : ''}` }} />
        </>
    )
}

export default InputFields