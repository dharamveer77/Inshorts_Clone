import mongoose from "mongoose"


const Connection=async (username,password)=>{
const URL=process.env.DB_URL;
    try{
       await mongoose.connect(URL,{useNewUrlParser:true})
       console.log('Database connected successfully')

    }catch(error){
        console.log('Error while connecting with the database',error)
    }


}

export default Connection
