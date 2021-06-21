const FullBleed = ({ children, className }) => {
  return(
    <section className={`w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] ${className ? className : ''}`}>
      {children}
    </section>
  )
}

export default FullBleed