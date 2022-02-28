// Code your solutions in this file
function writeCards (names,toDo){
    let thankyou = []
    for (let i =0; i < names.length; i++){
        thankyou.push( `Thank you, ${names[i]}, for the wonderful ${toDo} gift!` )
      }
return thankyou
}
//returns an array of thankyou message for each name provided
//assigns thank you to an array
//names run through loop
//.push add the extra elemenets to create a sentence

function countDown (start){
    while (start >0){
        console.log(start);
        start -=1;
    }
    console.log(start);
}