const ProgressBar = ({ progress }) => {
  return (
    <div 
      className="h-full bg-gray-300 backdrop-blur-lg bg-opacity-50 absolute bottom-0 left-0" 
      style={{ width: `${progress}%`}}>
    </div>
  )
}

export default ProgressBar