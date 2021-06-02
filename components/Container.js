const Container = ({ children }) => {
  return (
    <section className="container max-w-screen-lg mx-auto relative px-4">
      { children }
    </section>
  );
};

export default Container;