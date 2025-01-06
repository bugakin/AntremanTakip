import React, { useContext } from 'react'
import '../assets/Styles/search-bar.scss'
import { DataContext } from '../context/DataContext';


const SearchBar = () => {

  const {setSelectedCategory, categories} = useContext(DataContext);
  return (
    <div className="search-bar">
          <ul className="categories">
            {
                categories.map(item=>
                    <button key={item.id} onClick={e=>setSelectedCategory(e.target.innerText)}>{item.categoryName}</button>
                )
            }
          </ul>
    </div>
  )
}

export default SearchBar