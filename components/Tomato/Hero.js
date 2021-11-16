const Hero = () => {
  return (
    <>
      <section
        className="pt-36 full-bleed bg-black"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 229, 119, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #000000;'
        }}
      >
        <div
          className="layout pt-32"
        >
          {/* <section className="flex pt-20 pb-12 z-10">
            <img src="/tomato/logo.svg" width="104"/>
          </section> */}
          <div className="grid grid-cols-1 gap-8">
            <div className="mb-4 flex flex-col justify-center max-w-prose text-center justify-self-center">
              <h2 className="font-bold text-white text-4xl mb-4 leading-tight">
                A Cloud-Powered ERP and CRM for
                <strong className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-green-400 to-green-500"> Supermarkets </strong>
                In South Korea
              </h2>
              <p className="font-medium text-gray-300 text-xl">
                A powerful suite to replace old-school management system for non-corporate supermarkets at affordable and reasonable prices.

              </p>
            </div>
            <div className="h-auto md:h-[30rem] md:ml-4 relative">
              <img src="/tomato/tomato-dashboard.png" className="w-full"/>
              <div
                className="absolute left-0 bottom-0 w-full h-16"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .25))'
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;