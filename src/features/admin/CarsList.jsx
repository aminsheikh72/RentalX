import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCar, getCars, removeCar } from "../../features/car/carSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { Plus } from "lucide-react";

function CarsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cars, isLoading, isError, message, currentPage, totalPages } =
    useSelector((state) => state.car);

  const [page, setPage] = useState(currentPage);
  const [size, setSize] = useState(10);

  useEffect(() => {
    dispatch(getCars({ page, limit: size }));
  }, [dispatch, page, size]);

  const handleDelete = (id) => {
    dispatch(removeCar(id)).then(() => {
      dispatch(getCars({ page, limit: size }));
    });
  };

  const handleEdit = (car) => {
    dispatch(editCar(car));
    navigate("/admin/form");
  };

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
    <div className="p-4 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Manage Cars</h2>
        <Link
          to="/admin/form"
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
        >
          <Plus size={20} />
          <span className="text-sm font-medium">Add New Car</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Car Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Price/Day
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cars?.map((car) => (
                <tr key={car?._id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    {car?._id}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    {car?.name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    ${car?.rate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    {car?.isBooked ? (
                      <span className="inline-block bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                        Booked
                      </span>
                    ) : (
                      <span className="inline-block bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded">
                        Available
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm flex gap-2">
                    <button
                      onClick={() => handleEdit(car)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(car?._id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 transition"
          >
            Prev
          </button>

          <span className="text-sm font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarsList;
