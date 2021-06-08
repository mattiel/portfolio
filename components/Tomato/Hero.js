import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'

const Hero = () => {
  return (
    <>
      <Container>
        <FullBleed>
          <div 
            className="bg-no-repeat bg-bottom h-screen max-h-[52rem] overflow-hidden"
            // style={{backgroundImage: "url('/tomato/waves.svg')", backgroundSize: "100% auto"}}
          >
            <Container>
              <section className="flex pt-20 pb-12 z-10">
                <img src="/tomato/logo.svg" width="104"/>
              </section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4 flex flex-col justify-center">
                  <h2 className="font-bold text-gray-900 text-4xl mb-4 leading-tight">
                    A Cloud-Powered ERP and CRM for Supermarkets In South Korea
                  </h2>
                  <p className="font-medium text-gray-700 text-xl">
                    A powerful suite to replace old-school management system for non-corporate supermarkets at affordable and reasonable prices.
                    
                  </p>
                </div>
                <div className="h-auto md:h-[30rem]">
                  <img src="/tomato-thumbnail.png" className="md:absolute shadow-md"/>
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