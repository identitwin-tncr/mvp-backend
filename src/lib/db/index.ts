import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

const connectMongoDB = async () => {
        try{
           await mongoose.connect(MONGODB_URL, {
               // useCreateIndex: true,
               autoIndex: true
           });
            console.log('MongoDB connection established');
        }catch(err){
            console.error(err);
        }
        
}

export {
    connectMongoDB
}