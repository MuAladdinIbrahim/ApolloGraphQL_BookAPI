import express from "express";

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.json({msg:'hello'})
})

//TODO console.log not allowed in npm run build
app.listen(port, () => console.log(`server running on ${port}`));