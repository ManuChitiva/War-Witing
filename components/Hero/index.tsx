"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Explora las nuevas zonas de War Within con total fluidez
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Entropiux{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Wow
                </span>
              </h1>
              <p>
                Entropiux es pionero en traerte World of Warcraft: The War
                Within como ningún otro. Somos el primer servidor privado en
                lanzar esta expansión, fruto del esfuerzo conjunto de un equipo
                de desarrolladores apasionados que han trabajado intensamente
                para hacerlo realidad.
              </p>

              <div className="mt-10">
                <div>
                  <div className="flex flex-wrap gap-5">
                    <a
                      href="/auth/signup"
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Registrarme
                    </a>
                  </div>
                </div>

                <p className="mt-5 text-black dark:text-white">
                  🛡️ ¡Aventurero, tu destino te espera! Únete
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="https://static.wixstatic.com/media/5dd8a0_1eed58868d4b48879f638eab1ecf50ab~mv2.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden rounded-md   shadow-solid-l dark:block"
                    src="https://static.wixstatic.com/media/5dd8a0_ff34c4c3e786417cabf51033ba7ba3c7~mv2.avif"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
