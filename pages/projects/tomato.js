import TOC from '@/components/TOC'
import Hero from '@/components/Tomato/Hero'
import Layout from '@/components/Layout'
import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'

const Tomato = () => {
  return (
    <Layout>
      {/* <TOC /> */}
      <Hero />
      <FullBleed>
        <section className="bg-gray-100">
        </section>
      </FullBleed>

      <FullBleed>
        <section 
          className="bg-gray-900 transform skew-y-12 overflow-hidden"
          // style={{backgroundImage: "url(/tomato/globe.png)"}}
        >
          <div className="transform -skew-y-12">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-40 my-20 place-items-center overflow-hidden">
                <div className="">
                  <img 
                    src="/tomato/globe.png"
                    className="absolute left-0 sm:-left-1/2 -bottom-1/2 lg:-bottom-full transform rotate-45"
                  />
                </div>
                <div className="">
                  <h3 className="text-white text-3xl font-bold leading-normal mb-2">
                    Connecting All POS Installation Agencies in South Korea
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
      </FullBleed>

      <section className="flex flex-col items-center py-20">
        <h2 className="font-bold text-2xl text-gray-800 mb-4">Key Features</h2>
        <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
          <div className="flex flex-col items-start">
            <img className="mb-2" src="/tomato/glyphs/duo/customers.svg"></img>
            <span className="font-semibold mb-2">Customer Relations & Management</span>
            <p className="font-medium text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Blandit tellus vivamus convallis dolor, commodo at mi. 
              Amet felis eget tellus id et bibendum dignissim malesuada. 
              Nunc massa pretium ultrices feugiat scelerisque ac interdum.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img className="mb-2" src="/tomato/glyphs/duo/inventory.svg"></img>
            <span className="font-semibold mb-2">Product & Inventory </span>
            <p className="font-medium text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Blandit tellus vivamus convallis dolor, commodo at mi. 
              Amet felis eget tellus id et bibendum dignissim malesuada. 
              Nunc massa pretium ultrices feugiat scelerisque ac interdum.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img className="mb-2" src="/tomato/glyphs/duo/market.svg"></img>
            <span className="font-semibold mb-2">Store Management</span>
            <p className="font-medium text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Blandit tellus vivamus convallis dolor, commodo at mi. 
              Amet felis eget tellus id et bibendum dignissim malesuada. 
              Nunc massa pretium ultrices feugiat scelerisque ac interdum.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img className="mb-2" src="/tomato/glyphs/duo/calculator.svg"></img>
            <span className="font-semibold mb-2">Sales</span>
            <p className="font-medium text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Blandit tellus vivamus convallis dolor, commodo at mi. 
              Amet felis eget tellus id et bibendum dignissim malesuada. 
              Nunc massa pretium ultrices feugiat scelerisque ac interdum.
            </p>
          </div>
        </div>
      </section>
      
      
      
      <div className="grid gap-3 pt-4">
        <section className="h-[80vh] rounded-2xl p-6 bg-blue-50">
          <h2 id="intro">INTRODUCTION</h2>
        </section>
        <section className="h-[80vh] rounded-2xl p-6 bg-blue-50">
          <h2 id="problem">PROBLEM</h2>
        </section>
        <section className="h-[80vh] rounded-2xl p-6 bg-blue-50">
          <h2 id="process">PROCESS</h2>
        </section>
        <section className="h-[80vh] rounded-2xl p-6 bg-blue-50">
          <h2 id="solutions">SOLUTIONS</h2>
        </section>
        <section className="h-[80vh] rounded-2xl p-6 bg-blue-50">
          <h2 id="final-outcome">FINAL OUTCOME</h2>
        </section>
      </div>
    </Layout>
    
  )
}

export default Tomato