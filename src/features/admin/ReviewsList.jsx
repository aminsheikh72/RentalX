import React, { useEffect } from "react";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../features/car/carSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

function ReviewsList() {
  const { isLoading, isError, message, reviews } = useSelector(
    (state) => state.car
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
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
        <h2 className="text-xl font-semibold text-gray-800">User Reviews</h2>
      </div>
      <div className="p-6 space-y-6">
        {reviews.map((user) =>
          user.reviews.map((review) => (
            <div key={review._id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800 uppercase">
                    user name : {user.name}
                  </h3>
                  <p className="text-sm text-gray-600 uppercase pt-2">
                    car name : {review.carName}
                  </p>
                </div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((starPosition) => (
                    <Star
                      key={starPosition}
                      className={`w-5 h-5 ${
                        starPosition <= review.rating
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReviewsList;
