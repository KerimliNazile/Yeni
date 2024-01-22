import express from 'express'
const app = express()
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'

dotenv.config()
app.use(cors())
app.use(express.json())

const shellSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },

},{timestamps:true})

const Shells = mongoose.model("Shells", shellSchema)

app.get('/shells',async (req, res) => {
    try {
        const shells=await  Shells.find({})
        res.send(shells)
    } catch (error) {
        res.status(500).json({message:error})
    }
    
})
app.get('/shells/:id',async (req, res) => {
    try {
        const shells=await Shells.findById(req.params.id)
        res.send(shells)
    } catch (error) {
        res.status(500).json({message:error})
    }
})


app.post('/shells', async(req, res) => {
    try {
        const shell= new Shells({
            name:req.body.name,
            image:req.body.image,
        })
        await shell.save()
        res.send({message:"Created"})
    } catch (error) {
        res.status(500).json({message:error})
    }
})


app.delete('/shells/:id',async (req, res) => {
    try {
        const shells= await Shells.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Deleted"})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log(`Example app listening on port `)
})