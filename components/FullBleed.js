const FullBleed = ({ children, className }) => {
  return(
    <section className={`full-bleed ${className ? className : ''}`}>
      {children}
    </section>
  )
}

export default FullBleed