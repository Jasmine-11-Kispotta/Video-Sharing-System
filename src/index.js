import dotenv from 'dotenv' // using experimental feature for importing dotenv through 'import' keyword
import connectDB from './db/index.js'
import {app} from './app.js'

dotenv.config({
    path: './.env'
})

console.log(`URI: ${process.env.MONGODB_URI}`)

connectDB()
.then(()=>{
    app.on("error", (error) => {
        console.error("ERROR:", error)
        throw error 
       }
    )
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server running on ${process.env.PORT}`)
    })
}
)
.catch( (err) =>{
    console.log("Mongo DB connection failed", err)
}

)







/*connecting database and also initializing express
import express from 'express';
const app = express()
;(async () => {
   try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.error("ERROR:", error)
        throw error 
       })

       app.listen(process.env.PORT, () => {
         console.log(`App is listening on port ${process.env.PORT}`)
       })
   } catch(error){
       console.error("ERROR:", error)
       throw err    
   }
})()
*/