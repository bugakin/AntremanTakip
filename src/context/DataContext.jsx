import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

//context oluşturulması
export const DataContext=createContext();

//yaratılan context için bir sağlayıcı oluşturulması
export const DataProvider=({children})=>{

//projedkei tüm metotlar buraya gelecek

const [exercises, setExercises]=useState([]);
const [categories,setCategories]=useState([]);
const [selectedCategory, setSelectedCategory]=useState("Full")
const [selectedExercise, setSelectedExercise]=useState("");
const [exerciseName, setExerciseName]=useState("");
const [set, setSet]=useState("");
const [rep, setRep]=useState("");
const [weight, setWeight]=useState("");
const [type, setType]=useState("");
const [image, setImage]=useState("");


const getExercises= async()=>{
 const url="http://localhost:3005/exercises"
 const response = await fetch(url);
 const result=await response.json();
 setExercises(result);
}

const getCategories=async()=>{
  const url="http://localhost:3005/categories"
  const response=await axios.get(url);
  const result= await response.data;
  setCategories(result);
}

const addExercise=async (newExercise)=>{
 let url="http://localhost:3005/exercises";
 if(!selectedExercise){
   newExercise.id=(Number(exercises[exercises.length-1].id)+1).toString(),
  //setExercises([...exercises,newExercise]);//frontend tarafında ekler
 setExercises(prev=>[...prev,newExercise])//bu şekilde daha kontrollü bir ekleme yapmış oluruz

 const response= await axios.post(url,newExercise);//backend tarafında ekler

 toast.success('Yeni egzersiz eklendi!', {
   position: "top-right",
   autoClose: 4000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "colored",
   transition: Bounce,
   });


 }
 else{
   //Backend düzenleme
   url+=`/${selectedExercise.id}`
   const response= await axios.put(url,newExercise);
   newExercise.id=selectedExercise.id;
   setExercises(prev=>prev.map(exercise=>{
     if(exercise.id===selectedExercise.id){
       //düzenenen kitapsa
       return {...newExercise}
     }
     else{
       //düzenleme olmayacak normal kitap
       return {...exercise}
     }
   }))
   setSelectedExercise("");


   toast.warn('Egzersiz düzenlendi!', {
     position: "top-right",
     autoClose: 4000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "colored",
     transition: Bounce,
     });


 }
 
 
}

const deleteExercise = async (id)=>{
 //frontend silme
 //setExercises(exercises.filter(item=>item.id!==id))
 setExercises(prev=>prev.filter(item=>item.id!==id));

 //backend silme
 const url =`http://localhost:3005/exercises/${id}`
 //const response=await axios.delete(url); bu şekilde silme yapılıyor. Ama kullanılmaz tehlikeli !!!
 const response =await axios.patch(url,{isDeleted:true});


 toast.error('Egzersiz Silindi!', {
   position: "top-right",
   autoClose: 4000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "colored",
   transition: Bounce,
   });


}

const handleSubmit=(e)=>{
  e.preventDefault();
  addExercise({
   
    exerciseName:exerciseName,
    set:set,
    rep:rep,
    weight:weight,
    type:type,
    image:image
  })

  //Form resetleme
setExerciseName("");
setSet("");
setRep("");
setWeight("");
setType("");
setImage("");
}



useEffect(()=>{
  if(selectedExercise){
    setExerciseName(selectedExercise.exerciseName);
    setSet(selectedExercise.set);
    setRep(selectedExercise.rep);
    setWeight(selectedExercise.weight);
    setType(selectedExercise.type);
    setImage(selectedExercise.image);
  }
},[selectedExercise])
useEffect(()=>{
    getExercises();//sayfa yüklendiğinde bi kere gelmesini sitersek
    getCategories();
   }, [])
   

    return <DataContext.Provider value={{

        setSelectedCategory, categories,//searchbarda kullanılacaklar
        exercises, selectedCategory,//Cardlistte kullanılacaklar
        deleteExercise,setSelectedExercise,//Card'da kullanılacak
        selectedExercise,handleSubmit,exerciseName,rep,set,weight,image,type,setExerciseName,setRep,setSet,setWeight,setImage,setType,//Formda kullanılacaklar

    }}>
        {children}
    </DataContext.Provider>
}