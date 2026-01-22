import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";

const reviews = [
  {
    name: "Alex M.",
    role: "Crypto Investor",
    text: "Reward Capital delivers one of the smoothest crypto wallet experiences I’ve used. Fast, secure, and intuitive.",
    rating: 5,
  },
  {
    name: "Sophia L.",
    role: "Web3 Developer",
    text: "The platform feels solid and well thought out. The UI is clean and performance is excellent.",
    rating: 5,
  },
  {
    name: "Daniel R.",
    role: "DeFi Enthusiast",
    text: "Reward Capital makes interacting with decentralized finance effortless. Highly recommended.",
    rating: 4,
  },
  {
    name: "Emily K.",
    role: "Startup Founder",
    text: "Security and ease of use were my priorities — Reward Capital nailed both.",
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Trader",
    text: "Clean interface, fast transactions, and reliable infrastructure. Exactly what a crypto platform should be.",
    rating: 4,
  },
];

const Review = () => {
  return (
    <section className="review-section">
      <div className="max-w-7xl review-container">
        <h2 className="review-title">
          What Our <span>Users Say</span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                {/* STARS */}
                <div className="stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>

                <p className="review-text">“{review.text}”</p>

                <div className="review-user">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
