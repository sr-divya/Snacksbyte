// pages/Flavors.jsx

import FlavourCard from "../components/FlavourCard";
import cold_drink from "../assets/images/cold-drink.jpg";
import cold_coffee from "../assets/images/cold-coffee.jpg";
import ice_cream from "../assets/images/ice-cream.jpg";
import chocolate from "../assets/images/chocolate.jpg";
import Navbar from "../components/Navbar";

function Flavors() {
  return (
    <div>
        <Navbar />
    <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold text-[#3d1f17]">
            Explore Our Flavors
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FlavourCard
              image={cold_drink}
              title="Cold Drink"
            />
            <FlavourCard
              image={cold_coffee}
              title="Cold Coffee"
            />
            <FlavourCard
              image={ice_cream}
              title="Ice Cream"
            />
            <FlavourCard
              image={chocolate}
              title="Chocolates"
            />
          </div>
        </div>
    </div>
  );
}

export default Flavors;