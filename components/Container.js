const Container = ({ children }) => {
  return (
    <section className="container max-w-screen-lg mx-auto relative px-6">
      { children }
    </section>
  );
};

export default Container;