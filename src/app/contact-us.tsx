"use client";

export function ContactUs() {
  return (
    <section className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-base-content sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-1 text-base-content/70">
            Nous serions ravis de discuter de la façon dont nous pouvons vous aider.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Card */}
          <div className="flex flex-col bg-base-100 border border-base-300 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
            <h2 className="mb-8 text-xl font-semibold text-base-content">
              Remplissez le formulaire
            </h2>

            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hs-firstname-contacts-1" className="sr-only">Prénom</label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-2.5 sm:py-3 px-4 block w-full bg-base-200 border border-base-300 rounded-lg sm:text-sm text-base-content placeholder:text-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Prénom"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">Nom</label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-2.5 sm:py-3 px-4 block w-full bg-base-200 border border-base-300 rounded-lg sm:text-sm text-base-content placeholder:text-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    className="py-2.5 sm:py-3 px-4 block w-full bg-base-200 border border-base-300 rounded-lg sm:text-sm text-base-content placeholder:text-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">Numéro de téléphone</label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-2.5 sm:py-3 px-4 block w-full bg-base-200 border border-base-300 rounded-lg sm:text-sm text-base-content placeholder:text-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Numéro de téléphone"
                  />
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">Message</label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    rows={4}
                    className="py-2.5 sm:py-3 px-4 block w-full bg-base-200 border border-base-300 rounded-lg sm:text-sm text-base-content placeholder:text-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Votre message..."
                  />
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary text-primary-content hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Envoyer
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-base-content/70">
                  Nous vous répondrons sous 1-2 jours ouvrés.
                </p>
              </div>
            </form>
          </div>

          <div className="divide-y divide-base-300">
            {/* Icon Block */}
            <div className="flex gap-x-7 py-6">
              <svg className="shrink-0 size-6 mt-1.5 text-base-content" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-base-content">Support</h3>
                <p className="mt-1 text-sm text-base-content/70">Nous sommes là pour répondre à vos questions sur nos cours.</p>
                <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-base-content/70 hover:text-primary focus:outline-none focus:text-primary" href="#">
                  Contacter le support
                  <svg className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Icon Block */}
            <div className="flex gap-x-7 py-6">
              <svg className="shrink-0 size-6 mt-1.5 text-base-content" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-base-content">FAQ</h3>
                <p className="mt-1 text-sm text-base-content/70">Consultez notre FAQ pour les réponses aux questions fréquentes.</p>
                <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-base-content/70 hover:text-primary focus:outline-none focus:text-primary" href="#faq">
                  Voir la FAQ
                  <svg className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Icon Block */}
            <div className="flex gap-x-7 py-6">
              <svg className="shrink-0 size-6 mt-1.5 text-base-content" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7 11 2-2-2-2"/>
                <path d="M11 13h4"/>
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-base-content">Horaires</h3>
                <p className="mt-1 text-sm text-base-content/70">Lundi - Vendredi, 9h00 - 18h00</p>
                <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-base-content/70 hover:text-primary focus:outline-none focus:text-primary" href="#">
                  Voir les horaires
                  <svg className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Icon Block */}
            <div className="flex gap-x-7 py-6">
              <svg className="shrink-0 size-6 mt-1.5 text-base-content" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-base-content">Contact par email</h3>
                <p className="mt-1 text-sm text-base-content/70">Pour nous écrire par email :</p>
                <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-base-content/70 hover:text-primary focus:outline-none focus:text-primary" href="mailto:contact@cpgehorizon.com">
                  contact@cpgehorizon.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
