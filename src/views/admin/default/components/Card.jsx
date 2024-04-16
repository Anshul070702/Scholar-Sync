import React from 'react';

const Card = (props) => {
  const { aim, imgURL, text } = props;

  return (
    <div className='flex m-4 align-center justify-between bg-white rounded-lg shadow-md p-4'>
      <div className="w-32 h-32 flex-shrink-0">
        <h3 className="text-xl font-bold">{aim}</h3>
        <img src={imgURL} alt={aim} className="w-full h-full object-cover" />
      </div>
      <div className="ml-4">
        
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

export default Card;
