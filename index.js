const thankyouCards = [];
function writeCards(names, surprise) {
    for (let i = 0; i < names.length; i++){
    thankyouCards.push (`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
    debugger;}
    return thankyouCards;
}
function countDown(int) {
    let i = 11;
    while (i > 0){
        i--
        console.log(i);
    }
    return int;
}
