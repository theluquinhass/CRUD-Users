import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB conectado com Sucesso!!")
    } catch (err) {
        console.error("Error ao conectar ao banco de Dados!", err)
        process.exit(1)
    }
    
}

export default connectDB