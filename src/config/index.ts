import dotenv from "dotenv"
dotenv.config();


interface config {
    node_env:string,
    port:number,
    mongodb:string|undefined,
    cors:{
        origin:string,
        credentials:boolean
    },
    api:{
        prefix:string,
        version:string
    }
}



export const configs:config = {


    node_env:"development",

    port:Number(process.env.PORT) || 3000 ,
    mongodb:process.env.MONGO_URI ,
    cors:{
        origin:"http://localhost:5173",
        credentials:true
    },
  
    api:{
        prefix:"/api",
        version:"/v1",
    }




}