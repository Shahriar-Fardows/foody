import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Star, Clock, MapPin } from 'lucide-react'

export default function Home() {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [cuisines, setCuisines] = useState([])

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        setFoods(response.data.meals || [])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching foods:', error)
        setLoading(false)
      }
    }

    const fetchCuisines = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        setCuisines(response.data.meals || [])
      } catch (error) {
        console.error('Error fetching cuisines:', error)
      }
    }

    fetchFoods()
    fetchCuisines()
  }, [])

  const testimonials = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Amazing food and great service! Will definitely come back.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Sarah Smith",
      rating: 5,
      comment: "The best restaurant in town. Love their international cuisine!",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Mike Johnson",
      rating: 5,
      comment: "Excellent food quality and amazing ambiance.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  ]

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover Worlds <br />
              Best Foods
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Experience the authentic taste of international cuisine with our carefully crafted dishes.
            </p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* Featured Foods Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Foods</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {foods.slice(0, 6).map((food) => (
              <SwiperSlide key={food.idMeal}>
                <Link to={`/product/${food.idMeal}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={food.strMealThumb}
                      alt={food.strMeal}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{food.strMeal}</h3>
                      <p className="text-gray-600 mb-4">{food.strArea} Cuisine</p>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 w-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Cuisines Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Explore Cuisines</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cuisines.map((cuisine, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-6 text-center hover:bg-orange-100 transition-colors">
                <img
                  src={`https://source.unsplash.com/400x400/?${cuisine.strArea}-food`}
                  alt={cuisine.strArea}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{cuisine.strArea} Cuisine</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.comment}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Visit Us Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 11:00 AM - 10:00 PM<br />
                Saturday - Sunday: 10:00 AM - 11:00 PM
              </p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                123 Restaurant Street<br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

