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
                    A modern hotel guest experience
                  </h2>
                  <p className="font-medium text-gray-700 text-xl">
                    Providing full, modernized hotel services and commodity for guests without a hassle.
                  </p>
                </div>
                <div className="grid place-items-center md:ml-4">
                  <img src="/stay/dashboard.jpg" className="max-h-[32rem]"/>
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