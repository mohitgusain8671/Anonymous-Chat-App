const socket = io();
let mySocketId = null;
socket.on('socketid',(id)=>{
    console.log(id);
    mySocketId = id;
    audio.load();
})

const messageInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("send");
const audio = new Audio('../assets/mixkit-long-pop-2358.wav')
function showNotification() {
    const notificationBanner = document.getElementById("notification-banner");
    notificationBanner.classList.add("show");
    audio.currentTime = 0;
    audio.play();
    // Hide notification after 3 seconds
    setTimeout(() => {
      notificationBanner.classList.remove("show");
    }, 3000);
}
document.addEventListener('click', () => {
    // This will allow the audio to play after the first click
    audio.load(); // Preload the audio to prepare for playback
});

const sendMessage = ()=>{
    const message = messageInput.value.trim();
    if(message){
        socket.emit('send-message',message);
        messageInput.value = '';
    }
}
console.log(messageInput);
console.log(sendBtn);
sendBtn.addEventListener("click",sendMessage);
messageInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
});

socket.on('recieve-message',(data)=>{
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.textContent = data.message;
    if(data.id==mySocketId)
        messageElement.classList.add("sender");
    else{
        messageElement.classList.add("receiver");
        showNotification();
    }
    document.getElementById("chat-messages").appendChild(messageElement);
    messageInput.value = ""; // Clear the input field
    messageInput.focus();
})