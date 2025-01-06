import React, { useContext } from 'react'
import '../assets/Styles/card.scss'
import { IoTrashOutline } from "react-icons/io5";
import { FaPenFancy } from "react-icons/fa";
import DefaultBook from "../assets/img/wolf.jpg"
import { DataContext } from '../context/DataContext';


const Card = ({exercise}) => {

  const {deleteExercise,setSelectedExercise}=useContext(DataContext)



  
  return (
    
     <div className="card">
        <button className='delete' onClick={()=>deleteExercise(exercise.id)} ><IoTrashOutline size={15} /></button>
        <button className='edit' onClick={()=>setSelectedExercise(exercise)}><FaPenFancy size={15} /></button>
        <img src={exercise.image ? exercise.image : DefaultBook} alt="" />
        <div className="card-content">
            <h3>{exercise.exerciseName}</h3>
            <p>{exercise.set} set {exercise.rep} tekrar</p>
            <p>{exercise.weight} kg</p>          
           
        </div>
    </div>
    
    
  )
}

export default Card