const DestinationCard = ({ destination }) => {
    return (
      <div className="w-80 space-y-2 bg-slate-500 p-4 rounded-md shadow-md text-white">
        
          <img src={destination.image} alt={destination.name} className="w-[25px] h-[20px] object-cover rounded" style={{ width: '200px', height: '200px' }}/>
        
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p>{destination.description}</p>
        <div className="flex justify-between text-sm text-gray-300">
          <span>{destination.location}</span>
          <span>{destination.price}</span>
        </div>
      </div>
    );
  };
  
  export default DestinationCard;
  