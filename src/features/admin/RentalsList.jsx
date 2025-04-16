import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRentals } from "../car/carSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

function RentalsList() {
  const { cars, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.car
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRentals());
  }, [dispatch]);
  console.log(cars);
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
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-800">All Rentals</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Car
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                End Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cars?.map((user) =>
              user.rentals?.map((rental) => {
                const formattedPickup = new Date(
                  rental.pickupDate
                ).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });

                const formattedDrop = new Date(
                  rental.dropDate
                ).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });
                const today = new Date();
                const options = {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                };
                const formattedDate = today
                  .toLocaleDateString("en-GB", options)
                  .replace(/,/g, "");

                return (
                  <tr key={rental._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rental._id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rental.car?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formattedPickup}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formattedDrop}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={
                          formattedDate > formattedDrop
                            ? "bg-green-600 text-white p-1"
                            : " bg-yellow-500 text-white p-1"
                        }
                      >
                        {formattedDate > formattedDrop ? "Completed" : "Booked"}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RentalsList;
