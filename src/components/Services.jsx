import { FingerPrint, Settings, Wallet } from '../utils/icons';

export function Services() {
  return (
    <section className="bg-blue-300 py-10">
      <div className="container py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2
            className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-black"
            data-aos="fade-up-left"
          >
            Nos Services
          </h2>
          <p
            className="text-black sm:text-xl font-arimo"
            data-aos="fade-up-left"
          >
            Découvrez les services que nous offrons pour répondre à vos besoins
            en matière de télécommunications.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className="rounded-lg p-6 shadow-lg border border-black hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-700"
            data-aos="fade-up-left"
            data-aos-offset="300"
          >
            <div className="flex h-10 w-10 mb-4 items-center justify-center rounded-lg bg-black">
              <Settings className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Configuration</h3>
            <p>
              Configuration personnalisée de votre matériel et de vos services
              pour répondre à vos besoins spécifiques.
            </p>
          </div>
          <div
            className="rounded-lg p-6 shadow-lg border border-black hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-700"
            data-aos="fade-up-left"
            data-aos-offset="200"
          >
            <div className="flex h-10 w-10 mb-4 items-center justify-center rounded-lg bg-black">
              <Wallet className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Paiement</h3>
            <p>
              Options de paiement flexibles et sécurisées pour faciliter la
              gestion de vos factures.
            </p>
          </div>
          <div
            className="rounded-lg p-6 shadow-lg border border-black hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-700"
            data-aos="fade-up-left"
            data-aos-offset="100"
          >
            <div className="flex h-10 w-10 mb-4 items-center justify-center rounded-lg bg-black">
              <FingerPrint className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Matériel</h3>
            <p>
              Large gamme de périphériques et d&apos;équipements pour répondre à
              tous vos besoins de connectivité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
