// Write your code here
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import VideoPlayer from '../VideoPlayer'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {arr} = props
  const {thumbnailUrl, videoUrl, categoryId} = arr

  return (
    <>
      <Popup
        trigger={
          <button className="trigger-button" type="button">
            <div>
              <img src={thumbnailUrl} alt="thumbnail" />
            </div>
          </button>
        }
        modal
        position="right center"
      >
        {close => (
          <div className="popupslit">
            <button
              type="button"
              data-testid="closeButton"
              className="btn"
              onClick={close}
            >
              <IoMdClose />
            </button>
            <span>
              <VideoPlayer videoUrl={videoUrl} />
            </span>
            <p>{categoryId}</p>
          </div>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
