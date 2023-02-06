import ReactPlayer from 'react-player'

const VideoPlayer = props => {
  const {videoUrl} = props
  return (
    <div className="video-container">
      <div className="responsive-container">
        <ReactPlayer url={videoUrl} controls />
      </div>
    </div>
  )
}
export default VideoPlayer
