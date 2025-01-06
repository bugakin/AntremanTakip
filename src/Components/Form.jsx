import React, { useContext, useEffect, useState } from 'react'
import '../assets/Styles/form.scss'
import { DataContext } from '../context/DataContext'

const Form = () => {
 const {selectedExercise,handleSubmit,exerciseName,rep,set,weight,image,type,setExerciseName,setRep,setSet,setWeight,setImage,setType}=useContext(DataContext)

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedExercise ? "Egzersiz Düzenle":"Egzersiz Ekle"}</h3>
      <input value={exerciseName} onChange={e=>setExerciseName(e.target.value)} type="text" placeholder='Egzersiz Adı' />
      <input value={set} onChange={e=>setSet(e.target.value)} type="number" placeholder='Set Sayısı' />
      <input value={rep} onChange={e=>setRep(e.target.value)} type="number" placeholder='Tekrar Sayısı' />
      <input value={weight} onChange={e=>setWeight(e.target.value)} type="number" placeholder='Ağırlık' />
      <input value={image} onChange={e=>setImage(e.target.value)} type="url" placeholder='Egzersiz Foto' />
      <select value={type} onChange={e=>setType(e.target.value)}>
        <option>Push</option>
        <option>Pull</option>
        <option>Leg</option>
      </select>
      <input disabled={exerciseName==="" || set==="" || rep==="" || weight ==="" || type===""} type="submit" placeholder={selectedExercise ? "Düzenle":"Ekle"} />
    </form>
  )
}

export default Form