const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.listen(3000,()=>{
    console.log(`Server está rodando na porta: ${port}`);
});
app.get('/gatos', async(req,res)=>{
    const api = await fetch('https://catfact.ninja/facts?limit=12');
    const fatosjson = await api.json();
    res.send(fatosjson.data);
})