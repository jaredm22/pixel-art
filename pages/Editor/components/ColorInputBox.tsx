import { useState } from "react";

interface Props {
    onChildClick(color: string),
    color: string
}

export default function ColorInputBox(props: Props) {

    const [color, setColor] = useState(props.color);

    function handleChange() {
        props.onChildClick(color);
    }

    function handleColorInput(e) {
        let c = e.target.value;
        if (c.length >= 1 && c.length < 8) {
            setColor(e.target.value);
        }
    }

    return(

        <div className="toolbar-row" onClick={handleChange}> 
            <button 
                className="color-square" 
                style={{
                    background: color
                }}
            />
            <input 
                className="color-input" 
                type="text" 
                value={color}
                onChange={handleColorInput} 
                style = {{ borderColor: color, color: "black"}}
            />
        </div>
        
    )
}