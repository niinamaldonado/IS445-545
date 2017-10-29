const messages = [ //constant messages
    'message 01',
    'message 02',
    'message 03',
    'message 04',
    'message 05',
]

let programOutput = document.getElementById("programOutput")
myProgram = function() { //user program   
    let input = userDecision()
    inputHandler(input)

}

let userDecision = function() { // Prompt, then run integer.    
    let input = prompt("Choose wisely: \n 1. Show Messages \n 2. Add Message \n 3. Delete Message \n 0. Quit")
    return parseInt(input)
}
// if user picks a number, do this.
let inputHandler = function(choice) {
    switch (choice) {
        case 1:
            printList()
            break

        case 2:
            addMsg()
            break

        case 3:
            deleteMsg()
            break

        case 0:
            exit()
            break
            
        default:
            refreshMsg()
            break

    }
}

let exit = function() {}    // 0 = exit


let addMsg = function() {
    let message = prompt("New Message:") // prompt for new message
    messages.push(message)
    printList() // print messages with new one
}

let deleteMsg = function() {
    let listLength = messages.length
    let msgDelete = prompt("Delete message from range 1-" + list_length) //prompt to delete
    msgDelete = parseInt(msgDelete)
    if (1 <= msgDelete & msgDelete <= list_length){
    messages.splice(msgDelete-1,1) //delete message
    printList()

}
    else {
    refreshMsg() //invalid input
}

}

let printList = function() {
    messageArea.innerHTML = ""  //print messages
    for (items in messages) {
        let display_items = parseInt(items)+1
        messageArea.innerHTML += "<p>"
        messageArea.innerHTML += display_items + ": "
        messageArea.innerHTML += messages[items]
        messageArea.innerHTML += "</p>"
    }
}
let refreshMsg = function(){
messageOutput.innerHTML = "<center>Oops! Please refresh the page.</center>" // invalid input message
}


myProgram()