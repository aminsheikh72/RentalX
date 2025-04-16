import { Calendar, Car, CarFront, Fuel, Gauge } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../features/car/carSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";

const Cars = () => {
  const { isLoading, isError, message, cars, currentPage, totalPages } =
    useSelector((state) => state.car);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for current page
  const [page, setPage] = useState(currentPage);
  const size = 6; // Display 6 cars per page

  useEffect(() => {
    dispatch(getCars({ page, limit: size }));
  }, [dispatch, page]);

  useEffect(() => {
    if (isError && message) {
      toast.error(message, {
        position: "top-center",
      });
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-3 py-20">
      <h1 className="text-4xl text-blue-700 text-center mb-15 font-bold uppercase">
        All Cars
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars?.map((car) => {
          return (
            <div
              key={car._id}
              className="bg-white border border-gray-400 p-8 min-h-70 relative group shadow-lg shadow-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-600/60 hover:scale-105 rounded-lg"
            >
              <div className="w-fullh-48">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:p-6 py-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 uppercase">
                    {car.name}
                  </h3>
                  <div className="text-red-500 font-bold">
                    ${car.rate}
                    <span className="text-sm text-gray-500 uppercase">
                      /Day
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] md:text-[12px] text-gray-500 mb-6">
                  <div className="flex items-center">
                    <CarFront className="w-4 h-4 mr-1" />
                    <span className="uppercase">category : {car.category}</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-1" />
                    <span className="uppercase">company : {car.company}</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="w-4 h-4 mr-1" />
                    <span className="uppercase">{car.fuelType}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => (!user ? navigate("/login") : "")}
                    className="bg-red-500 text-white py-2 text-center rounded hover:bg-red-600 transition"
                  >
                    <Link to={`/car/${car._id}`}>BOOK</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-3 p-4">
        {/* Prev Button */}
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {/* Current Page Indicator */}
        <span className="text-sm font-medium text-black">
          Page {page} of {totalPages}
        </span>

        {/* Next Button */}
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cars;
