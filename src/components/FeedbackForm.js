import React, { useState } from "react";
import star from "../images/star.png";
import star_blank from "../images/star_blank.png";
import customer from "../images/customer.png";

function FeedbackForm() {
  const [name] = useState("Mohit Harne"); // Set default username
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState([]); // State to store the uploaded images
  const [savedFeedbacks, setSavedFeedbacks] = useState([]);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const uploadedImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages(uploadedImages);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (feedback.trim() !== "" && rating !== 0) {
      const newFeedback = {
        name,
        feedback,
        rating,
        size: "9",
        color: "WHITE/BLACK-VOLT-LASER ORANGE",
        product: "Nike Winflow",
        date: new Date().toLocaleDateString(),
        comment: feedback,
        images: [...images], // Store array of image URLs
      };
      setSavedFeedbacks([...savedFeedbacks, newFeedback]);
      setFeedback("");
      setRating(0);
      setImages([]); // Reset image state after submission
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img key={i} className="h-4 w-4" src={star} alt="Star" />);
    }
    if (rating < 5) {
      for (let i = rating; i < 5; i++) {
        stars.push(
          <img key={i} className="h-4 w-4 invert" src={star_blank} alt="Star" />
        );
      }
    }
    return stars;
  };

  const handleDeleteFeedback = (index) => {
    const updatedFeedbacks = [...savedFeedbacks];
    updatedFeedbacks.splice(index, 1);
    setSavedFeedbacks(updatedFeedbacks);
  };

  return (
    <div className="max-w-md mx-auto ml-[-0px] mt-6 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-4">
        <div>
          {savedFeedbacks.map((savedFeedback, index) => (
            <div key={index} className="mb-4 text-white pb-4">
              <div className="p-2 flex items-center gap-2 ">
                <img
                  className="h-10 w-10 bg-gray-500 rounded-full p-1"
                  src={customer}
                  alt="M"
                />
                <h1>{savedFeedback.name}</h1>
              </div>
              <div className="star  flex gap-2 items-center">
                {renderStars(savedFeedback.rating)}
                <h1 className="font-semibold"> {savedFeedback.product}</h1>
              </div>
              <h1 className="text-gray-500 text-[15px]">
                Reviewed on {savedFeedback.date}
              </h1>
              <h1>
                <span className="text-gray-500">
                  Size: {savedFeedback.size} UK
                </span>
                <span className="text-gray-500">
                  {" "}
                  Colour: {savedFeedback.color}
                </span>
                <span className="text-gray-700"> | Verified Purchase</span>
                <br />
                {savedFeedback.comment}
              </h1>
              <br />
              {savedFeedback.images && (
                <div className="mt-2 flex gap-4">
                  {savedFeedback.images.map((imageUrl, index) => (
                    <img
                      key={index}
                      className="h-40 w-40 rounded-md"
                      src={imageUrl}
                      alt={` ${index}`}
                    />
                  ))}
                </div>
              )}{" "}
              <br />
              <div className="mt-2">
                <button className="p-1 pl-6 pr-6 border-2 border-gray-400 rounded-lg hover:border-red-700 shadow-md shadow-gray-600">
                  Helpful
                </button>
                <span className="text-gray-500"> &nbsp;&nbsp;|</span>
                <button className="p-1 pl-6 pr-6 ">Report</button>
                <button
                  className="p-1 pl-6 pr-6"
                  onClick={() => handleDeleteFeedback(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex">
        <div className="p-4 lg:w-[700px] md:w-[700px]">
          <h2 className="text-lg font-semibold text-white">Feedback Form</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700"
              >
                Feedback:
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={handleFeedbackChange}
                className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent"
                placeholder="Enter your feedback here..."
                rows={4}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating:
              </label>
              <select
                id="rating"
                value={rating}
                onChange={handleRatingChange}
                className="block w-[150px] mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent"
              >
                <option className="text-black" value="0">
                  Select Rating
                </option>
                <option className="text-black" value="1">
                  1 Star
                </option>
                <option className="text-black" value="2">
                  2 Stars
                </option>
                <option className="text-black" value="3">
                  3 Stars
                </option>
                <option className="text-black" value="4">
                  4 Stars
                </option>
                <option className="text-black" value="5">
                  5 Stars
                </option>
              </select>
            </div>
            <div className="mb-2">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Image:
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                multiple // Allow multiple file selection
                className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
