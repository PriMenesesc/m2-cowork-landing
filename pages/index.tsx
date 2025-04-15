import Head from "next/head";
import Image from "next/image";
import { FeatureCard } from "../components/FeatureCard";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>M2 Cowork & Hub</title>
        <meta name="description" content="Estás a un M2 de tu próximo negocio" />
      </Head>

      <main className="bg-white text-black">
        <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-4">
          <div className="absolute inset-0 z-0">
            <Image
              src="/neon-hero.jpg"
              alt="Hero M2"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-40" />
          </div>
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Estás a un <span className="text-primary">M2</span> de tu próximo negocio
            </h1>
            <p className="mt-4 text-white text-lg max-w-xl mx-auto">
              El primer cowork inmobiliario de Chile. Tecnología, comunidad y acción.
            </p>
            <a
              href="https://wa.me/56932704708"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-primary text-black px-6 py-3 rounded font-semibold hover:bg-green-400 transition"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>

        <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">¿Qué incluye M2?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="🚀"
              title="Stock Inmobiliario en Tiempo Real"
              description="Disponible con membresía Pro. Explora propiedades, comparte fichas y agenda visitas desde tu panel."
            />
            <FeatureCard
              icon="🤝"
              title="Networking y Comunidad"
              description="Conecta con corredores, bancos, inmobiliarias y proveedores en un entorno colaborativo."
            />
            <FeatureCard
              icon="📆"
              title="Eventos y Capacitaciones"
              description="Workshops, mentorías y charlas con líderes del rubro inmobiliario."
            />
            <FeatureCard
              icon="🏦"
              title="Bancos en Línea"
              description="Gestiona aprobaciones de créditos hipotecarios directamente desde el cowork."
            />
          </div>
        </section>

        <Testimonials />
      </main>
    </>
  );
}
