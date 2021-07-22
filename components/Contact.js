const Contact = () => {
  return (
    <div className="py-24">
      <div className="border border-gray-200 bg-gray-50 rounded-xl p-8 md:p-12  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-start">
        <div className="grid gap-2">
          <h3 class="text-4xl font-bold text-gray-900">
            Let's talk
          </h3>
          <p class="text-gray-700 text-lg">
            I'm happy to discuss more about this project or future opportunities. Feel free to reach out to me.
          </p>
        </div>
        <a 
          class="inline-flex items-center text-gray-700 text-xl border-b-4 border-gray-700 
                hover:text-purple-600 hover:border-purple-600 transition-all md:place-self-end" 
          href="mailto: hello@mattiel.dev">
          hello@mattiel.dev
          <svg 
            className="w-5 h-5 ml-1" 
            fill="none" stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <path strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;