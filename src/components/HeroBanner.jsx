import lays from "../assets/images/lays.jpg";

function HeroBanner() {
  return (
    <section className="bg-[#f8f3ed]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:py-24">
        <div className="flex-1 text-center lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            Premium Healthy Snacks
          </span>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-[#3d1f17] lg:text-7xl">
            Snacks That
            <br />
            Fuel Your Day
          </h1>

          <p className="mb-8 max-w-lg text-lg text-gray-600">
            Crafted with natural ingredients and packed with flavor.
            Discover snacks that keep you energized without
            compromising on taste.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-[#6f2d1f] px-8 py-4 font-semibold text-white transition hover:bg-[#5a2418]">
              Shop Now
            </button>

            <button className="rounded-full border border-[#6f2d1f] px-8 py-4 font-semibold text-[#6f2d1f] transition hover:bg-[#6f2d1f] hover:text-white">
              Explore Flavors
            </button>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <img
            src={lays}
            alt="Healthy snacks"
            className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;