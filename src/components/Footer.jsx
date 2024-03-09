function Footer() {
  return (
    <footer className="bg-black text-white py-8 font-inter">
      <div className="container mx-auto block md:flex justify-between items-center px-4">
        <div className="md:mb-0 mb-8">
          <h3 className="text-lg font-semibold mb-2">Contactez-nous</h3>
          <p className="text-sm">Téléphone: 123-456-7890</p>
          <p className="text-sm">Email: contact@orange.com</p>
        </div>
        <div className="md:mb-0 mb-8">
          <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">
              Facebook
            </a>
            <a href="#" className="text-sm hover:underline">
              Twitter
            </a>
            <a href="#" className="text-sm hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="md:mb-0 mb-8">
          <h3 className="text-lg font-semibold mb-2">Informations</h3>
          <p className="text-sm">Conditions générales</p>
          <p className="text-sm">Politique de confidentialité</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Orange Telecom. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
