import React from 'react';


const CreateBoard = (row, col) => {
    let sequence = [];
    for (let x=0; x<row; x++){
        let subcol =[];
        if(x===0){
            subcol.push({src:"./images/sequence.png",value:"", x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/10S.png",value:"10S", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/QS.png",value:"QS", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/KS.png",value:"KS", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/AS.png",value:"AS", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/2D.png",value:"2D", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/3D.png",value:"3D", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/4D.png",value:"4D", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/5D.png",value:"5D", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/sequence.png",value:"", x:x, y:9, taken:false, player:null});
        }
        if(x===1){
            subcol.push({src:"./images/9S.png",value:"9S", x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/10H.png",value:"10H", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/9H.png",value:"9H", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/8H.png",value:"8H", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/7H.png",value:"7H", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/6H.png",value:"6H", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/5H.png",value:"5H", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/4H.png",value:"4H", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/3H.png",value:"3H", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/6D.png",value:"6D", x:x, y:9, taken:false, player:null});
        }
        if(x===2){
            subcol.push({src:"./images/8S.png",value:"8S", x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/QH.png",value:"QH", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/7D.png",value:"7D", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/8D.png",value:"8D", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/9D.png",value:"9D", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/10D.png",value:"10D", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/QD.png",value:"QD", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/KD.png",value:"KD", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/2H.png",value:"2H", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/7D.png",value:"7D", x:x, y:9, taken:false, player:null});
        }
        if(x===3){
            subcol.push({src:"./images/7S.png",value:"7S", x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/KH.png",value:"KH", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/6D.png",value:"6D", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/2C.png",value:"2C", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/AH.png",value:"AH", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/KH.png",value:"KH", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/QH.png",value:"QH", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/AD.png",value:"AD", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/2S.png",value:"2S", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/8D.png",value:"8D", x:x, y:9, taken:false, player:null});
        }
        if(x===4){
            subcol.push({src:"./images/6S.png",value:"6S", x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/AH.png",value:"AH", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/5D.png",value:"5D", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/3C.png",value:"3C", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/4H.png",value:"4H", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/3H.png",value:"3H", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/10H.png",value:"10H", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/AC.png",value:"AC", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/3S.png",value:"3S", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/9D.png",value:"9D", x:x, y:9, taken:false, player:null});
        }
        if(x===5){
            subcol.push({src:"./images/5S.png",value:"5S", x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/2C.png",value:"2C", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/4D.png",value:"4D", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/4C.png",value:"4C", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/5H.png",value:"5H", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/2H.png",value:"2H", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/9H.png",value:"9H", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/KC.png",value:"KC", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/4S.png",value:"4S", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/10D.png",value:"10D", x:x, y:9, taken:false, player:null});
        }
        if(x===6){
            subcol.push({src:"./images/4S.png",value:"4S", x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/3C.png",value:"3C", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/3D.png",value:"3D", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/5C.png",value:"5C", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/6H.png",value:"6H", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/7H.png",value:"7H", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/8H.png",value:"8H", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/QC.png",value:"QC", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/5S.png",value:"5S", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/QD.png",value:"QD", x:x, y:9, taken:false, player:null});
        }
        if(x===7){
            subcol.push({src:"./images/3S.png",value:"3S", x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/4C.png",value:"4C", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/2D.png",value:"2D", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/6C.png",value:"6C", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/7C.png",value:"7C", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/9C.png",value:"9C", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/9C.png",value:"9C", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/10C.png",value:"10C", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/6S.png",value:"6S", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/KD.png",value:"KD", x:x, y:9, taken:false, player:null});
        }
        if(x===8){
            subcol.push({src:"./images/2S.png",value:"2S", x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/5C.png",value:"5C", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/AS.png",value:"AS", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/KS.png",value:"KS", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/QS.png",value:"QS", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/10S.png",value:"10S", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/9S.png",value:"9S", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/8S.png",value:"8S", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/7S.png",value:"7S", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/AD.png",value:"AD", x:x, y:9, taken:false, player:null});
        }
        if(x===9){
            subcol.push({src:"./images/sequence.png",x:x, y:0, taken:false, player:null});
            subcol.push({src:"./images/6C.png",value:"6C", x:x, y:1, taken:false, player:null});
            subcol.push({src:"./images/7C.png",value:"7C", x:x, y:2, taken:false, player:null});
            subcol.push({src:"./images/8C.png",value:"8C", x:x, y:3, taken:false, player:null});
            subcol.push({src:"./images/9C.png",value:"9C", x:x, y:4, taken:false, player:null});
            subcol.push({src:"./images/10C.png",value:"10C", x:x, y:5, taken:false, player:null});
            subcol.push({src:"./images/QC.png",value:"QC", x:x, y:6, taken:false, player:null});
            subcol.push({src:"./images/KC.png",value:"KC", x:x, y:7, taken:false, player:null});
            subcol.push({src:"./images/AC.png",value:"AC", x:x, y:8, taken:false, player:null});
            subcol.push({src:"./images/sequence.png",value:"", x:x, y:9, taken:false, player:null});
        }
        sequence.push(subcol);
    }
    return {sequence};
};

export default CreateBoard;