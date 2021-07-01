import Hero from '@/components/Stay/Hero'
import Layout from '@/components/Layout'
import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'

const stay = () => {
  return (
    <Layout>
      <Hero/>
      <FullBleed className="py-32 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Project Team</h3>
              <p className="text-gray-700">
                Company research
              </p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Roles</h3>
              <p className="text-gray-700">
                UI/UX Design<br/>
                User Testing<br/>
              </p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Date</h3>
              <p className="text-gray-700">Feb 2018 - May 2018</p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Project</h3>
              <p className="text-gray-700">
                In the Core Business Platform
              </p>
            </div>
          </div>
        </Container>
      </FullBleed>

      <FullBleed className="py-32 bg-gray-900">
        <Container>
          <h4 className="font-semibold text-blue-600 mb-2 text-lg">Why</h4>
          <h3 className="text-white text-4xl font-bold leading-snug mb-4">
            How can we bring better convenience to hotel guests?
          </h3>
          <p className="text-gray-300 mb-9 text-lg">
            To help guests communicate their needs and to provide them better commodity and covenience, a part of concierge and
            room controls are integrated into one web application available for each rooms.
          </p>
        </Container>
      </FullBleed>

      <section className="flex flex-col my-32">
        <h4 className="font-semibold text-blue-600 mb-2 text-lg">Goals</h4>
        <h2 className="text-gray-900 font-bold text-3xl md:text-4xl md:leading-normal mb-6">
          Guests want to rest comfortably. Less workload is comfort, more workload is bad service.
        </h2>
        <p className="text-gray-700 mb-9 text-lg">
          Our company identified that customers have one ultimate goal when staying at a hotel — 
          rest before they continue their next journey. Old fashioned way of controlling lights, 
          air conditioners, curtains and TV's mostly require getting the feet on the floor. 
          There isn't an all-in-one remote controllers for all the appliances in the room.‍
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-600 pl-4 mb-2">Hessle free</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
              Logging into services, downloading another apps for temporary service is too much hassle.
              </p>
            </div>
          </div>
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-600 pl-4 mb-2">Think less</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Provide presets for users that allows users spend less time making decisions with numbers options.
              </p>
            </div>
          </div>
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-600 pl-4 mb-2">Today’s tech</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Remote controllers are retro — it's not the 50's anymore. It's the era of bringing comfort with smart technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col my-32">
        <h2 className="font-bold text-2xl text-gray-800 mb-8">Preset-Driven Experience</h2>
       
        <div className="grid grid-cols-2 gap-4">
          <img src="/stay/preset.jpg" alt="presets" className="mb-2 max-h-[32rem] w-full object-cover col-span-2"/>
          <img src="/stay/preset-2.jpg" alt="presets" className="mb-2 max-h-[27rem] w-full object-cover"/>
          <img src="/stay/preset-3.jpg" alt="presets" className="mb-2 max-h-[27rem] w-full object-cover"/>
        </div>
        <figcaption class="text-gray-500 italic text-sm mb-4 w-full text-center">Presets available in every controls</figcaption>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-600 pl-4 mb-2">Varying age demographics</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
               Stay had to be usable for non-tech savvy novice to experts who've already used smart IoT products.
              </p>
            </div>
          </div>
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-600 pl-4 mb-2">Less work</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Presets mostly do the magic for the average users — allowing users to care less about the room and rest.
              </p>
            </div>
          </div>
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-600 pl-4 mb-2">For power users</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Stay gives users flexibility of controlling each components of the room one-by-one if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col my-32">
        <h2 className="font-bold text-2xl text-gray-800 mb-8">Services for convenience</h2>
        <img src="/stay/services.jpg" alt="presets" className="mb-2 max-h-[32rem] w-full object-cover"/>
        <figcaption class="text-gray-500 italic text-sm mb-4 w-full text-center">Hotel guests are able to chat or order from a tab</figcaption>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-600 pl-4 mb-2">Simple needs handled</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Ordering, concierge and requesting information can be done with the chat bot 
              </p>
            </div>
          </div>
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-600 pl-4 mb-2">Amenity and Mini-bar</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Ordering amenities and snacks can be done with a few steps.
              </p>
            </div>
          </div>
         
        </div>
      </section>

    </Layout>
  );
};

export default stay;