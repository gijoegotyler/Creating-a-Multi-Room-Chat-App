var socket = io.connect('http://192.168.0.5:5000');

var room = 'general'

socket.on('connect', function(data) {
  socket.emit('join');
});

socket.on('thread', function(data, rom) {
    if (rom == room) {
      document.getElementById('thread').innerHTML += '<li id="messages">'+data+'</li>';
    }
});

let subutton = document.getElementById('submitit')

function sendMess() {
  socket.emit('messages', document.getElementById('message').value, room);
  document.getElementById('message').value = '';
};
