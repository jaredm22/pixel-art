import ColorInputBox from './ColorInputBox';

interface Props {
    onColorChange?(color: string),
    handleGridClear?(),
    handleGridFill?(),
    selectedColor?: string,
}

const colors = [
    "#000000",
    "#F4B185",
    "#FCF0DE",
    "#F15F3E",
    "#FFE26F",
]

export default function ToolBar(props: Props) {

    function onClear() {
        props.handleGridClear();
    }

    function onFill() {
        props.handleGridFill();
    }

    return(
        <div className="toolbar-container">
            <h1>Pixel8</h1> 
            
            <div className="toolbar-row">
                <button 
                    className="clear button"
                    onClick={onClear}
                >
                    Clear
                </button>
                <button 
                    className="fill button"
                    onClick={onFill}
                >
                    Fill
                </button>
            </div>

            <div className="toolbar-row"> 
                <button 
                    className="current-color-square" 
                    style={{
                        background: props.selectedColor
                    }}
                />
                <div className="column">
                    <h5 className="current-color">
                        Current Color
                    </h5>
                    <p>
                        {props.selectedColor}
                    </p>
                </div>
            </div>

            {colors.map(c => 
                <ColorInputBox onChildClick={props.onColorChange} color={c}/>
            )}
        </div>
    )
}

