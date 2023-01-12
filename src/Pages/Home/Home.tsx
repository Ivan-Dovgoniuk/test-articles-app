import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useSearch } from '../../customHooks/search.hook';

import SearchField from '../../Components/Filter/SearchField'
import CardItem from '../../Components/CardItem/CardItem';

import Grid from '@mui/material/Grid';

import './Home.scss'

import { RootState } from '../../store';

import { getNumberOfArticles } from '../../slices/articlesSlice';


export default function Home() {

  const dispatch = useDispatch();

  const articles = useSelector((state:RootState)=>state.articles.articles)

  const [searchText,setSearchText] = useState<string>('')

  const {data,searchWords} = useSearch(searchText,articles)

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
