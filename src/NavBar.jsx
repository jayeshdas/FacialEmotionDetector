import React from 'react'

export default function NavBar() {
  return (
    <div className='navBar'>
        <h2>Facial emotion recognition and prediction</h2>
        <button className='hide' onClick={() => print()} >Download Report</button>
    </div>
  )
}
