import winston from "winston"
import {configs} from "./index"


const logger = winston.createLogger({
    level:configs.node_env==="production" ? "info" : "debug",
    format:winston.format.combine(
        winston.format.timestamp({format:"YYY-MM-DD hh:mm:ss"}),
        winston.format.errors({stack:true}),
        winston.format.splat(),
        winston.format.json()

    ),
    defaultMeta:{service:"Layered architetcure "},
    transports:[
        new winston.transports.File({filename:"logs/error.log",level:"error"}),
        new winston.transports.File({filename:"logs/combine.log"})


    ]
})


if(configs.node_env!=="production"){
    logger.add(new winston.transports.Console({
        format:winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }))
}

export default logger ; 