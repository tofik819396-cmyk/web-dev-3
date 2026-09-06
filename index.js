const express = require('express');
const app = express();
const notesRoutes = require("./routes/notesRoutes")
const router = express.Router();




app.use("/api",notesRoutes)
app.use(express.json());


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})