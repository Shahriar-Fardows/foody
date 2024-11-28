import { Menu, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">FoodieHaven</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-orange-900 hover:text-orange-600">Home</a>
            <a href="#" className="text-orange-900 hover:text-orange-600">Menu</a>
            <a href="#" className="text-orange-900 hover:text-orange-600">About</a>
            <a href="#" className="text-orange-900 hover:text-orange-600">Contact</a>
          </div>

          {/* Cart and Contact Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-orange-900" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-full">
                3
              </span>
            </button>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-orange-900" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-full">
                3
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-900"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-orange-50">
            <a href="#" className="block px-3 py-2 text-orange-900 hover:text-orange-600">Home</a>
            <a href="#" className="block px-3 py-2 text-orange-900 hover:text-orange-600">Menu</a>
            <a href="#" className="block px-3 py-2 text-orange-900 hover:text-orange-600">About</a>
            <a href="#" className="block px-3 py-2 text-orange-900 hover:text-orange-600">Contact</a>
            <button className="w-full mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

