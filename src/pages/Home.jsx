import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="pt-28">
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: "url(/homeBackground.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-8 px-4"
          style={{ minHeight: "calc(100vh - 6rem)" }}
        >
          <div className="left flex-1 text-center  mt-16 md:mt-0">
            <div className="text">
              <h1 className="font-display font-semibold text-4xl md:text-5xl text-[#425B6F] mb-6 md:mb-10">
                Welcome To
              </h1>
              <h2 className="font-display text-[#D4AF37] text-4xl md:text-5xl mb-6 md:mb-10">
                AI Gold Price Prediction
              </h2>
              <p className="font-sans text-[#425B6F] text-base md:text-lg leading-relaxed">
                An AI-powered platform that predicts gold prices using
                <br className="hidden md:block" />
                historical data, market trends, and economic indicators,
                <br className="hidden md:block" />
                helping investors make informed decisions.
              </p>
            </div>

            <button className="mt-7">
              <Link to="/about-us" className="px-6 py-3 border-[#D4AF37] border-2 rounded-2xl bg-[#D4AF37] text-white  hover:bg-yellow-500 transition">About Us</Link>
            </button>
          </div>

          <div className="right flex-1 flex justify-center items-center">
            <div className="perspective-1000">
              <img
                src="/Golden coin.png"
                alt="Golden Coin"
                width={250}
                height={250}
                className="md:w-72 md:h-72 transition-transform duration-700 ease-in-out transform-gpu hover:[transform:rotateY(180deg)]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}