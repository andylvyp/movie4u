import React from 'react'
import img1 from '../image/1.jpg'
import img2 from '../image/2.jpg'
import img3 from '../image/3.jpg'
import './Actor.css'
import { Button } from './Button'

const Actor = ({ actors }) => {
  const showimg = (id) => {
    if (id === 1) {
      return <img style={{ height:'200px', width:'200px', borderRadius:'50%' }} src={img1}/>
    }
    if (id === 2) {
      return <img style={{ height:'200px', width:'200px', borderRadius:'50%' }} src={img2}/>
    }
    if (id === 3) {
      return <img style={{ height:'200px', width:'200px', borderRadius:'50%' }} src={img3}/>
    }
  }


  return(
    <div style={{ backgroundColor:'#16213e', marginLeft:'300px', marginRight:'300px',marginTop:'40px', paddingBottom:'30px', marginBottom:'40px' }}>
      <div className="title">Actors</div>
      <ul style={{ textAlign: 'center', margin: '0px', padding: '0px' }}>
        {actors.map(actor =>
          (
            <li key= {actor.id} style={{ display:'inline-block',paddingLeft:'30px',paddingRight:'30px',paddingTop:'10px' }}>
              {showimg(actor.id)}
              <div className="subtitle"> {actor.name} </div>
              <Button buttonStyle='btn--actor'>Watch More</Button>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Actor