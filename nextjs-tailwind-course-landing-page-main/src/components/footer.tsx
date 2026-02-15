import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Plateforme",
    items: ["À propos", "Nos cours", "Tarifs", "Témoignages"],
  },
  {
    title: "Compte",
    items: ["Connexion", "Inscription", "Mon espace", "Contact"],
  },
  {
    title: "Informations",
    items: ["Mentions légales", "Confidentialité", "CGU", "FAQ"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#1f3b7a] px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" className="mb-4 text-white">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-blue-100 transition-colors hover:!text-white"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left text-white">
              Contact
            </Typography>
            <Typography className="!text-blue-100 font-normal mb-4 text-base">
              Une question ? Contactez-nous pour en savoir plus sur nos cours de soutien.
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left text-white">
              Téléphone
            </Typography>
            <Typography
              as="a"
              href="tel:0613776147"
              className="block py-2 font-semibold !text-white hover:!text-orange-400 transition-colors"
            >
              061 37 76 147
            </Typography>
            <Typography variant="small" className="font-medium mt-4 mb-2 text-left text-white">
              Newsletter
            </Typography>
            <div className="flex flex-col lg:flex-row items-start gap-2">
              {/* @ts-ignore */}
              <Input label="Votre email" color="white" className="w-full lg:max-w-xs" />
              <Button className="w-full lg:w-fit bg-orange-500 hover:bg-orange-600 text-white" size="md">
                S&apos;inscrire
              </Button>
            </div>
          </div>
        </div>
        <Typography className="md:text-center mt-16 font-normal !text-blue-100">
          &copy; {CURRENT_YEAR} studyPlus — Cours de soutien en maths et physique. Contact :{" "}
          <a href="tel:0613776147" className="font-semibold text-white hover:text-orange-400 transition-colors">
            061 37 76 147
          </a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
