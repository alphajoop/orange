import { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  return (
    <section className="bg-yellow-300 py-12">
      <div className="container mx-auto max-w-screen-lg px-4">
        <h2 className="mb-8 text-3xl md:text-5xl tracking-tight font-extrabold text-center font-inter text-black">
          Feedback
        </h2>
        {submitted ? (
          <p className="text-xl md:text-2xl text-center text-black font-semibold font-arimo mb-8">
            Merci pour votre feedback !
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <p className="text-lg md:text-xl text-black mb-8 text-start font-inter">
              Partagez votre avis avec nous. Nous apprécions vos commentaires et
              suggestions !
            </p>
            <textarea
              id="feedback"
              className="w-full text-black placeholder-black bg-transparent px-4 py-3 mb-6 border-2 border-black rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-white"
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              placeholder="Votre feedback..."
            ></textarea>
            <button
              type="submit"
              className="w-full bg-transparent text-black border-2 border-black font-semibold font-inter py-3 rounded-md hover:bg-black hover:text-white transition duration-300"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Feedback;
