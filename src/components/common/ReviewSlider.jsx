





import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../App.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiConnector"
import { ratingsEndpoints } from "../../services/apis"
import { Autoplay, FreeMode, Pagination } from "swiper/modules"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const truncateWords = 15

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        console.log("Fetching reviews from:", ratingsEndpoints.REVIEWS_DETAILS_API)
        
        const res = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
        console.log("API Response:", res)
        
        if (res.data?.success && Array.isArray(res.data.data)) {
          console.log("Reviews data:", res.data.data)
          setReviews(res.data.data)
        } else {
          console.log("Invalid response structure or empty data")
          setReviews([]) // fallback to empty array
        }
      } catch (err) {
        console.error("Error fetching reviews:", err)
        setError(err.message)
        setReviews([])
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])













  return (
    <div className="text-white">
      <div className="my-[50px] max-w-maxContentTab lg:max-w-maxContent">
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-50"></div>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-8">
            <p className="text-richblack-300">Unable to load reviews. Please try again later.</p>
          </div>
        )}

        {!loading && !error && reviews.length === 0 && (
          <div className="text-center py-8">
            <p className="text-richblack-300">No reviews available yet.</p>
          </div>
        )}

        {reviews.length > 0 && !loading && (
          <div className="h-[184px]">
            <Swiper
              slidesPerView={4}
              spaceBetween={25}
              loop={reviews.length > 1}
              freeMode={true}
              autoplay={reviews.length > 1 ? {
                delay: 2500,
                disableOnInteraction: false,
              } : false}
              modules={[FreeMode, Pagination, Autoplay]}
              className="w-full "
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
              }}
            >
              {reviews.map((review, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 rounded-lg h-full">
                      <div className="flex items-center gap-4">
                        <img
                          src={
                            review?.user?.image
                              ? review?.user?.image
                              : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                          }
                          alt={review?.user?.firstName}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <h1 className="font-semibold text-richblack-5 text-sm">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                          <h2 className="text-[12px] font-medium text-richblack-500 truncate">
                            {review?.course?.courseName}
                          </h2>
                        </div>
                      </div>
                      <p className="font-medium text-richblack-25 line-clamp-3">
                        {review?.review.split(" ").length > truncateWords
                          ? `${review?.review
                              .split(" ")
                              .slice(0, truncateWords)
                              .join(" ")} ...`
                          : `${review?.review}`}
                      </p>
                      <div className="flex items-center gap-2 mt-auto">
                        <h3 className="font-semibold text-yellow-100 text-sm">
                          {review?.rating?.toFixed(1) || 0}
                        </h3>
                        <ReactStars
                          count={5}
                          value={review?.rating || 0}
                          size={16}
                          edit={false}
                          activeColor="#ffd700"
                          emptyIcon={<FaStar />}
                          fullIcon={<FaStar />}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewSlider
