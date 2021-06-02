const Hero = () => {
  return (
    <div className="flex flex-col mt-24 py-32">
      <h1 
        className="lg:text-[3rem] text-[2rem] sm:leading-tight font-bold text-transparent bg-clip-text tracking-tight max-w-[43rem] mb-4"
        style={{backgroundImage: "linear-gradient(35.74deg, #FF6600 -45%, #00CFFF -15%, #0071FF 25%, #FF0091 65%, #F1FF00 100%)"}}
      >
        A Designer, Developer, and Creative Technology Enthusiast
      </h1>
      <p className="lg:text-2xl text-xl text-gray-700">
        <strong>mattie</strong> is a multi-disciplinary user experience designer. <br/>
        Currently located in Los Angeles, CA and is <span className="underline font-semibold text-blue-600">open for opportunities.</span>
      </p>
    </div>
  );
};

export default Hero;