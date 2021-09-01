import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'

const Hero = () => {
  return (
    <>
      <FullBleed>
        <div 
          className="bg-no-repeat overflow-hidden pt-48 pb-12 z-10"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4 flex flex-col justify-center order-2 md:order-1">
                <h2 className="font-bold text-gray-800 text-4xl mb-4 leading-tight">
                  A personal home server for complete personal data ownership.
                </h2>
                <p className="font-medium text-gray-500 text-xl">
                  <strong className="text-gray-800 mr-0.5">Bridge. </strong> 
                  A data escrow, Network Attached Storage (NAS), and a Wi-Fi router to 
                  transparently share sensitive information, securely store data and 
                  use the browse the web without privacy-invading elements.
                </p>
              </div>
              <div className="md:h-[28rem] lg:h-[32rem] grid place-items-center md:ml-4 relative order-1">
                <img 
                  src="/bridge/router-living-room.jpg"
                  className="
                    w-full shadow-md rounded-xl left-4 max-w-screen-lg object-cover
                    md:absolute md:h-[28rem]
                    lg:w-[64rem] lg:h-[32rem]
                  "
                />
              </div>
            </div>
          </Container>
        </div>
      </FullBleed>
    </>
  );
};

export default Hero;