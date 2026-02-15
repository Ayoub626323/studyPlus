"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "https://lejournal.cnrs.fr/sites/default/files/blog/visuels/cnrs_20180076_0001_md_2_72dpi.jpg",
    tag: "Débutant • 25 Séances • 200 Étudiants",
    title: "Maîtrisez les fondamentaux de l'analyse",
    label: "à partir de 299 DH",
    desc: "Plongez dans les limites, la continuité et les dérivées. À la fin, vous maîtriserez les concepts essentiels de l'analyse mathématique.",
  },
  {
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    tag: "Intermédiaire • 20 Séances • 150 Étudiants",
    title: "Algèbre linéaire avancée",
    label: "à partir de 399 DH",
    desc: "Notre cours d'algèbre linéaire vous enseigne les espaces vectoriels, matrices et déterminants pour exceller dans vos études supérieures.",
  },
  {
    img: "https://misterprepa.net/wp-content/uploads/2022/09/1s_mat_18i03z.jpg",
    tag: "Intermédiaire • 23 Séances • 590 Étudiants",
    title: "Probabilités et statistiques",
    label: "à partir de 349 DH",
    desc: "Apprenez les distributions, variables aléatoires et tests statistiques essentiels pour vos examens et projets académiques.",
  },
  {
    img: "https://lejournal.cnrs.fr/sites/default/files/blog/visuels/cnrs_20180076_0001_md_2_72dpi.jpg",
    tag: "Débutant • 35 Séances • 400 Étudiants",
    title: "Physique générale - Mécanique",
    label: "à partir de 249 DH",
    desc: "Pour les étudiants en sciences, ce cours de mécanique est indispensable. Découvrez les lois de Newton, l'énergie et la dynamique.",
  },
  {
    img: "https://www.superprof.ma/blog/wp-content/uploads/2017/12/definition-algebre-maths.jpg",
    tag: "Intermédiaire • 18 Séances • 150 Étudiants",
    title: "Électromagnétisme et optique",
    label: "à partir de 399 DH",
    desc: "Notre cours de physique vous enseigne les champs électriques, magnétiques et les phénomènes optiques de manière claire et structurée.",
  },
  {
    img: "https://misterprepa.net/wp-content/uploads/2022/09/1s_mat_18i03z.jpg",
    tag: "Avancé • 30 Séances • 320 Étudiants",
    title: "Calcul intégral et équations différentielles",
    label: "à partir de 449 DH",
    desc: "Perfectionnez vos compétences en analyse avec ce cours intensif sur les intégrales et la résolution d'équations différentielles.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Découvrez nos cours
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Parcourez plus de 200+ cours de soutien en mathématiques et physique et trouvez celui qui correspond à vos besoins académiques.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
