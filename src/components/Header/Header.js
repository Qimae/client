import React from 'react'

const Header = () => {
  return (
    <div id='Header'>
        <div className='h-flex'>
            <div className='h-text-advert'>
               <h1>School <span>Selection</span> on Hand</h1>
               <p>When the results are announced and selection is done, get direct access to the <br/>selected school databases and choose any school prefferred in realtime.</p>
               <button className='h-button'>Get Started</button>
            </div>
            <div className='h-text-img'></div>
        </div>
    </div>
  )
}

export default Header