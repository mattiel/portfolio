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
                    A Cloud-Powered ERP and CRM for
                    <strong className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-green-400 to-green-500"> Supermarkets </strong>
                    In South Korea
                  </h2>
                  <p className="font-medium text-gray-700 text-xl">
                    A powerful suite to replace old-school management system for non-corporate supermarkets at affordable and reasonable prices.
                    
                  </p>
                </div>
                <div className="h-auto md:h-[30rem] md:ml-4">
                  <img src="/tomato/tomato-dashboard.png" className="md:absolute shadow-md"/>
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