import React, { useContext } from 'react'
import Card from './Card'
import '../assets/Styles/card-list.scss'
import { DataContext } from '../context/DataContext'


const CardList = () => {

  const{exercises, selectedCategory} = useContext(DataContext)



  return (
    
    <div className="card-list">
        {
          exercises.map(item=>
            !exercises.isDeleted &&
            (selectedCategory===item.type || selectedCategory === "Full") &&
            <Card key={item.id} exercise={item}/>
          )
        }     
    </div>
  )
}

export default CardList