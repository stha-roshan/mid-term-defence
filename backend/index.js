import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./src/db/db.js"

dotenv.config({
    path : "./.env"
})


connectDB()
.then( () => {
    app.listen(process.env.PORT, () => {
        console.log(`server is running, SERVER HOST :: http://localhost:${process.env.PORT}`)
    })
})
.catch( (error) => {
    console.log(`couldnt connect to mongodb !!!   `, err)
})
