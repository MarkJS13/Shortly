import { useState } from "react";

const Input = (props) => {
    const [invalid, setInvalid] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.input === '') {
            setInvalid(true);
        } else {
            setInvalid(false)
        }
        
        props.setSubmittedInput(props.input);
        props.setInput('');
    }

    return (
        <div className="shorten-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Shorten a link here..." onChange={(e) => props.setInput(e.target.value)} value={props.input} className={invalid ? 'empty-input' : ''}/>
                {invalid && <p> Please add a link</p>}
                <button type="submit" > Shorten It! </button>
            </form>
            
        </div>
    )
}

export default Input;