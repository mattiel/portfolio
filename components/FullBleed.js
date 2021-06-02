const FullBleed = ({ children }) => {
  return(
    <section className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
      {children}
    </section>
  )
}

export default FullBleed