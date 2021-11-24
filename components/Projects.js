import Link from 'next/link'
import WorkInProgress from '@/components/WorkInProgress'

const Projects = ({ manifest }) => {
  return (
    <section className="py-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {
          Object.entries(manifest).map(([key, value], idx) => {
            if(value.hidden === false) {
              return (
                <Link href={`/projects/${value.title.toLowerCase()}`} key={idx}>
                  <div 
                    className="cursor-pointer overflow-hidden flex justify-between flex-col border border-gray-100 rounded-3xl border-gray-100 bg-white transform hover:scale-105 hover:shadow-2xl duration-300 transition transition-all"
                  >
                    <figcaption className="flex flex-col space-y-1 p-12">
                      <h3 className="font-semibold text-gray-700">{value.title}</h3>
                      {/* <h4 className="text-md font-semibold">{value.subtitle}</h4> */}
                      {/* {idx === 0 &&
                        <p className="lg:text-xl font-medium">{value.description}</p>
                      } */}
                      <p className="lg:text-xl font-medium text-gray-900">{value.description}</p>
                    </figcaption>
                    <figure 
                      className="w-full overflow-hidden relative"
                      style={{ backgroundColor: `${value.color}` }}
                    > 
                      <div 
                        className={`
                        bg-gray-100 bg-opacity-95 w-full px-6 py-8 bg-no-repeat bg-full-cover
                          lg:h-[26rem] h-96 items-start bg-cover bg-center overflow-hidden
                        `}
                        style={{
                          backgroundImage: `url('${value.thumbnail}')`
                        }}
                      >
                      </div>
                      {value.isWIP && (
                        <WorkInProgress isAbsolute/>
                      )}
                    </figure>
                  </div>
                </Link>
              )
            }
          })
        }
      </div>
    </section>
  )
}

export default Projects;