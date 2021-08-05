interface Props {
    color: string,
    h: number,
    w: number,
    x: number,
    y: number,
    onSelect(x,y)
}

export default function Dot(props: Props) {

    function handleSelect() {
        props.onSelect(props.x, props.y);
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