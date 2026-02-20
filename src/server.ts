import { app } from "./app";
import { configs } from "./config";
import { connectDb } from "./config/db";
import logger from "./config/logger";


const runServer = ()=>{
    connectDb();
    app.listen(configs.port,()=>{
        logger.info(`server is running at port ${configs.port}`)
    })
}

runServer()
