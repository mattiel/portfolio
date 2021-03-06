import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'

const Hero = () => {
  return (
    <>
      <Container>
        <FullBleed>
          <div 
            className="bg-no-repeat h-screen max-h-[46rem] overflow-hidden pt-32 pb-12 z-10"
          >
            <Container>
              {/* <section className="flex pt-20 pb-12 z-10">
                <img src="/tomato/logo.svg" width="104"/>
              </section> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4 flex flex-col justify-center">
                  <h2 className="font-bold text-gray-800 text-4xl mb-4 leading-tight">
                    Adaptive Jewelry for Self-expression for
                    <strong className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-red-400 to-pink-500"> Generation-Z </strong>
                  </h2>
                  <p className="font-medium text-gray-700 text-xl">
                    Forming the future of "Tribes".
                    With community being the underlying theme, the ecosystem focuses on how people create tribes and how this might be enhanced by tech in the future.  
                  </p>
                </div>
                <div className="h-auto md:h-[30rem] grid place-items-center md:ml-4">
                  <img src="/tribe/beacon-1.webp" className=" object-fill"/>
                </div>
              </div>
            </Container>
          </div>
        </FullBleed>
      </Container>
    </>
  );
};

export default Hero;