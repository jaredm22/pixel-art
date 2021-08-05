import {useState, useEffect} from 'react';
import Dot from './components/Dot';
import ToolBar from './components/ToolBar';

export default function Editor() {

    const [state, setState] = useState({
        h: 0,
        w: 0,
        nx: 60,
        ny: 60,
        currentColor: "#36F1CD",
        grid: null
    })

    function handleCurrentColorChange(color: string) {
        setState({...state, currentColor: color})
    }

    function handleGridColorChange(x, y) {
        let updatedGrid = [...state.grid];
        updatedGrid[x][y].color = state.currentColor;

        setState({
            ...state,
            grid: updatedGrid
        })
    }

    function clearGrid() {
        let clearedGrid = [...state.grid];
        clearedGrid.map(r => 
            r.map(c => {
               c.color = "#FFFFFF";
               return c;
            })
        )

        setState({
            ...state,
            grid: clearedGrid
        });
    }

    function fillGrid() {
        let clearedGrid = [...state.grid];
        clearedGrid.map(r => 
            r.map(c => {
               c.color = state.currentColor;
               return c;
            })
        );

        setState({
            ...state,
            grid: clearedGrid
        });
    }

    useEffect(() => {
        let h = window.innerHeight;
        let w = window.innerWidth - 250;
        let nx = Math.floor(w/30);
        let ny =  Math.floor(h/30);
        let grid = [...Array(ny)].map((e,x) => 
                        [...Array(nx)].map((e, y) => ({
                            color: "#FFFFFF",
                            h: 30,
                            w: 30,
                            x: x,
                            y: y
                        })
                    ))

        setState({
            ...state, 
            h: h,
            w: w,
            nx: Math.floor(w/30),
            ny: Math.floor(h/30),
            grid: grid
        })
    }, [])

    function handleResize() {
        let h = window.innerHeight;
        let w = window.innerWidth - 250;
        let nx = Math.floor(w/30);
        let ny =  Math.floor(h/30);
        let grid = [...Array(ny)].map((e,x) => 
                        [...Array(nx)].map((e, y) => ({
                            color: "#FFFFFF",
                            h: 30,
                            w: 30,
                            x: x,
                            y: y
                        })
                    ))

        setState({
            ...state, 
            h: h,
            w: w,
            nx: Math.floor(w/30),
            ny: Math.floor(h/30),
            grid: grid
        })
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);      

    return(
        !state.grid ?
            <div className="editor-container">
                <ToolBar/>
                <div className="grid">
                   
                </div>
            </div>
        :
            <div className="editor-container">
                <ToolBar 
                    onColorChange={handleCurrentColorChange} 
                    selectedColor={state.currentColor}
                    handleGridClear={clearGrid}
                    handleGridFill={fillGrid}
                />
                <div className="grid">
                    {state.grid.map(r => 
                        <div className="row">
                            {r.map(c => <Dot {...c} onSelect={handleGridColorChange}/>)}
                        </div>    
                    )}
                </div>
            </div>
    )
}