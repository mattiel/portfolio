import Layout from "@/components/Layout";

const Parade = () => {
  return (
    <Layout>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-24 gap-8">
        <img src="/parade/poster.webp"/>
        <div className="place-self-center">
          <h2 className="font-bold text-4xl mb-4">Euphoria</h2>
          <p className="">
            Euphoria repaints an undiscovered/overlooked DTLA alley into multiple “stages” -- creating multiple festive
            and rave experiences through multiple stages along the pathway. This AR experience encourages attendees to
            embrace the abandoned areas through euphoric experience.

            The stages vary from chill and mellow electronic dance music (EDM) to hardcore techno music by converting
            scenes around them as they take a few steps through the pathway.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Parade;