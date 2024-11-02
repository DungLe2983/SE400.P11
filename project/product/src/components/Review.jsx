import React from "react";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Ralph Edwards",
      date: "8/2/19",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
      avatar: "https://api.slingacademy.com/public/sample-photos/11.jpeg",
    },
    {
      id: 2,
      name: "Kristin Watson",
      date: "8/2/19",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
      avatar: "https://api.slingacademy.com/public/sample-photos/12.jpeg",
    },
  ];

  return (
    <div className="max-w-2xl py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <span className="text-5xl font-bold">5.0</span>
          <div>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`text-3xl ${
                    i < 4 ? "ri-star-fill" : "ri-star-line"
                  }  text-yellow-500`}
                ></i>
              ))}
            </div>
            <span className="text-sm text-gray-600">(15 Reviews)</span>
          </div>
        </div>
        <button className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          Write a Review
        </button>
      </div>

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-8">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={`${review.name}'s avatar`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">{review.name}</h3>
                <span className="text-sm text-gray-600">{review.date}</span>
              </div>
              <div className="flex gap-1 ml-auto">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`w-5 h-5 ${
                      i < 5 ? "ri-star-fill" : "ri-star-line"
                    }  text-yellow-500`}
                  ></i>
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 py-3 text-center text-gray-600 hover:text-gray-900 transition-colors">
        See More Review
      </button>
    </div>
  );
};

export default Review;
