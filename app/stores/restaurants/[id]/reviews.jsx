"use client";
import { useEffect, useState, useCallback } from "react";
import { Star } from "lucide-react";
import { useSession } from "next-auth/react";
import CustomerReviewSkeleton from "./reviewsskeleton";

const StarRating = ({ rating, onRatingChange, disabled = false }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="mr-1 focus:outline-none"
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => onRatingChange(star)}
          disabled={disabled}
          aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
        >
          <Star
            size={24}
            className={`${
              star <= (hoveredRating || rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            } transition-colors duration-150`}
          />
        </button>
      ))}
    </div>
  );
};

const Reviews = ({ businessId }) => {
  const { data: session } = useSession();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchReviews = useCallback(async () => {
    if (!businessId) return;

    const controller = new AbortController();
    const { signal } = controller;

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`/api/reviews/${businessId}`, { signal });
      if (!res.ok) {
        throw new Error("Error fetching reviews");
      }
      const data = await res.json();
      setReviews(data.data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, [businessId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      setError("You must be logged in to submit a review.");
      return;
    }
    if (newReview.rating === 0) {
      setError("Please select a rating before submitting.");
      return;
    }
    if (newReview.comment.trim().length < 10) {
      setError("Please enter a comment of at least 10 characters.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      const reviewToSubmit = {
        ...newReview,
        customerId: session.user.id,
        customerName: session.user.email,
        businessId: businessId,
      };

      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewToSubmit),
      });

      if (!res.ok) {
        throw new Error("Error posting review");
      }

      const data = await res.json();
      setReviews((prevReviews) => [...prevReviews, data]);
      setNewReview({ rating: 0, comment: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {loading ? (
        <CustomerReviewSkeleton />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="space-y-4">
          {reviews.map(
            ({ customerName, reviewDate, comment, rating }, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {customerName}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Posted on {new Date(reviewDate).toLocaleDateString()}
                </p>
                <StarRating rating={rating} disabled={true} />
                <p className="text-gray-700 mt-4">{comment}</p>
              </div>
            )
          )}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-8 bg-white p-4 rounded-lg shadow-sm"
      >
        <h3 className="text-xl font-bold mb-4">Leave a Review</h3>
        <div className="mb-4">
          <StarRating
            rating={newReview.rating}
            onRatingChange={(rating) =>
              setNewReview((prev) => ({ ...prev, rating }))
            }
          />
        </div>

        <div className="mb-4">
          <textarea
            className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            id="comment"
            rows="4"
            value={newReview.comment}
            onChange={(e) =>
              setNewReview((prev) => ({ ...prev, comment: e.target.value }))
            }
            placeholder="Leave a review... (minimum 10 characters)"
            required
            minLength={10}
          ></textarea>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="flex items-center justify-end">
          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:opacity-50"
            type="submit"
            disabled={isSubmitting || !session}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
