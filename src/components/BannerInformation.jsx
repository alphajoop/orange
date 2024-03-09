import { useState } from 'react';

function BannerInformation() {
  const [showBanner, setShowBanner] = useState(true);

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div
          id="bottom-banner"
          tabIndex="-1"
          className="fixed bg-black top-0 start-0 z-50 flex justify-between w-full p-4"
        >
          <div className="flex items-center mx-auto">
            <p className="flex items-center text-sm font-normal text-white">
              <span className="inline-flex p-1 me-3 bg-orange-100 rounded-full w-6 h-6 items-center justify-center">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                </svg>
                <span className="sr-only">Promotion</span>
              </span>
              <span>
                Obtenez une remise de 10% sur votre prochaine facture en passant
                à un forfait supérieur !{' '}
                <a
                  href="#"
                  className="flex items-center ms-0 text-sm font-medium text-orange-100 md:ms-1 md:inline-flex hover:underline"
                >
                  En savoir plus{' '}
                  <svg
                    className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleClose}
              data-dismiss-target="#bottom-banner"
              type="button"
              className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-white rounded-lg text-sm p-1.5 hover:text-orange-100"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Fermer le banner</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BannerInformation;
