"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-30 z-[-1] hidden h-full w-full  object-cover dark:block"
        >
          <source
            src="https://video.wixstatic.com/video/5dd8a0_4509e7b39c1c4c7a95080817f19f8af4/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-30 z-[-1] h-full w-full object-cover dark:hidden"
        >
          <source
            src="https://video.wixstatic.com/video/5dd8a0_8dfd024672e24e748a73b1773ec52ec5/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 ">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-white dark:text-white">
                🔥 Explora las nuevas zonas de War Within con total fluidez
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-white dark:text-white xl:text-hero ">
                EntropiuX The War{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full  before:bg-titlebg dark:before:bg-primary ">
                  Within
                </span>
              </h1>
              <p className="body-color text- mb-8 max-w-[500px] text-base font-medium text-gray-50  dark:text-gray-300">
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
                      className="flex rounded-full bg-titlebg px-7.5 py-2.5 font-bold text-black duration-300 ease-in-out hover:bg-blackho dark:bg-primary dark:text-white dark:hover:bg-primaryho"
                    >
                      Registrarme
                    </a>
                  </div>
                </div>

                <p className="mt-5 text-white dark:text-white">
                  🛡️ ¡Aventurero, tu destino te espera! Únete
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
