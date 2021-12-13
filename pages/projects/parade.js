import Layout from "@/components/Layout";

const Parade = () => {
  return (
    <Layout>
      <div className="mt-24">
        <video className="w-full" width="768" height="1440" autoPlay controls>
          <source src="/parade/promo.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-12 gap-12">
        <div className="place-self-end">
          <h2 className="font-bold text-4xl mb-4">Club Euphoria</h2>
          <p className="mb-8">
            Euphoria repaints an undiscovered/overlooked DTLA alley into multiple “stages” -- creating multiple festive
            and rave experiences through multiple stages along the pathway. This AR experience encourages attendees to
            embrace the abandoned areas through euphoric experience. The stages vary from chill and mellow electronic
            dance music (EDM) to hardcore techno music by overlaying and placing effects and sounds on the scenes as
            they take a few steps through the linear pathway.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="w-full">
            <h3 className="font-bold text-xl mb-2">Location</h3>
            <p className="mb-4">
              2042 Sacramento St
            </p>
          </div>
          <div className="w-full">
            <h3 className="font-bold text-xl mb-2">When</h3>
            <p className="mb-4">
              Dec 13. 2021 - April 2021
            </p>
          </div>
        </div>
      </div>

    <div className="py-32">
      <h2 className="font-bold text-4xl mb-4">Prototypes</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-24">
        <div>
          <h3 className="font-bold text-xl mb-2">Entrance</h3>
          <video className="rounded-3xl mb-8" width="768" height="1440" autoPlay loop>
            <source src="/parade/stage1.mp4" type="video/mp4"/>
          </video>
          <h3 className="font-bold text-xl mb-2">Scan to try on Snapchat</h3>
          <img src="/parade/code1.svg" className="max-w-[12rem]"/>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Mid-way</h3>
          <video className="rounded-3xl mb-8" width="768" height="1440" autoPlay loop>
            <source src="/parade/stage2.mp4" type="video/mp4"/>
          </video>
          <h3 className="font-bold text-xl mb-2">Scan to try on Snapchat</h3>
          <img src="/parade/code2.svg" className="max-w-[12rem]"/>

        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">End</h3>
          <video className="rounded-3xl mb-8" width="768" height="1440" autoPlay loop>
            <source src="/parade/stage3.mp4" type="video/mp4"/>
          </video>
          <h3 className="font-bold text-xl mb-2">Scan to try on Snapchat</h3>
          <img src="/parade/code3.svg" className="max-w-[12rem]"/>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Parade;