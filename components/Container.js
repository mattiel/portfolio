const Container = ({ children, className }) => {
  return (
    <section className={`container max-w-screen-lg mx-auto relative px-5 ${className ? className : ''}`}>
      { children }
    </section>
  );
};

export default Container;