import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ArticlePage from './Pages/ArticlePage/ArticlePage';
import Home from './Pages/Home/Home';
import { getArticles } from './slices/articlesSlice';
import { AppDispatch } from './store';

function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    dispatch(getArticles())
  },[])

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/acticles/:id' element={<ArticlePage/>}/>
    </Routes>
  );
}

export default App;
