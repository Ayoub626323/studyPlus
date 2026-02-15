"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "Les professeurs sont excellents et l'approche pratique avec les exercices corrigés est très efficace pour assimiler les notions.",
    client: "Fatima Bennani",
    title: "Étudiante en CPGE @ Lycée Mohammed V",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    feedback:
      "J'ai considérablement progressé grâce aux cours de soutien. J'ai réussi mes examens d'analyse et d'algèbre avec d'excellentes notes.",
    client: "Youssef El Amrani",
    title: "Étudiant @ FST - Marrakech",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    feedback:
      "Les cours sont bien structurés et le suivi personnalisé m'a permis de consolider mes bases en maths et physique.",
    client: "Amal Idrissi",
    title: "Étudiante @ ENSA",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Ce que disent nos étudiants
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            Notre mission est de donner à chaque étudiant les connaissances et
            les compétences nécessaires pour réussir dans ses études. Ne nous
            croyez pas sur parole.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default StudentsFeedback;
