import React from 'react'
import Arrow from '../../img/Arrow.png'
import './ArticlePage.scss'

import "@fontsource/montserrat";

import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { IArticle } from '../../Types/types';

export default function ArticlePage() {

    const articlesLoadingStatus = useSelector((state:RootState)=>state.articles.articlesLoadingStatus)
    const params = useParams();
    const articles = useSelector((state:RootState)=>state.articles.articles)

    if(articlesLoadingStatus == 'loading' || !articles.length){
        return <p>Loading...</p>
    }

    const id = params.id
    const article = articles.filter((item:IArticle)=> item.id.toString() == id)[0]
    const {title,imageUrl,summary} = article;

  return (
    <>
        <div className='background'>
            <img src={imageUrl} alt="background image" />
            <div className="article">
                <h1 className='article_title'>
                    {title}
                </h1>
                <p className='article_text'>
                    {summary} 
                </p>
                    <Link to="/">
                        <img src={Arrow} alt="" style={{width:"12px",height:"10px",transform:"rotate(180deg)",marginRight:'6px'}} />
                         Back to homepage
                    </Link>

            </div>
        </div>
    </>
  
  )
}
