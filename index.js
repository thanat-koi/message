const sendBtn = document.querySelector('#sendBtn');
const mesIn = document.querySelector('#mesIn');
const mesOut = document.querySelector('#mesOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg() {
    let content = mesIn.value;
    if(content === '') {
    alert('Please enter value') 
    } else {
        mesOut.innerHTML = content;
        mesIn.value = '';
    }
} 
