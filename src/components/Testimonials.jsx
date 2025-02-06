import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review:
      "Great products and excellent customer service! Highly recommended.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    review: "Loved the quality of the products. Will definitely shop again.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 5,
    review: "Fast delivery and amazing deals. Very satisfied!",
  },
  {
    id: 4,
    name: "Bob Brown",
    rating: 3,
    review: "Good products, but delivery could be faster.",
  },
];

const Testimonials = () => {
  return (
    <div className="p-6 bg-gray-100 mt-4">
      <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border p-4 rounded-lg shadow-md bg-white"
          >
            <div className="flex items-center mb-2">
              <div className="text-yellow-500">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <div className="text-gray-500 ml-2">({testimonial.rating}/5)</div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.review}"</p>
            <p className="text-gray-900 font-semibold mt-2">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
