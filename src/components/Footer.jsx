
function Footer() {
  return (
    <footer className="bg-[#2d120d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-3xl font-bold">
              CrunchyBYTE
            </h3>

            <p className="leading-relaxed text-gray-300">
              Premium snacks made with carefully selected ingredients,
              delivering taste, quality, and nutrition in every bite.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/">Products</a>
              </li>

              <li>
                <a href="/">Categories</a>
              </li>

              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Support
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Stay Updated
            </h4>

            <div className="flex overflow-hidden rounded-full bg-white">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 text-black outline-none"
              />

              <button className="bg-orange-500 px-5 font-medium">
                Join
              </button>
            </div>

            
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © 2026 Snackify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;