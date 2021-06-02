import TOC from '@/components/TOC'
import Hero from '@/components/Tomato/Hero'
import Layout from '@/components/Layout'

const Tomato = () => {
  return (
    <Layout>
      <div className="container lg:max-w-screen-lg mx-auto mt-12">
        {/* <TOC /> */}
        <Hero />
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
      </div>
    </Layout>
    
  )
}

export default Tomato