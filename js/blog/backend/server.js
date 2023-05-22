const router = require("./router/router.js")
const express = require("express");
const app = express();
const PORT = 8000;


app.use(express.json());


app.use("/api/blog", router);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
