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
                    An inspiration and training for 
                    <strong className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-indigo-400 to-indigo-500"> low-income individuals </strong>
                    for higher and satisfying income
                  </h2>
                  <p className="font-medium text-gray-700 text-xl">
                    Achieve is an organization that aims to inspire and encourage low-income individuals to get trained and employed with higher and satisfying income.
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