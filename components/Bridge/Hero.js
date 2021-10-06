import FullBleed from "@/components/FullBleed";
import Container from "@/components/Container";

const Hero = () => {
  return (
    <section className="pt-36 pb-12">
      <div className="grid grid-cols-1 gap-8 place-items-center mb-8">
        <div className="flex flex-col justify-center text-center max-w-prose">
          <h2 className="font-bold text-gray-800 text-5xl mb-4 leading-tight">
            A personal home server for transparent data ownership
          </h2>
          <p className="font-medium text-gray-500 text-xl">
            <strong className="text-gray-800 mr-0.5">Bridge. </strong>A data
            escrow, Network Attached Storage (NAS), and a Wi-Fi router to
            transparently share sensitive information, securely store data and
            use the browse the web without privacy-invading elements.
          </p>
        </div>
      </div>
      <img
        src="/bridge/router-living-room.jpg"
        className="
        object-cover rounded-xl mx-auto
      "
      />
    </section>
  );
};

export default Hero;
