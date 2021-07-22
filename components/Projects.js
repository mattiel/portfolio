import Link from 'next/link'

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
                    className="cursor-pointer overflow-hidden flex flex-col"
                  >
                    <figure 
                      className="w-full mb-4 overflow-hidden"
                      style={{ backgroundColor: `${value.color}` }}
                    > 
                      <div 
                        className={`
                        bg-gray-100 bg-opacity-95 w-full px-6 py-8 bg-no-repeat transition duration-300 hover:scale-105 bg-full-cover
                          lg:h-[30rem] h-96 items-start bg-cover bg-center
                        `}
                        style={{
                          backgroundImage: `url('${value.thumbnail}')`
                        }}
                      >
                      </div>
                    </figure>
                    <figcaption className="flex flex-col space-y-1 mb-6">
                      <h3 className="font-semibold text-gray-700">{value.title}</h3>
                      {/* <h4 className="text-md font-semibold">{value.subtitle}</h4> */}
                      {/* {idx === 0 && 
                        <p className="lg:text-xl font-medium">{value.description}</p>
                      } */}
                      <p className="lg:text-xl font-medium text-gray-900">{value.description}</p>
                    </figcaption>
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