import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'

const Hero = () => {
  return (
    <>
      <Container>
        <FullBleed>
          <div 
            className="bg-no-repeat bg-bottom h-screen max-h-[52rem]"
            // style={{backgroundImage: "url('/tomato/waves.svg')", backgroundSize: "100% auto"}}
          >
            <Container>
              <seciton className="flex py-12">
                <img src="/tomato/logo.svg"/>
              </seciton>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 text-4xl mb-4 leading-tight">
                    A Cloud ERP and CRM for Small to Mid-Sized Supermarkets In Korea
                  </h3>
                  <p className="font-medium text-gray-700 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repudiandae incidunt aut deleniti tempore consequuntur culpa quod, 
                    iure nesciunt suscipit ratione architecto odit. Ut ea corporis quo. 
                    Molestias ex blanditiis at.
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