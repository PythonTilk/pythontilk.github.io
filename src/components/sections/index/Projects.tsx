import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Private Bio",
      description: "My Personal Bio on e-z.bio",
      link: "https://e-z.bio/tilk",
      image: "/e-zbanner.png"
    },
    {
      title: "Highfactory",
      description: "A Cheap Worldwide Game Hosting Service",
      link: "https://highfactory.tilk.tech",
      image: "/prismicon.png"
    },
    {
      title: "Wichteln",
      description: "A custom Name selector for a Teen-Group of my Church (private use)",
      link: "https://teenkreis.xyz",
      image: "/Teenkreis.jpg"
    },
    {
      title: "Valentines Day",
      description: "A simple site to ask someone out for valentines day",
      link: "https://valentines.tilk.tech",
      image: "/cats-cat-with-flower.png"
    }
  ];

  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          My Projects
        </motion.h1>
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {projects.map((project, index) => (
            <motion.li
              key={project.title}
              className="group flex"
              initial={{ transform: 'translateY(-30px)', opacity: 0 }}
              whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1), ease: [0.39, 0.21, 0.12, 0.96], }}
              viewport={{ amount: 0.1, once: true }}
            >
              <Link href={project.link} target="_blank" className="p-4 flex flex-col bg-gradient-to-br from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background hover:scale-105 transition-transform duration-300 w-full">
                <img alt="" draggable={false} className="rounded-lg border-1 border-accent mb-4 w-full h-48 object-cover" src={project.image} />
                <h2 className="text-center font-semibold text-3xl">
                  {project.title}
                </h2>
                <p className="text-center text-lg">
                  {project.description}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
}
