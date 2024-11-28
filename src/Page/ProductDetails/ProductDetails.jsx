import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetails() {
  const { id } = useParams()
  const [food, setFood] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setFood(response.data.meals[0])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching food:', error)
        setLoading(false)
      }
    }

    fetchFood()
  }, [id])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!food) {
    return <div className="min-h-screen flex items-center justify-center">Food not found</div>
  }

  // Get ingredients and measurements
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = food[`strIngredient${i}`]
    const measure = food[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`)
    }
  }

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={food.strMealThumb}
                alt={food.strMeal}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold mb-4">{food.strMeal}</h1>
              <div className="mb-6">
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {food.strCategory}
                </span>
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold ml-2">
                  {food.strArea} Cuisine
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              <ul className="list-disc list-inside mb-6">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">{ingredient}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <p className="text-gray-600 whitespace-pre-line">{food.strInstructions}</p>
              {food.strYoutube && (
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold mb-4">Video Tutorial</h2>
                  <a
                    href={food.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                  >
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

