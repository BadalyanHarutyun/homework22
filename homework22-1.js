const fs = require('fs');
const events=require('events');
const event = new events.EventEmitter();;
event.on('homework',(data)=>{
	data=fs.readFileSync('Homeworks.txt','UTF-8',(err)=>{if(err){console.log(err);}})
	console.log(data);
})
event.emit('homework');