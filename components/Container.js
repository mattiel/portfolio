const Container = ({ children, className, hideGuideline }) => {
  return (
    <section 
      className={`
        container mx-auto px-5 relative max-w-screen-xl
        ${className ? className : ''}
      `}>
      { children }
    </section>
  );
};

export default Container;