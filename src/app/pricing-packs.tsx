import Link from "next/link";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-5 w-5 shrink-0 text-indigo-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

const PACKS = [
  {
    title: "Maths Sup",
    subtitle: "Semestre 1",
    price: "1000",
    duration: 3,
    features: [
      "Cours essentiels + PDF",
      "Exercices corrigés + Quiz",
      "Méthodes fondamentales CPGE",
      "Extraits ENS / Centrale / CNC",
      "Accompagnement & suivi personnel",
      "Tableau blanc interactif",
    ],
  },
  {
    title: "Approfondissement",
    subtitle: "Semestre 2",
    price: "1000",
    duration: 3,
    features: [
      "Cours avancés + PDF",
      "Exercices TD → concours",
      "Probabilités & algèbre linéaire",
      "Sujet concours sélectionné",
      "Suivi pédagogique personnalisé",
      "Tableau blanc interactif",
    ],
  },
  {
    title: "Maths Spé (Approfondissement)",
    subtitle: "Semestre 3",
    price: "1000",
    duration: 3,
    features: [
      "Algèbre linéaire avancée",
      "Espaces euclidiens & normés",
      "Séries numériques & de fonctions",
      "Exercices corrigés + Quiz",
      "Extraits ENS / Centrale / CNC",
      "Accompagnement & suivi personnel",
      "Tableau blanc interactif",
    ],
  },
  {
    title: "Préparation Concours",
    subtitle: "Semestre 4",
    price: "1500",
    duration: 4,
    features: [
      "Probabilités & intégration avancée",
      "Calcul différentiel & équations diff.",
      "Problèmes types concours",
      "Sujet ENS / Centrale / CNC",
      "Méthodes pour l'écrit & l'oral",
      "Suivi pédagogique personnalisé",
      "Tableau blanc interactif",
    ],
  },
];

export function PricingPacks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Math pak
        </h2>
        <p className="mt-2 text-gray-600">
          Formules adaptées à chaque semestre de prépa
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PACKS.map((pack, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 shadow-sm sm:px-8 lg:p-8 ${
              index === 0
                ? "border-2 border-indigo-600 ring-1 ring-indigo-600"
                : "border border-gray-200"
            }`}
          >
            <div className="text-center">
              <h3 className="text-base font-semibold text-gray-900">
                {pack.subtitle}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{pack.title}</p>

              <p className="mt-4">
                <strong className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {pack.price} DH
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  {" "}
                  / {pack.duration} mois
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              {pack.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/paiement?pack=${index}`}
              className={`mt-8 block rounded-full px-8 py-3 text-center text-sm font-medium transition ${
                index === 0
                  ? "border-2 border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700"
                  : "border-2 border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-50 hover:ring-1 hover:ring-indigo-600"
              }`}
            >
              Acheter
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingPacks;
