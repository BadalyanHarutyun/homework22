
const express = require('express');
const app = express();
const port = 8080;
let date= new Date();
const router = express.Router();
router.get('/',(req,res)=>{
	res.end(date+" "+'get'); 
})
router.put('/',(req,res)=>{
	res.end(date+" "+'put'); 
})
router.post('/',(req,res)=>{
	res.end(date+" "+'post'); 
})
router.delete('/',(req,res)=>{
	res.end(date+" "+'delete'); 
})
app.use('/',router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})