import { Search } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const SearchCar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/search/${search}`);
    }
  };
  return (
    <div className="container w-[90%] mx-auto -mt-20 relative z-20 shadow-lg shadow-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/60 hover:scale-105 rounded-lg  bg-white">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className=" w-full flex flex-col md:flex-row">
          <div className="bg-red-500 md:p-5 text-center text-white">
            <h3 className="text-2xl font-bold">Search Your Best</h3>
            <p className="text-2xl font-bold">Cars Here.</p>
          </div>

          <div className=" w-full flex items-center justify-center ">
            <div className=" w-full p-4 flex md:px-8">
              <div className=" w-full flex">
                <form className=" w-full flex" onSubmit={handleSearch}>
                  <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Enter location"
                    className="w-full py-3 px-4 rounded-l-md border border-gray-300 focus:outline-none text-black placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-red-500 text-white text-center w-40 cursor-pointer rounded-r-md hover:bg-red-600 transition flex items-center justify-center"
                  >
                    <Search className="w-5 h-5" />
                    FIND CAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCar;
