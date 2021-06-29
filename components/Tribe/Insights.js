const Insights = () => {
  return (
    <section className="my-32">
      <div className="grid grid-cols-1 gap-6">
        <div className="block">
          <h4 className="font-semibold text-green-500 mb-2 text-lg">Insights</h4>
          <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
            Inspired by community and safety
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            We synthesized insights from our primary and secondary research. 
            Applying what we learned about how communities form, how people create tribes,
            and how digital natives are here to disrupt that process. 
          </p>
          <img src="/tribe/insights.png" className="mb-8 max-h-[32rem] w-full object-cover"/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="block">
          <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Tribes</p>
          <div className="pl-[1.125rem]">
            {/* <strong className="text-2xl text-green-600 font-bold mb-4 leading-loose">40+</strong> */}
            <p className="text-gray-700 mb-4">
              <ul>
                <li>Strength in numbers</li>
                <li>Social Survival</li>
                <li>Belonging</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="block">
          <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Acive Youth</p>
          <div className="pl-[1.125rem]">
            {/* <strong className="text-2xl text-green-600 font-bold mb-4 leading-loose">40+</strong> */}
            <p className="text-gray-700 mb-4">
              Gen-Z is very active and voices their values strongly
            </p>
          </div>
        </div>

        <div className="block">
          <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Digital culture</p>
          <div className="pl-[1.125rem]">
            <p className="text-gray-700 mb-4">
              Tribes are a social manifestation of our survival instinct. 
            </p>
          </div>
        </div>

        <div className="block">
          <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Voice</p>
          <div className="pl-[1.125rem]">
            <p className="text-gray-700 mb-4">
              Seeking to create their identity through digital content. And a strong stand on social issues. 
            </p>
          </div>
        </div>

        <div className="block">
          <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Screen average</p>
          <div className="pl-[1.125rem]">
            <p className="text-gray-700 mb-4">
              Pivotals are used to interacting with an average of 5 screens. 
            </p>
          </div>
        </div>

        <div className="block">
          <p className="font-semibold text-xl text-gray-800 border-l-2 border-green-500 pl-4 mb-4">Images over text</p>
          <div className="pl-[1.125rem]">
            <p className="text-gray-700 mb-4">
            Pivotals communicate with images over text, emojis, snapchat, etc. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;