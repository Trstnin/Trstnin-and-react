import React from 'react';

function Cards(props){
  console.log('props' , props);
    return(
    <>
    
     <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full h-full mb-2" src="https://images.pexels.com/photos/28958101/pexels-photo-28958101/free-photo-of-scenic-view-of-lake-powell-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-blue-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    </>)
}

export default Cards;