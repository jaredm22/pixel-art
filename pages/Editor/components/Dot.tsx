import {useState} from 'react';

interface Props {
    color: string,
    h: number,
    w: number,
    x: number,
    y: number,
    onSelect(x,y)
}

export default function Dot(props: Props) {
    const [state, setState] = useState({
        x: props.x,
        y: props.y
    })

    function handleSelect() {
        props.onSelect(state.x, state.y);
    }

    return(
        <button 
            className={`dot-container`}
            onClick={handleSelect}
            style={{
                background: props.color,
                height: props.h,
                width: props.w,
            }}
        />
    )
}