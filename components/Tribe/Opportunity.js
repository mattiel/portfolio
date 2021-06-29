const Opportunity = () => {
  return (
    <section className="flex flex-col items-center my-32">
      <h2 className="font-bold text-2xl text-gray-800 mb-8">Opportunities</h2>
      <img src="/tribe/opportunity.png" alt="A person wearing Tribe Beacon as a neckless" className="mb-8 max-h-[32rem] w-full object-cover"/>
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
  );
};

export default Opportunity;