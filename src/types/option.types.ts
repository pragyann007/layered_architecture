import { neverOrAny } from "mongoose/types/inferschematype";

export interface options{
    sort:string,
    skip:number,limit:number,populate:string
}