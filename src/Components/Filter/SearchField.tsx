import React from 'react'
import { useSelector } from 'react-redux';
import SearchIcon from '../../img/Vector.png';
import { RootState } from '../../store';
import './SearchField.scss'

type SearchFieldProps = {
    searchText:string,
    setSearchText:React.Dispatch<React.SetStateAction<string>>
}

export default function SearchField({searchText,setSearchText}:SearchFieldProps) {

    const {numberOfArticles} = useSelector((state:RootState)=>state.articles)

  return (
    <div className='search'>
        <div className="search_wrapper">
            <h3 className='search_title'>
                Filter by keywords
            </h3>
            <div className="search_field">
                <img className='search_icon' src={SearchIcon} alt="Search Icon"/>
                <label htmlFor="search" style={{display:'none'}}>Search</label>
                <input id='search' type="text" placeholder='Search...' value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
            </div>
        </div>
        <div className="search_result">
            <b>Results: {numberOfArticles}</b>
        </div>
    </div>
  )
}
