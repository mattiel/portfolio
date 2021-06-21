import TOC from '@/components/TOC'
import Hero from '@/components/Tribe/Hero'
import Layout from '@/components/Layout'
import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'
import Image from 'next/image'

const Tomato = () => {
  return (
    <Layout>
      {/* <TOC /> */}
      <Hero />

      <FullBleed className="py-32 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Project Team</h3>
              <p className="text-gray-700">
                Nico Ramirez (Product Design)<br/>
                Nishit Gupta (Product Design)<br/>
                Ophelia Chiu (Graphic Design)<br/>
              </p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Roles</h3>
              <p className="text-gray-700">
                UI/UX Design<br/>
                Functional Prototyping<br/>
                Storyboarding<br/>
                User Flow<br/>
              </p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Date</h3>
              <p className="text-gray-700">April 13, 2020 - Present</p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Company</h3>
              <p className="text-gray-700">Sponsored Project <br/> ArtCenter x HP</p>
            </div>
          </div>
        </Container>
      </FullBleed>

      <FullBleed>
        <section 
          className="bg-gray-900 transform skew-y-6 overflow-hidden"
          // style={{backgroundImage: "url(/tomato/globe.png)"}}
        >
          <div className="transform -skew-y-6 h-[40rem] flex justify-center">
            <Container>
              <div className="flex flex-col-reverse md:flex-row gap-3 place-items-center overflow-hidden h-full">
                <div className="flex-1">

                </div>
                <div className="flex-1 mt-32 md:mt-0">
                  <h4 className="font-semibold text-green-500 mb-2 text-lg">Why</h4>
                  <h3 className="text-white text-4xl font-bold leading-snug mb-4">
                    Generation-Z is becoming more accustomed to interacting digitally
                  </h3>
                  <p className="text-gray-200">
                    We are targeting specific users who are losing physical connection with the environment and other people.
                    Tribe aims to represent a leap in neutralizing digital device interactions and breaking free from screens 
                    and mobile phone addiction.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </FullBleed>

      <section className="flex flex-col items-center py-32">
        <h2 className="font-bold text-2xl text-gray-800 mb-8">Opportunities</h2>
        <img src="/tribe/opportunity.png" className="mb-8 rounded-2xl"/>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
          <div className="block">
            <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">1st</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                <strong>First Movers Advantage:</strong> Introducing at first of it’s kind product will give HP a significant advantage over the rest of the market.
              </p>
            </div>
          </div>

          <div className="block">
            <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">25.9%</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                <strong>Market Size:</strong> Possible users who may use the products.
              </p>
            </div>
          </div>

          <div className="block">
            <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">$44B</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
              <strong>Purchasing Power:</strong> Today the Generation-Z's have an average spending money of $16.9/week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FullBleed className="my-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-green-500 mb-2 text-lg">Beacon</h4>
              <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                A pin for self expression
              </h3>
              <p className="text-gray-600">
                Beacon collects interactions to show daily recaps and highlights of the day. 
                Our proposed app presents a summary of the user’s interactions that can be reviewed at the end of the day, 
                silencing the stream of constant notifications throughout the day.
              </p>
            </div>
            <div className="grid grid-cols-2 place-items-center items-stretch overflow-hidden p-8">
              <img src="/tribe/beacon-1.webp" className="object-scale-down"/>
              <img src="/tribe/beacon-2.webp" className="object-scale-down"/>
            </div>
          </div>
        </Container>
      </FullBleed>

      <FullBleed className="my-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-green-500 mb-2 text-lg">Halo</h4>
              <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                A jewelry in disguise
              </h3>
              <p className="text-gray-600">
                Beacon collects interactions then connects to smart devices to show daily recaps and highlights of the day. 
                Our proposed app presents a summary of the user’s interactions that can be reviewed at the end of the day, 
                silencing the stream of constant notifications throughout the day.
              </p>
            </div>
            <div className="flex items-center p-8">
              <img src="/tribe/halo.png" className="object-scale-down"/>
            </div>
          </div>
        </Container>
      </FullBleed>


      <section class="my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
          <div className="flex-1">
            <h4 className="font-semibold text-green-500 mb-2 text-lg">Interactions</h4>
            <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
              Natural Contact Exchange
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Through natural human interactions such as handshakes and fist bumps, contacts can exchange information seamlessly. 
            </p>
          </div>
          <div class="flex">
            <img src="/tribe/handshake.png" className="flex-1 object-cover rounded-2xl"/>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 py-4">
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-green-500 pl-4 mb-2">Detection</p>
            <div className="pl-[1.125rem]">
              {/* <strong className="text-2xl text-green-600 font-bold mb-4 leading-loose">40+</strong> */}
              <p className="text-gray-700 mb-4">
                Halo detects handshake gesture
              </p>
            </div>
          </div>

          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-green-500 pl-4 mb-2">Notification</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Halo vibrates and displays an icon for confirmation.
              </p>
            </div>
          </div>

          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-green-500 pl-4 mb-2">Confirmation</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Beacon shows contact exchange icon to confirm both of their contacts have been exchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="grid grid-cols-1 gap-6">
          <div className="block">
            <h4 className="font-semibold text-green-500 mb-2 text-lg">Solutions</h4>
            <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
              Finding the sweetspot
            </h3>
            <p className="text-gray-700 text-lg">
              While users need improved product, they need familiar user interfaces and experience to avoid usability problems.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            <div className="block">
              <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Familiar interface</p>
              <div className="pl-[1.125rem]">
                {/* <strong className="text-2xl text-green-600 font-bold mb-4 leading-loose">40+</strong> */}
                <p className="text-gray-700 mb-4">
                  Due to high average age demographics, the interface needed to be familiar enough so that the users
                  are able to get a grasp of how to use the product without getting lost. Also, accessible interfaces
                  for individuals with vision problems also needed to be considered.
                </p>
              </div>
            </div>

            <div className="block">
              <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Desktop experience</p>
              <div className="pl-[1.125rem]">
                <p className="text-gray-700 mb-4">
                  Users have 
                </p>
              </div>
            </div>
          </div>
      </section>

      <section class="py-32">
        <div className="flex-1 mb-6">
          <h4 className="font-semibold text-green-400 mb-2 text-lg">Outreach</h4>
          <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
            Managing customers without a problem
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Saepe quo ab sequi illo aut vero eaque, assumenda laboriosam et iusto sunt, 
            necessitatibus maxime! Nemo, eius! Quod molestiae culpa eveniet natus!
          </p>
        </div>
        <img src="/tomato/slip.png"/>
      </section>
    </Layout>
  )
}

export default Tomato