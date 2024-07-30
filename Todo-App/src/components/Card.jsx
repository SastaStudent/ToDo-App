import React from "react";

function Card({  title, description, Dell, index ,status,isExpanded,timestamps,toogle,toogleStatus}) {
  
  const stat = status ? "Completed" : "Pending";
   

  return (
    <div className="bg-slate-600 h-24 `${css}` mb-2 w-auto flex-wrap rounded-xl flex justify-between overflow-auto">
      <div onClick={toogle}  className="h-full w-[60%] p-2 flex justify-center items-center flex-col cursor-pointer">
        <div className="flex gap-1"><p className="text-red-400 font-bold">Task : </p> <p>{title}</p></div>
        <div className="flex gap-1"><p className="text-red-400 font-bold">Description : </p> <p>{description}</p></div>
       <div> {isExpanded && (
        <div className="overflow-hidden">
          <div className="flex gap-1"><p className="text-red-400 font-bold">Time : </p> <p>{timestamps}</p></div>
        </div>
      )}</div>
      </div>
      <div className="p-2 h-full w-[20%] flex justify-center items-center flex-col cursor-pointer">
        <p onClick={toogleStatus} className="text-red-400 font-bold">Status</p>
        <p>{stat}</p>
      </div>
      <button 
        className="w-[10%] h-full rounded-xl bg-red-400 hover:bg-red-600"
        onClick={(e) => {
            e.stopPropagation();
            Dell(index)}}
      >
        delete
      </button>
    </div>
  );
}

export default Card;
