import { Types,Model, Path } from "mongoose";
import { options } from "../types/option.types";

export class base<T> {
    model:Model<T> ;
    constructor(model:Model<T>){
        this.model = model ; 
    }

    async finAll(filter={},option:options){
        
        const {sort,skip,populate,limit} = option ;

        let query = this.model.find(filter);

        if(sort) query = query.sort(sort) ;
        if(skip) query = query.skip(skip);
        if(limit) query = query.limit(limit);
        if(populate) query = query.populate(populate) ;

        const result = await query.exec()

        return result ; 

    }





}