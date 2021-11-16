const Hero = () => {
  return (
    <section 
      className="pt-36 full-bleed bg-black"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(165, 180, 252, 0.5) 0%, rgba(0, 0, 0, 0) 100%), #000000;'
      }}
    >
      <div className="layout">
        <div className="grid grid-cols-1 gap-8 place-items-center mb-8">
          <div className="flex flex-col justify-center text-center max-w-prose">
            <img src="/bridge/logo.svg" width="146" height="40" className="mx-auto mb-4"/>
            <h2 className="font-bold text-6xl mb-4 bridge-hero-text bg-clip-text text-transparent">
              A personal home server for transparent data ownership
            </h2>
            <p className="font-medium text-gray-300 text-xl">
              <strong className="text-white mr-0.5">Bridge. </strong>A data
              escrow, Network Attached Storage (NAS), and a Wi-Fi router to
              transparently share sensitive information, securely store data and
              use the browse the web without privacy-invading elements.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img src="/bridge/hero.png" className="w-full min-w-[1920px] alt="Bridge router with dashboard cards/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
