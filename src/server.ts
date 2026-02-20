import { app } from "./app";
import { configs } from "./config";

app.listen(configs.port,()=>{
    console.log(`server is running at port ${808}`)
})