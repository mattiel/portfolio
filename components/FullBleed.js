const FullBleed = ({ children, brute, className }) => {
  return(
    <section className={`full-bleed${brute && ' full-bleed--brute'} ${className ? ' ' + className : ''}`}>
      {children}
    </section>
  )
}

export default FullBleed