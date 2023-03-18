import React from 'react'
import './style.scss'

const Footer = () => {
   return (
     <div className='container'>
       <div className='row'>
         <footer className='footer'>
           <div>MOVIESinfo</div>
           <div className='small'>
             TestWork: <span className='small-red'>MOVIESinfo</span>
           </div>
           <div>
             <div className='small small-red'>Сделано в СССР</div>Павел Габов
           </div>
         </footer>
       </div>
     </div>
   )
}

export default Footer
