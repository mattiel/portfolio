import TOC from '@/components/TOC'
import Hero from '@/components/Tomato/Hero'
import Layout from '@/components/Layout'
import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'
import Contact from '@/components/Contact'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

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
              <p className="text-gray-700">Systems Design</p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Roles</h3>
              <p className="text-gray-700">
                UI/UX Design<br/>
                Design Guidelines<br/>
                Front-End Development<br/>
              </p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Date</h3>
              <p className="text-gray-700">April 13, 2020 - Present</p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Company</h3>
              <p className="text-gray-700">Retail and Insight <br/> Seoul, South Korea</p>
            </div>
          </div>
        </Container>
      </FullBleed>

        {/* <FullBleed>
          <section 
            className="bg-gray-900 transform skew-y-6 overflow-hidden"
            // style={{backgroundImage: "url(/tomato/globe.png)"}}
          >
            <div className="transform -skew-y-6 h-[40rem] flex justify-center">
              <Container>
                <div className="flex flex-col-reverse md:flex-row gap-3 place-items-center overflow-hidden h-full">
                  <div className="flex-1">
                    <img 
                      src="/tomato/globe.png"
                      className="absolute left-0 md:-left-2/3 -bottom-1/2 transform rotate-45"
                    />
                  </div>
                  <div className="flex-1 mt-32 md:mt-0">
                    <h4 className="font-semibold text-green-400 mb-2 text-lg">Outreach</h4>
                    <h3 className="text-white text-4xl font-bold leading-snug mb-4">
                      Connecting all POS installation agencies
                    </h3>
                    <p className="text-gray-200">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Saepe quo ab sequi illo aut vero eaque, assumenda laboriosam et iusto sunt, 
                      necessitatibus maxime! Nemo, eius! Quod molestiae culpa eveniet natus!
                    </p>
                  </div>
                </div>
              </Container>
            </div>
          </section>
        </FullBleed> */}

      {/* <section className="flex flex-col items-center py-32">
        <h2 className="font-bold text-2xl text-gray-800 mb-4">Key Features</h2>
        <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
          <div className="flex flex-col items-start">
            <img className="w-8 h-8 mb-4" src="/tomato/glyphs/duo/customers.svg"></img>
            <span className="font-semibold mb-2">Customer Management</span>
            <p className="font-medium text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Blandit tellus vivamus convallis dolor, commodo at mi. 
              Amet felis eget tellus id et bibendum dignissim malesuada. 
              Nunc massa pretium ultrices feugiat scelerisque ac interdum.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img className="w-8 h-8 mb-4" src="/tomato/glyphs/duo/inventory.svg"></img>
            <span className="font-semibold mb-2">Product & Inventory </span>
            <p className="font-medium text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Blandit tellus vivamus convallis dolor, commodo at mi. 
              Amet felis eget tellus id et bibendum dignissim malesuada. 
              Nunc massa pretium ultrices feugiat scelerisque ac interdum.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img className="w-8 h-8 mb-4" src="/tomato/glyphs/duo/market.svg"></img>
            <span className="font-semibold mb-2">Store Management</span>
            <p className="font-medium text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Blandit tellus vivamus convallis dolor, commodo at mi. 
              Amet felis eget tellus id et bibendum dignissim malesuada. 
              Nunc massa pretium ultrices feugiat scelerisque ac interdum.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img className="w-8 h-8 mb-4" src="/tomato/glyphs/duo/calculator.svg"></img>
            <span className="font-semibold mb-2">Sales</span>
            <p className="font-medium text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Blandit tellus vivamus convallis dolor, commodo at mi. 
              Amet felis eget tellus id et bibendum dignissim malesuada. 
              Nunc massa pretium ultrices feugiat scelerisque ac interdum.
            </p>
          </div>
        </div>
      </section> */}

      {/* <FullBleed>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-32 relative h-screen max-h-[50rem]">
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-green-500 mb-2 text-lg">Customer Management</h4>
              <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                Managing customers without a problem
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Saepe quo ab sequi illo aut vero eaque, assumenda laboriosam et iusto sunt, 
                necessitatibus maxime! Nemo, eius! Quod molestiae culpa eveniet natus!
              </p>
            </div>
            <div className="h-auto md:h-[30rem] md:ml-4">
              <img src="/tomato/membership.png"  className="absolute shadow-md"/>
              <img src="/tomato/membership-modal.png"  className="absolute shadow-2xl w-3/4 md:-right-1/2 md:top-1/3 bottom-0 right-0"/>
            </div>
          </div>
        </Container>
      </FullBleed> */}


      <section class="my-32">
        <h4 className="font-semibold text-green-500 mb-2 text-lg">Problem</h4>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
          Migrating users from existing products
        </h3>
        <p className="text-gray-700 text-lg">
          One of the biggest challenges I have faced working on this project was designing the experience for our target users.
          It was important for us to come up with solutions in order for store managers and workers to be able to use the product without
          much training. Most of the users are afraid to leave their comfort zone and learn how to use new software.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="block">
            <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Age demographics</p>
            <div className="pl-[1.125rem]">
              {/* <strong className="text-2xl text-green-600 font-bold mb-4 leading-loose">40+</strong> */}
              <p className="text-gray-700 mb-4">
                Target users are mostly ages ranging from 40-60 who are not tech savvy.
              </p>
            </div>
          </div>

          <div className="block">
            <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Desire for desktop experience</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                While there are advantages to bring CRM and ERP experience to the web browsers, the experience differs from native desktop applications.
              </p>
            </div>
          </div>

          <div className="block">
            <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Acclimation to cluttered UI</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Users were used to seeing cluttered interfaces. While user experience isn't great, they were able to get the tasks done because
                the needed buttons were all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="grid grid-cols-1 gap-6">
          <div className="block">
            <h4 className="font-semibold text-green-500 mb-2 text-lg">Solution</h4>
            <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
              Finding the sweetspot
            </h3>
            <figure class="mb-2">
              <Zoom>
                <img src="/tomato/transition.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
            </figure>
            <figcaption class="text-gray-500 italic text-sm mb-4 w-full text-center">
              Comparison of existing ERP's Purchase slip registration
            </figcaption>
            <p className="text-gray-700 text-lg">
              While users need improved product, they need familiar user interfaces and experience to avoid usability problems.
              Analyzing competitor's products and identifying their weak points, we came up with a solution that is easy to use and
              provides a good user experience.
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
            <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Hiearchy Refinement</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Our users have given us constant feed back and we've analyzed their flows using important tasks such as registering purchase orders into the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="grid grid-cols-1 gap-6">
          <div className="block">
            <h4 className="font-semibold text-green-500 mb-2 text-lg">Developer Hand-off</h4>
            <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
              Creating guidelines
            </h3>
            <figure class="mb-2">
              <Zoom>
                <img src="/tomato/style-guide.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
            </figure>
             <figcaption class="text-gray-500 italic text-sm mb-4 w-full text-center">
              Experience and UI guideline for developers
            </figcaption>

            <figure class="mb-2">
              <Zoom>
                <img src="/tomato/implementation-guide.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
            </figure>
            <figcaption class="text-gray-500 italic text-sm mb-4 w-full text-center">
              Implementation and HTML/CSS structure guideline for developers
            </figcaption>
          </div>
          <p className="text-gray-700 text-lg">
            In South Korea, web developers are used to having another position called "publishers" who create HTML and CSS for them. 
            Basically, <strong>many web developers in Korea are used to manipulation of HTML and a few CSS classes, </strong> 
            but don't actually understand the mechanics of CSS.
          </p>
          <p className="text-gray-700 text-lg">
            As a UX engineer, I was responsible for implementing HTML and CSS layouts and interactions with Javascript and JQuery.
            When I created generic layouts for the developers to copy and paste, the developers struggled on implementing designs that deviated from the original layout.
            In order to improve my communication with the other developers and to provide guidelines, I was able to get an approval from the director
            to create the UI and implementation guidelines.
          </p>
        </div>
      </section>

      <section className="my-32">
        <div className="grid grid-cols-1 gap-6">
          <div className="block">
            <h4 className="font-semibold text-green-500 mb-2 text-lg">Icons</h4>
            <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
              Symbols for guidance
            </h3>
            <figure class="mb-2">
              <Zoom>
                <img src="/tomato/icons.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
            </figure>
             <figcaption class="text-gray-500 italic text-sm mb-4 w-full text-center">
              Icons I've created for the project.
            </figcaption>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          <div className="block">
            <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">High contrast icons</p>
            <div className="pl-[1.125rem]">
              {/* <strong className="text-2xl text-green-600 font-bold mb-4 leading-loose">40+</strong> */}
              <p className="text-gray-700 mb-4">
                High contrast and distinguishable primary menu icons were used to provide a visual hierarchy for the menu. With previous generations,
                users were not able to distinguish the menu items because of how icons were styled same way across the websites.
              </p>
            </div>
          </div>

          <div className="block">
            <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Important for CTAs</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Icons were created for call to actions to help users identify which elements are there for actions.
                These icons were primarily used in conjunction with buttons because important CTAs are usually buttons and our users
                needed clear affordances for such actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </Layout>
  )
}

export default Tomato