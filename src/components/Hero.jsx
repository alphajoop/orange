import bannerImage from '../assets/bannerImage.png';

function Hero() {
  return (
    <section className=" bg-black mt-14 py-10">
      <div className="grid text-white container">
        <div className="min-h-[420px] flex mt-0 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="order-2 sm:order-1">
              <h1
                className="text-3xl md:text-5xl font-bold text-orange-100 font-inter"
                data-aos="fade-up"
              >
                Bienvenue sur Orange
              </h1>
              <p
                className="text-2xl md:text-3xl font-arimo font-semibold"
                data-aos="fade-up"
              >
                Connectez-vous au futur avec Orange
              </p>
              <p className="font-arimo" data-aos="fade-up">
                Orange est votre partenaire de confiance pour des services de
                télécommunications de haute qualité. Avec une expérience
                éprouvée et une passion pour l&apos;innovation, nous nous
                engageons à vous fournir des solutions fiables et adaptées à vos
                besoins.
              </p>
              <button
                className="bg-orange-100 font-inter rounded-sm text-black font-bold py-2 px-4 mt-4 hover:bg-white hover:text-black transition duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
              >
                En savoir plus
              </button>
            </div>
            <div className="order-1 sm:order-2" data-aos="zoom-in">
              <img
                src={bannerImage}
                className="max-w-full h-auto rounded-md"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
