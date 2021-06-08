import Link from 'next/link'

const Projects = ({ manifest }) => {
  return (
    <section className="py-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">
        {
          Object.entries(manifest).map(([key, value], idx) => {
            return (
              <article
                  className={`${idx === 0 && 'col-span-full h-96'} cursor-pointer rounded-3xl lg:h-[30rem] h-80 overflow-hidden flex col`}
                  style={{
                    backgroundColor: `${value.color}`
                  }}
                  key={idx}
                > 
                <Link href={`/projects/${value.title.toLowerCase()}`} >
                  <div 
                    className="bg-gray-100 bg-opacity-95 w-full h-full px-6 py-8 bg-no-repeat"
                    style={{
                      backgroundImage: `url('${value.thumbnail}')`,
                      backgroundSize: `${idx === 0 ? '80%' : '100%'}`,
                      backgroundPosition: `${idx === 0 ? 'bottom -15vw center' : 'bottom'}`,
                    }}
                  >
                    <div className={`flex flex-col space-y-2 xl:max-w-[50%] self-end ${idx === 0 && 'self-start'}`}>
                      <h3 className="font-bold lg:text-xl">{value.title}</h3>
                      <h4 className="text-md font-semibold">{value.subtitle}</h4>
                      {idx === 0 && 
                        <p className="lg:text-xl font-medium">{value.description}</p>
                      }
                    </div>
                  </div>
                </Link>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects;