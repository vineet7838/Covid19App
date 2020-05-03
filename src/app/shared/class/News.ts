export class News{
    constructor(
        public id: number = 0,
        public title: string = "",
        public description: string = "",
        public summary: string = "",
        public details: string = "",
        public fileImage?: File ,
        public image?:string,
        public newsDate: Date = new Date()
    ) { }
}