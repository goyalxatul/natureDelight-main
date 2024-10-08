import React from 'react';
import { MdArrowForward } from 'react-icons/md'; // Import the arrow icon

const Gallery = () => {
  const googleFormURL1 = 'https://photos.google.com/';
  
  const links = [
    { name: 'f*f', url: googleFormURL1 },
   
  ];

  return (
    <div className="p-8">
      <h1 className="text-6xl text-center mb-8">Gallery</h1>
      <div className="flex justify-start">
        <ul className="list-disc list-inside"> 
          {links.map((link, index) => (
            <li key={index} className="text-lg my-4 flex items-center">
              <span className="mr-2 text-black font-bold">{index + 1}.</span>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-bold hover:text-green-600 transition-colors duration-300 no-underline flex items-center"
              >
                {link.name}
                <MdArrowForward className="ml-2 text-black" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;



