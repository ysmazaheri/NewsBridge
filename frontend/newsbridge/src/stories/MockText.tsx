import { TextField } from "../components/FormElements";
import { useState } from 'react';

function MockText() {
    const [text, setText] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    return (
        <TextField
            defaultValue="Default Value"
            value={text}
            onChange={handleInputChange}
        />
    );
}

export default MockText;