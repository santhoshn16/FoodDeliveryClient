
const GetNewCard = (cards, playerNumber ) => {
    let count = 0;
    let newPickedCard = null;
    let card = cards;
    while (count < 1) {
        newPickedCard = card[Math.floor(Math.random() * card.length)];
        console.log(newPickedCard.count);
        if (newPickedCard.count === 0){
            console.log('zero found');
            continue
        }
        else if (newPickedCard.count > 0) {
            console.log('non zero found');
            newPickedCard.count = newPickedCard.count - 1;
            newPickedCard.cameout = true;
            break;
        }
        count += 1;
        console.log(newPickedCard);
    }
    newPickedCard.player = playerNumber;
    console.log(card);
    return {newPickedCard, card};
};


export default GetNewCard;