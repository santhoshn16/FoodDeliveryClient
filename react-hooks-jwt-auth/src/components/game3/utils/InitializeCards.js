
const InitializeCards = () => {
    const initialCards = [];
    const player1 = [];
    const player2 = [];

    initialCards.push({src:"./images/AS.png", value:'AS', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/AD.png", value:'AD', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/AC.png",value:'AC', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/AH.png", value:'AH', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/2S.png", value:'2S', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/2D.png", value:'2D', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/2C.png", value:'2C', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/2H.png", value:'2H', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/3S.png", value:'3S', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/3D.png", value:'3D', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/3C.png", value:'3C', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/3H.png", value:'3H', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/4S.png", value:'4S', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/4D.png", value:'4D', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/4C.png", value:'4C', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/4H.png", value:'4H', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/5S.png", value:'5S', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/5D.png", value:'5D', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/5C.png", value:'5C', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/5H.png", value:'5H', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/6S.png", value:'6S', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/6D.png", value:'6D', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/6C.png", value:'6C', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/6H.png", value:'6H', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/7S.png", value:'7S', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/7D.png", value:'7D', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/7C.png", value:'7C', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/7H.png", value:'7H', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/8S.png", value:'8S', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/8D.png", value:'8D', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/8C.png", value:'8C', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/8H.png", value:'8H', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/9S.png", value:'9S', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/9D.png", value:'9D', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/9C.png", value:'9C', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/9H.png", value:'9H', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/10S.png", value:'10S', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/10D.png", value:'10D', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/10C.png", value:'10C', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/10H.png", value:'10H', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/KS.png", value:'KS', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/KD.png", value:'KD', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/KC.png", value:'KC', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/KH.png", value:'KH', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/JS.png", value:'JS', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/JD.png", value:'JD', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/JC.png", value:'JC', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/JH.png", value:'JH', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/QS.png", value:'QS', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/QD.png",value:'QD', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/QC.png", value:'QC', player:null, cameout:false, count:2});
    initialCards.push({src:"./images/QH.png", value:'QH', player:null, cameout:false, count:2});

    let card;
    let count = 0;
    while(count<6){
        card = initialCards[Math.floor(Math.random() * initialCards.length)];
        if (card.count>0){
            card.count = card.count - 1;
            card.player = 1;
            count+=1;
            player1.push(card);
            continue;
        }
    }
    count = 0;
    while(count<6){
        card = initialCards[Math.floor(Math.random() * initialCards.length)];
        if (card.count>0){
            card.count = card.count - 1;
            count+=1;
            card.player = 2;
            player2.push(card);
            continue;
        }
    }

    //console.log(initialCards);
    return {initialCards, player1, player2};
};


export default InitializeCards;