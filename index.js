const express = require("express");
const morgan = require("morgan");
const app = express();
const notesRoutes = require("./routes/notesRoutes")
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("combined"))


app.use("/api", notesRoutes)

app.listen(3000, () => {
    console.log("server is running on port 3000")
})