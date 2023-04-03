import React from 'react';
import santhosh from './images/santhosh.jpg'

const Cell = ({details, selectedCard}, ) => {
    //console.log(details.src);
    const style = {
        cellStyle: {
            width: 90,
            height: 60,
            backgroundColor: details.revealed && details.value !== 0 ? details.value === 'X' ? 'red' : ' #00226d' : details.revealed && details.value === 0 ? '#00226f' : '#000',
            opacity: '0.8',
            border: '3px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
            cursor: 'pointer',
            color: 'cyan',
            fontWeight: '1000',
            backgroundImage: `url(santhosh)`
        },
        image1: {
            position: 'relative'
        },
        image2: {
            position: 'absolute'
        }
    }


    const photoClicked = () => {
        selectedCard(details);
    }
    return (
        <div style={style.cellStyle} onClick={photoClicked} >
            <img src={require(`${details.src}`).default} height={55} style={style.image1} width={80}/>
            {details.taken && <img src={require(`${details.taken}`).default} height={20} style={style.image2} width={40}/>}
        </div>
    )
};


export default Cell;