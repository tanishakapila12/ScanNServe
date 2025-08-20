import express  from "express"
import cors from 'cors'


// app config
const app = express()
const port = 4000;

// middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("API Working")
  })

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://scannserve:121411@cluster0.joiznfu.mongodb.net/?
//username=scannserve & password=121411 & retryWrites=true & w=majority