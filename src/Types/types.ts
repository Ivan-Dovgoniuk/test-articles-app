export type IArticle = {
    id:number,
    title:string,
    imageUrl:string,
    newsSite:string,
    summary:string,
    publishedAt:string,
    updatedAt:string,
    featured:boolean,
    launches:[],
    events:[]
}