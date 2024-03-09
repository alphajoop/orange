import { CheckCircle, Link, UserHeadSet } from '../utils/icons';

export function Feature() {
  return (
    <section className="bg-white py-10 dark:bg-gray-900 transform duration-700">
      <div className="container py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2
            className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-orange-200 dark:text-orange-100"
            data-aos="fade-right"
          >
            Pourquoi choisir Orange ?
          </h2>
          <p
            className="text-black sm:text-xl dark:text-white font-arimo"
            data-aos="fade-right"
          >
            Découvrez les avantages de choisir Orange pour vos besoins de
            télécommunications. Notre engagement envers la fiabilité,
            l&apos;innovation et le service clientèle exceptionnel vous offre
            une expérience incomparable.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex justify-center items-center mb-4 w-11 h-11 rounded-full bg-orange-200 lg:h-12 lg:w-12 dark:bg-orange-100">
              <CheckCircle
                className={'w-6 h-6 text-black lg:w-7 lg:h-7 dark:text-white'}
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Fiabilité
            </h3>
            <p className="text-gray-900 dark:text-gray-300">
              Nous nous engageons à vous offrir un service fiable et de qualité
              supérieure.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex justify-center items-center mb-4 w-11 h-11 rounded-full bg-orange-200 lg:h-12 lg:w-12 dark:bg-orange-100">
              <Link
                className={'w-6 h-6 text-black lg:w-7 lg:h-7 dark:text-white'}
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Innovation
            </h3>
            <p className="text-gray-900 dark:text-gray-300">
              Toujours à la pointe de la technologie, nous sommes déterminés à
              vous offrir les dernières innovations en matière de
              télécommunications.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex justify-center items-center mb-4 w-11 h-11 rounded-full bg-orange-200 lg:h-12 lg:w-12 dark:bg-orange-100">
              <UserHeadSet
                className={'w-6 h-6 text-black lg:w-7 lg:h-7 dark:text-white'}
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Service Clientèle
            </h3>
            <p className="text-gray-900 dark:text-gray-300">
              Notre équipe dévouée est là pour répondre à vos questions et vous
              offrir un support personnalisé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
