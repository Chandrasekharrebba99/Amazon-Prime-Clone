// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const ActionMovies = moviesList.filter(arr => arr.categoryId === 'ACTION')
  const ComedyMovies = moviesList.filter(arr => arr.categoryId === 'COMEDY')
  console.log(ComedyMovies)

  return (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="bgimg"
        />
      </div>
      <div>
        <h1>Action Movies</h1>
        <div>
          <MoviesSlider moviesList={ActionMovies} />
        </div>
      </div>
      <div>
        <h1>Comedy Movies</h1>
        <div>
          <MoviesSlider moviesList={ComedyMovies} />
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
