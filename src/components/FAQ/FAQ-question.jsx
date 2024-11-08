import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 p-4 last:border-b-0 ">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={toggleOpen}
      >
        <span style={{ fontFamily: "Comfortaa" }} 
        className={`font-semibold text-lg ${isOpen ? 'text-primaryYellow' : 'text-white'}`}>
          {question}
        </span>
        <span style={{ fontFamily: "Comfortaa" }} 
        className={`font-bold text-2xl ${isOpen ? 'text-primaryYellow' : 'text-black'}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}
      >
        <p className="text-white text-left  ">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;