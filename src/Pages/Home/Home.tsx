import React, { useEffect, useState } from 'react'
import SearchField from '../../Components/Filter/SearchField'
import Grid from '@mui/material/Grid';
import './Home.scss'
import CardItem from '../../Components/CardItem/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getNumberOfArticles } from '../../slices/articlesSlice';


export default function Home() {

  const articles = useSelector((state:RootState)=>state.articles.articles)

  const dispatch = useDispatch();

  const [searchText,setSearchText] = useState<string>('')

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

  useEffect(()=>{
    dispatch(getNumberOfArticles(data.length))
  },[data])

  



  return (
    <div className='container'>
        <SearchField searchText={searchText} setSearchText={setSearchText}/>
        <Grid container spacing='45px' columns={12} rowGap={3} sx={{marginTop:'43px',marginBottom:'100px'}}>
          { data.map(({id,title,imageUrl,summary,updatedAt})=>{
              return(
                <Grid item lg={4}>
                  <CardItem 
                        key={id}
                        id={id}
                        title={title}
                        image={imageUrl}
                        description={summary}
                        date={updatedAt}
                        searchWords={searchWords}
                  />
                </Grid>
              )
            })
          }
        </Grid>
    </div>
  )
}
