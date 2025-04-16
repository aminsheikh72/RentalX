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
  const [page, setPage] = useState(currentPage); // Current page state
  const [size, setSize] = useState(10); // 10 cars per page

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
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Manage Cars</h2>
        <Link
          to="/admin/form"
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          <Plus size={20} />
          Add New Car
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Car Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Price/Day
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cars?.map((car) => (
                <tr key={car?._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {car?._id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {car?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${car?.rate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {car?.isBooked ? (
                      <span className="bg-green-600 uppercase p-1 text-white">
                        Booked
                      </span>
                    ) : (
                      <span className="bg-amber-600 uppercase p-1 text-white">
                        Available
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button
                      onClick={() => handleEdit(car)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(car?._id)}
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
        <div className="flex justify-center items-center gap-3 p-4">
          {/* Prev Button */}
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {/* Current Page Indicator */}
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>

          {/* Next Button */}
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarsList;
