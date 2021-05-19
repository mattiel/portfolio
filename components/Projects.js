import PropTypes from 'prop-types'

const Projects = (props) => {
  return (
    <section className="py-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">
        {
          Object.entries(props.manifest).map(([key, value], idx) => {
            return (
              <article 
                key={idx}
                className={`${idx === 0 && 'col-span-full h-96'} cursor-pointer rounded-3xl lg:h-[30rem] h-80 overflow-hidden flex col`}
                style={{
                  backgroundColor: `${value.color}`
                }}
              > 
              <div 
                className="bg-gray-100 bg-opacity-95 w-full h-full px-6 py-8 bg-no-repeat"
                style={{
                  backgroundImage: `url('${value.thumbnail}')`,
                  backgroundSize: `${idx === 0 ? '80%' : '100%'}`,
                  backgroundPosition: `${idx === 0 && 'bottom -15vw'} center`,
                }}
              >
                  <div className={`flex flex-col space-y-2 xl:max-w-[50%] self-end ${idx === 0 && 'self-start'}`}>
                    <h3 className="font-bold lg:text-xl text-sm">{value.title}</h3>
                    <h4 className="text-md font-semibold">{value.subtitle}</h4>
                    {idx === 0 && 
                      <p className="lg:text-xl font-medium">{value.description}</p>
                    }
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

Projects.PropTypes = {
  manifest: JSON
}

export default Projects;