import React from 'react'
import Logo from '../assets/img/Hulk.png'
import '../assets/Styles/navi.scss'
const Navi = () => {
  return (
    <nav>
        <div className="brand">
            <img src={Logo} alt="" />
            <h3>RepMaster</h3>
        </div>       
        <div className='user-card'>
            <button className='bn632-hover bn21'>Giriş Yap</button>
        </div>
       
        
    </nav>
  )
}

export default Navi