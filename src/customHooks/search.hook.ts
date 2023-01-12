import { IArticle } from "../Types/types"


export const useSearch =(searchText:string,articles:IArticle[])=>{

    const searchWords = searchText.split(/\s/).map(word => word.toLowerCase())

    const filteredArticlesByTitle = articles.filter(({title})=>{
      const titleWordsArr = title.split(/\s/).map(word => word.toLowerCase())
      for(let i = 0;i<titleWordsArr.length;i++){
        if(searchWords.includes(titleWordsArr[i])){
          return true
        }
      }
    })
    const filteredArticlesByDescription = articles.filter(({summary})=>{
      const descriptionWordsArr = summary.split(/\s/).map(word => word.toLowerCase())
      for(let i = 0;i<descriptionWordsArr.length;i++){
        if(searchWords.includes(descriptionWordsArr[i])){
          return true
        }
      }
    })
  
    const filteredArticlesByTitleAndDescription = filteredArticlesByTitle.concat(filteredArticlesByDescription)
  
    let filteredArticles = filteredArticlesByTitleAndDescription.filter((item,index)=>{
        return filteredArticlesByTitleAndDescription.indexOf(item) === index
    })
  
    let data = articles
    if(searchText.length){
      data = filteredArticles
    }
    return {data,searchWords}
}