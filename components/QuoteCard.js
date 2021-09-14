const QuoteCard = ({ quote, emph, avatar, name, occupation }) => {
  return (
    <div className="inline-block max-w-full w-[30rem] p-8 bg-white shadow-md rounded-xl">
      <blockquote className="block text-gray-500 text-2xl mb-6">
        <span className="whitespace-normal">
          {quote}
          <strong className="font-semibold text-gray-700"> {emph}</strong>
        </span>
      </blockquote>
      <div className="flex items-center w-full mt-4">
        <img 
          className="rounded-full w-12 h-12 self-start flex-shrink-0 object-center"
          src={`${avatar}`}
        />
        <div className="inline-block flex-grow ml-2">
          <h3 className="text-gray-900 font-semibold text-lg leading-tight">{name}</h3>
          <p className="text-gray-600 font-medium">{occupation}</p>
        </div>
      </div>
    </div>
  )
}

export default QuoteCard