import ReviewCard from "./ReviewCard";
import chocolate from "../assets/images/chocolate.jpg";
import biscuit from "../assets/images/biscuit.jpg";
import ice_cream from "../assets/images/ice-cream.jpg";

function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Fitness Enthusiast",
      image: chocolate,
      review:
        "These snacks have become part of my daily routine. Great taste and they keep me full for hours.",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Software Engineer",
      image: biscuit,
      review:
        "Perfect for work breaks. The quality is amazing and the flavors are genuinely addictive.",
    },
    {
      id: 3,
      name: "Aditi Singh",
      role: "Nutrition Coach",
      image: ice_cream,
      review:
        "A healthy alternative to traditional snacks. Clean ingredients and excellent nutritional value.",
    },
  ];

  return (
    <section className="bg-[#f8f3ed] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#3d1f17] md:text-5xl">
            Loved By Thousands
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Hear what our customers have to say about their favorite snacks.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              {...review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;