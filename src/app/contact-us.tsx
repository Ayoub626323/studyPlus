"use client";

import Image from "next/image";
import {
  ClockIcon,
  MapPinIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const CONTACT_CARDS = [
  {
    icon: ClockIcon,
    title: "Horaires",
    content: (
      <>
        <p>Lundi - Vendredi</p>
        <p>9h00 - 18h00</p>
      </>
    ),
  },
  {
    icon: MapPinIcon,
    title: "Adresse",
    content: (
      <address className="not-italic">
        Maroc
        <br />
        Cours en ligne
      </address>
    ),
  },
  {
    icon: BriefcaseIcon,
    title: "Support",
    content: (
      <address className="not-italic">
        Équipe pédagogique
        <br />
        CPGE Horizon
      </address>
    ),
  },
  {
    icon: PhoneIcon,
    title: "Contact",
    content: (
      <>
        <p>061 37 76 147</p>
      </>
    ),
  },
];

export function ContactUs() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Contactez-nous
          </h2>
          <span className="absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r from-orange-500/40 to-orange-500/5" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
            <Image
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/contact/contact-8.png"
              alt="Contact illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Nous sommes là pour vous aider !
            </h3>
            <p className="mb-10 text-lg font-medium text-gray-600">
              CPGE Horizon vous accompagne dans votre réussite académique. Une
              question sur nos cours de maths et physique ? Contactez-nous pour
              en savoir plus.
            </p>

            {/* Contact Info Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {CONTACT_CARDS.map(({ icon: Icon, title, content }) => (
                <div
                  key={title}
                  className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-orange-500/20 text-orange-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">{title}</h4>
                  <div className="text-center text-gray-600">{content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
