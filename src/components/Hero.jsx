import bannerImage from '../assets/bannerImage.png';

function Hero() {
  return (
    <section>
      <div className="grid text-white">
        <div className="min-h-[400px] flex mt-0 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="order-2 sm:order-1">
              <h1 className="text-3xl md:text-5xl font-bold text-orange-100 font-inter">
                Bienvenue sur Orange
              </h1>
              <p className="text-2xl md:text-3xl font-arimo font-semibold">
                Connectez-vous au futur avec Orange
              </p>
              <p className="font-arimo">
                Orange est votre partenaire de confiance pour des services de
                télécommunications de haute qualité. Avec une expérience
                éprouvée et une passion pour l&apos;innovation, nous nous
                engageons à vous fournir des solutions fiables et adaptées à vos
                besoins.
              </p>
            </div>
            <div className="order-1 sm:order-2">
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
