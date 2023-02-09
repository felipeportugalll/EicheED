import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; //caminho p o mongo seguro
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json());

mongoose.set("strictQuery", true);


const mongoDB = (process.env.MONGO) || 'mongodb://127.0.0.1/my_database';
console.log('mongo conectado');

mongoose.connect(mongoDB, {useNewUrlParser:true}).then( ()=>{
    app.listen(4000,()=>{
        console.log("Conectado ao servidor!");
    });
})
.catch((err)=>{
    throw err;
})


// mongoose.connect(process.env.MONGO).then( ()=>{
//     console.log("DB conectado")
//     })
//     .catch(e => {
//         const msg = 'erro, mongo n conectado'
//         console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
//     })

// const connect = () =>{
//     mongoose.connect(process.env.MONGO).then( ()=>{
//         console.log("Conectado ao DB");
//     })
//     .catch((err) => {
//         throw err;
//     });
// };

//midlewares

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((err, req,res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Algo deu errado";
    return res.status(status).json({
        succcess:false,
        status:status,
        message:message
    })
})




