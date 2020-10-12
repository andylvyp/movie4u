import React, { useState } from 'react'
import '@material/react-card/dist/card.css'
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
} from '@material/react-card'
import img1 from '../image/jurassic.jpg'
import img2 from '../image/forest.jpg'
import img3 from '../image/knife.jpg'
import img4 from '../image/joker.jpg'
import './Recommendation.css'
import { Button } from './Button'
import Footer from 'rc-footer'
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'

const Recommendation = ({ movies }) => {

  const [favorite, setFavorite] = useState(false)

  const showimg = (id) => {
    if (id === 1) {
      return <CardMedia square imageUrl={img1} />
    }
    if (id === 2) {
      return <CardMedia square imageUrl={img2} />
    }
    if (id === 3) {
      return <CardMedia square imageUrl={img3} />
    }
    if (id === 4) {
      return <CardMedia square imageUrl={img4} />
    }
  }

  return (
    <div style={{ backgroundColor: '#16213e', marginLeft: '300px', marginRight: '300px', marginTop: '40px', paddingBottom: '40px' }}>
      <div className="title">Movies</div>
      <ul style={{ textAlign: 'center', margin: '0px', padding: '0px' }}>
        {movies.map(movie =>
          // <Info key={movie.id} movie={movie}></Info>
          (
            <Card key= {movie.id} style={{ height:'380px', width:'250px', display:'inline-block', marginLeft:'15px', marginRight:'15px' }}>
              <CardPrimaryContent>
                {/* <h1>{movie.name}</h1> */}
                {showimg(movie.id)}
              </CardPrimaryContent>
              <h1 className="mt">{movie.name}</h1>
              <CardActions>
                <CardActionButtons>
                  <Button buttonStyle='btn--title'>View More</Button>
                </CardActionButtons>


                {
                  favorite ? (
                    <button style={{ border: '1px solid transparent', outline: 'none', backgroundColor: 'transparent', marginLeft:'70px', color:'#de4463' }} onClick={ () => setFavorite(!favorite)}>
                      <BsFillHeartFill  style={{ width:'150%', height:'150%' }} />
                    </button>
                  ): (
                    <button style={{ border: '1px solid transparent', outline: 'none', backgroundColor: 'transparent', marginLeft:'70px', color:'#de4463' }} onClick={ () => setFavorite(!favorite)}>
                      <BsHeart  style={{ width:'150%', height:'150%' }}/>
                    </button>
                  )
                }
              </CardActions>
            </Card>
          )
        )}
        <Footer />
      </ul>
    </div>
  )
}

export default Recommendation