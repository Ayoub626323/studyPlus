"use client";

export function FAQ() {
  return (
    <div className="bg-base-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* FAQ Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
            FAQ
          </h2>
          <p className="text-base-content/80 text-xl">
            Les questions les plus fréquentes sur nos formations CPGE Horizon.
          </p>
        </div>

        <div className="join join-vertical w-full bg-base-100">
          <div className="collapse collapse-plus join-item border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold">
              À qui s&apos;adressent ces formations ?
            </div>
            <div className="collapse-content">
              <p className="text-base-content/80">
                Nos packs sont conçus pour les étudiants en CPGE scientifiques (MPSI, MP, PCSI, PC, PSI) souhaitant progresser en mathématiques et réussir leurs DS, colles et concours.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Est-ce adapté si j&apos;ai des difficultés ?
            </div>
            <div className="collapse-content">
              <p className="text-base-content/80 mb-2">
                Oui. Les contenus sont progressifs :
              </p>
              <ul className="text-base-content/80 list-inside list-disc space-y-1">
                <li>bases essentielles</li>
                <li>exercices guidés</li>
                <li>entraînement avancé</li>
              </ul>
              <p className="text-base-content/80 mt-4">
                Vous pouvez travailler à votre rythme.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Que contiennent les packs ?
            </div>
            <div className="collapse-content">
              <p className="text-base-content/80 mb-2">
                Chaque pack comprend :
              </p>
              <ul className="text-base-content/80 list-inside list-disc space-y-1">
                <li>Cours synthétiques et méthodes clés</li>
                <li>Exercices d&apos;entraînement corrigés en détail</li>
                <li>Problèmes type DS / concours</li>
                <li>Quiz et tests d&apos;évaluation</li>
                <li>Accès illimité pendant la durée du pack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
