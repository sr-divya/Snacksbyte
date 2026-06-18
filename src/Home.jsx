import React from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import FlavourCard from './components/FlavourCard'
import { BrowserRouter } from 'react-router-dom'
import FeaturedProduct from './components/FeaturedProduct'
import PromoGrid from './components/PromoGrid'
import IngredientSection from './components/IngredientSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

const Home = () => {
  return (
    // <BrowserRouter>
      <div>
        <Navbar />
        <HeroBanner />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold text-[#3d1f17]">
            Explore Our Flavors
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FlavourCard
              image="/src/assets/images/cold-drink.jpg"
              title="Cold Drink"
            />
            <FlavourCard
              image="/src/assets/images/cold-coffee.jpg"
              title="Cold Coffee"
            />
            <FlavourCard
              image="/src/assets/images/ice-cream.jpg"
              title="Ice Cream"
            />
            <FlavourCard
              image="/src/assets/images/chocolate.jpg"
              title="Chocolates"
            />
          </div>
        </div>
        <FeaturedProduct />
        <PromoGrid />
        <IngredientSection />
        <ReviewsSection />
        <Footer />
      </div>

    // </BrowserRouter>
  )
}

export default Home
