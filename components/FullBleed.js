import clsx from "clsx"

const FullBleed = ({ children, brute, className }) => {

  const classes = clsx(
    "full-bleed",
    brute && "full-bleed--brute",
    className
  )

  return(
    <section className={classes}>
      {children}
    </section>
  )
}

export default FullBleed