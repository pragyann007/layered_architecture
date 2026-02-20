import express from "express"
import cors from "cors"
import { configs } from "./config";

export const app = express();

app.use(cors({
    origin:configs.cors.origin,
    credentials:configs.cors.credentials
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("hii ")
})




