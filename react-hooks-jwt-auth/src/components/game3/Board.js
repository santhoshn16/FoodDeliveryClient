import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import CreateBoard from './CreateBoard';
import InitializeCards from './utils/InitializeCards';
import GetNewCard from './utils/GetNewCard';
const style = {
    style1: {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content',
        color: 'white',
    },
    style2: {
        width: '5%',
        float: 'left',
        border: '3px solid white',
        width: 'fit-content',
        color: 'black',
    },
    style3: {
        width: '5%',
        float: 'left',
        width: 'fit-content',
        border: '3px solid white',
        color: 'blue',
    },
    style4: {
        width: '60%',
        float: 'left',
        width: 'fit-content',
        border: '3px solid white',
        color: 'blue',
    }

}

const Board = props => {
    const [grid, setGrid] = useState([]);
    const [isPlayer1, setIsPlayer1] = useState(true);
    const [cards, setCards] = useState([]);
    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);
    useEffect(() => {
        createNewBoard();
        initialAssign();
    }, [])

    function createNewBoard() {
        let createdBoard = CreateBoard(10, 10);
        console.log(createdBoard.sequence);
        setGrid(createdBoard.sequence);
    }

    function initialAssign() {
        let Cards = InitializeCards();
        setCards(Cards.initialCards);
        setPlayer1(Cards.player1);
        setPlayer2(Cards.player2);
        console.log(Cards.player1);
        console.log(Cards.player2);

    }


    const selectedCard = (details) => {
        let newGrid = JSON.parse(JSON.stringify(grid));
        let newCards = JSON.parse(JSON.stringify(cards));
        let x = details.x;
        let y = details.y;
        if ((x === 0 && y === 0) || (x === 0 && y === 9) || (x === 9 && y === 0) || (x === 9 && y === 9)) {//|| details.taken !== false) {
            console.log("that cant be yours");
        }
        else if (isPlayer1) {
            //console.log(player1);
            //console.log(newGrid);
            for (let i = 0; i < player1.length; i++) {
                if (newGrid[x][y].player === 2) {
                    if (player1[i].value === 'JS' || player1[i].value === 'JH') {
                        player1.splice(i, 1);
                        let newCard = GetNewCard(newCards, 1);
                        console.log(newCard.card);
                        player1.push(newCard.newPickedCard);
                        newGrid[x][y].taken = false;
                        newGrid[x][y].player = null;
                        setGrid(newGrid);
                        setCards(newCard.card);
                        setIsPlayer1(!isPlayer1);
                        break;
                    }
                }
                else if (newGrid[x][y].value === player1[i].value) {
                    newGrid[x][y].player = 1;
                    newGrid[x][y].taken = './images/blue_back.png';
                    player1.splice(i, 1);
                    let newCard = GetNewCard(newCards, 1);
                    console.log(newCard.card);
                    player1.push(newCard.newPickedCard);
                    setGrid(newGrid);
                    setCards(newCard.card);
                    setIsPlayer1(!isPlayer1);
                    break;
                }
                else if (player1[i].value === 'JD' || player1[i].value === 'JC') {
                    newGrid[x][y].player = 1;
                    newGrid[x][y].taken = './images/blue_back.png';
                    player1.splice(i, 1);
                    let newCard = GetNewCard(newCards, 1);
                    console.log(newCard.card);
                    player1.push(newCard.newPickedCard);
                    setGrid(newGrid);
                    setCards(newCard.card);
                    setIsPlayer1(!isPlayer1);
                    break;
                }
            }

        }
        else if (!isPlayer1) {
            //console.log(player2);
            //console.log(newGrid);
            for (let i = 0; i < player2.length; i++) {
                if (newGrid[x][y].player === 1) {
                    if (player2[i].value === 'JS' || player2[i].value === 'JH' ) {
                        player2.splice(i, 1);
                        let newCard = GetNewCard(newCards, 2);
                        
                        console.log(newCard.card);
                        player2.push(newCard.newPickedCard);
                        newGrid[x][y].taken = false;
                        newGrid[x][y].player = null;
                        setGrid(newGrid);
                        setCards(newCard.card);
                        setIsPlayer1(!isPlayer1);
                        break;
                    }
                }
                else if (newGrid[x][y].value === player2[i].value) {
                    newGrid[x][y].player = 2;
                    newGrid[x][y].taken = './images/green_back.png';
                    player2.splice(i, 1);
                    let newCard = GetNewCard(newCards, 2);
                    console.log(newCard.card);
                    player2.push(newCard.newPickedCard);
                    setGrid(newGrid);
                    setCards(newCard.card);
                    setIsPlayer1(!isPlayer1);
                    break;
                }
                else if (player2[i].value === 'JD' ||  player2[i].value === 'JC') {
                    newGrid[x][y].player = 2;
                    newGrid[x][y].taken = './images/green_back.png';
                    player2.splice(i, 1);
                    let newCard = GetNewCard(newCards, 2);
                    console.log(newCard.card);
                    player2.push(newCard.newPickedCard);
                    setGrid(newGrid);
                    setCards(newCard.card);
                    setIsPlayer1(!isPlayer1);
                    break;
                }
            }
        }

    }

    return (

        <div>
            <div style={style.style2}>
                <h3>PLAYER 1</h3>
                {player1.map((item, index1) => {
                    return <Cell details={item} key={index1} selectedCard={selectedCard} />
                })}
                {isPlayer1 && <i>your turn</i>}
            </div>
            <div style={style.style4}>
                {grid.map((row, index1) => {
                    return (
                        <div style={style.style1}>
                            {row.map((col, index2) => {
                                return <Cell details={col} key={index2} selectedCard={selectedCard} />
                            })}
                        </div>
                    )
                })
                }
            </div>
            <div style={style.style3}>
                <h3>PLAYER 2</h3>
                {player2.map((item, index1) => {
                    return <Cell details={item} key={index1} selectedCard={selectedCard} />
                })}
                {!isPlayer1 && <i>your turn</i>}
            </div>
        </div>

    )
};


export default Board;