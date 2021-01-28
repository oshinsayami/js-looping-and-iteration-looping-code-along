// Code your solutions in this file
function writeCards(strings, event){
    let cards = []
    for(let i=0; i <strings.length; i++){
        cards.push(`Thank you, ${strings[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}


function countDown(num){
    while(num > 0){
        console.log(num);
        num--;
    }
    console.log(num)
}