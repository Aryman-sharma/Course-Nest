import React from "react";

function Filter({ filterData , category , setCategory }) {
    function filterHandler(title)
    {
      setCategory(title);
    }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
      {filterData.map((data) => {
        return (
          <button onClick={()=>filterHandler(data.title)}
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
             
            `}
            key={data.id}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
export default Filter;
