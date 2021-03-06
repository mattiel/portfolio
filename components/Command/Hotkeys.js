const Hotkeys = ({ keys, isFocused }) => {
  return (
    <div className="flex space-x-1">
      {
        keys.map((key, idx) => {
          return (
            <kbd 
              key={idx}
              className={
                `w-4 h-4 flex justify-center items-center text-[0.6875rem] rounded-[.25rem] text-gray-400 bg-gray-100 
                ${isFocused && 'text-gray-600 bg-gray-200'}`
              }
            >
              {key}
            </kbd>
          )
        })
      }
    </div>
  );
};

export default Hotkeys;