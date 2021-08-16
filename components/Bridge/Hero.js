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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4 flex flex-col justify-center">
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
                <div className="h-auto md:h-[30rem] grid place-items-center md:ml-4 relative">
                  <img src="/bridge/router-living-room.jpg" className="absolute left-4 shadow-md rounded-xl w-screen-lg max-w-screen-lg max-h-[512px]"/>
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