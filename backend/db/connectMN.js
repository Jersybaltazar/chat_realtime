import mongoose from "mongoose";

const connectMN = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Conectado a MongoDb")
    } catch (error) {
        console.log("Error al conectarse a una base de datos",error.message)
    }
}
export default connectMN;