
import { Delta } from '../districtdata_classes/Delta';

export class Districtdatavalue{
    constructor(
    public notes:string,
    public active:number,
    public confirmed:number,
    public deceased:number,
    public recovered:number,
    public delta:Delta){}
}