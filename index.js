// Code your solutions in this file

function writeCards (list, occasion) {
    let messages = []
    for (let i = 0; i < list.length; i++) {
         messages.push( `Thank you, ${list[i]}, for the wonderful ${occasion} gift!`)
    }
    return messages
}

function countDown (interger) {
    for (let i = interger; i >= 0; i--) {
        console.log(i);
    }
}
