import React, { useEffect, useState } from "react";
import { CreateBoard } from "./util/CreateBoard";
import Cell from "./Cell";
import { revealed } from "./util/Reveal";
//mport { toast,ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

const Board = props => {
    const [grid, setGrid] = useState([]);
    const [mines, setMines] = useState([]);
    const [nonMines, setNonMines] = useState(0);

    const style={
        display : 'flex',
        flexDirection : 'row',
        width:'fit-content',
        color:'white',
        
    }
    
    useEffect(()=>{
        freshboard();
    },[]);
    const freshboard = () => {
        let createdBoard = CreateBoard(10,10,20);
        console.log(createdBoard);
        setNonMines(10*10-20);
        setGrid(createdBoard.board);
        setMines(createdBoard.mineSet);
    }

    const updateFlag = (e,x,y) => {
        e.preventDefault();
        // deep copy of the object
        let newGrid=JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged=true;
        console.log(newGrid[x][y]);
        setGrid(newGrid);
    }

    const revealcell = (x,y) => {
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X"){
            //toast.dark(' Clicked on Mine ,Try Again', { position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            for(let i=0;i<mines.length;i++){
                newGrid[mines[i][0]][mines[i][1]].revealed=true;
            }
            setGrid(newGrid);
            setTimeout(500);
        }
        if(nonMines===0){
            //toast.success('Wohoo!!,You won',{ position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            setTimeout(500);
        }
        else{
            let revealedboard=revealed(newGrid,x,y,nonMines);
            setGrid(revealedboard.arr);
            setNonMines(revealedboard.newNonMines);
        }
        

    }
    return(
        <div>
            <div>
                <h3>Non-Mines : {nonMines}</h3>
                {grid.map((singlerow, index1) => {
                    return(
                        <div style={style} key={index1}>
                            {singlerow.map((singlecol,index2) => {
                               return <Cell  details={singlecol} key={index2} updateFlag={updateFlag} revealcell={revealcell}/>
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};


export default Board;