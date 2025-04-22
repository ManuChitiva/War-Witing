import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EntropiuX The War Within - Blog Details",
  // other metadata
  description: "EntropiuX The War Within - Blog Details",
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                {/* Imagen principal */}
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src="https://static.wixstatic.com/media/5dd8a0_53cedc390ba6483dbcc8d8badd26c384~mv2.avif"
                      alt="Entropiux instalación"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                {/* Título y metadatos */}
                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  🛠 GUÍA ALTERNATIVA DE INSTALACIÓN – ENTROPIUX WOW
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author:</span>{" "}
                    Luis Hernandez
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On:
                    </span>{" "}
                    Abril 20, 2025
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>{" "}
                    Gaming
                  </li>
                </ul>

                {/* Contenido de la guía */}
                <div className="blog-details space-y-6 text-base leading-relaxed">
                  <h4 className="text-2xl font-bold text-primary">
                    Esta guía está pensada como alternativa si tienes problemas
                    con la instalación normal o simplemente prefieres configurar
                    el juego manualmente.
                  </h4>

                  {/* Paso 1 */}
                  <div>
                    <h3 className="text-xl font-semibold">
                      ✅ 1. Descarga el cliente oficial de World of Warcraft
                    </h3>
                    <p>
                      Descarga el cliente oficial de WoW Retail desde Blizzard:
                      <a
                        href="https://worldofwarcraft.blizzard.com/"
                        className="ml-2 text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enlace oficial
                      </a>
                    </p>
                    <p className="mt-2">
                      Aún estamos trabajando en nuestro propio launcher oficial
                      para facilitar la instalación en el futuro.
                    </p>
                  </div>

                  {/* Paso 2 */}
                  <div>
                    <h3 className="text-xl font-semibold">
                      🔄 2. Configura el juego para conectarte a nuestro
                      servidor
                    </h3>
                    <p>Dirígete a la carpeta donde se instaló WoW Retail:</p>
                    <pre className="mt-2 rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                      C:\Program Files (x86)\World of Warcraft\_retail_
                    </pre>
                    <p className="mt-4">
                      Descarga el Arctium Game Launcher desde:
                    </p>
                    <a
                      href="https://arctium.app/launcher/Arctium%20Game%20Launcher%201.1.2.129+dd0a50f237c0db03b758346f411da6a82052dc65.zip"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Descargar Arctium Launcher
                    </a>
                    <p className="mt-2">
                      Extrae el .zip y guarda el archivo `.exe` dentro de la
                      carpeta <strong>_retail_</strong>.
                    </p>
                  </div>

                  {/* Paso 3 */}
                  <div>
                    <h3 className="text-xl font-semibold">
                      🧾 3. Modifica el archivo de configuración
                    </h3>
                    <p>
                      Abre la carpeta <code>WTF</code> ubicada en:
                    </p>
                    <pre className="mt-2 rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                      C:\Program Files (x86)\World of Warcraft\_retail_\WTF
                    </pre>
                    <p className="mt-2">
                      Edita el archivo <code>Config.wtf</code> y reemplaza esta
                      línea:
                    </p>
                    <pre className="mt-2 rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                      SET portal "US"
                    </pre>
                    <p className="mt-2">Por esta otra:</p>
                    <pre className="rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                      SET portal "api.entropiux.com"
                    </pre>
                  </div>

                  {/* Paso 4 */}
                  <div>
                    <h3 className="text-xl font-semibold">
                      🕹 4. Ejecuta el juego
                    </h3>
                    <p>
                      Abre el juego usando el <strong>Arctium Launcher</strong>.
                      No uses el launcher oficial de Blizzard.
                    </p>
                  </div>

                  {/* Soporte */}
                  <div>
                    <h3 className="text-xl font-semibold">
                      💬 ¿Problemas o dudas?
                    </h3>
                    <p>
                      Entra al canal <code>#soporte</code> en nuestro Discord.
                      ¡Estamos aquí para ayudarte!
                    </p>
                  </div>

                  {/* Imágenes */}
                  <div className="flex flex-wrap justify-center gap-5">
                    <Image
                      src="https://static.wixstatic.com/media/5dd8a0_05718c19773e43caaca37e083eee3a02~mv2.jpg"
                      width={350}
                      height={200}
                      alt="Pantalla del lanzador"
                    />
                    <Image
                      src="https://static.wixstatic.com/media/5dd8a0_df45c50b0f594ab282eb9d81400bf306~mv2.avif"
                      width={350}
                      height={200}
                      alt="Vista previa del juego"
                    />
                  </div>

                  {/* Alternativa rápida */}
                  <div>
                    <h3 className="text-xl font-semibold">
                      🔁 Alternativa (si ya tienes WoW instalado)
                    </h3>
                    <ul className="list-inside list-disc space-y-2">
                      <li>
                        Copia la carpeta <code>WTF</code> del Minicliente.
                      </li>
                      <li>
                        Reemplaza la carpeta <code>WTF</code> en tu instalación
                        de WoW.
                      </li>
                      <li>
                        Ejecuta el <code>.exe</code> del Minicliente.
                      </li>
                    </ul>
                    <p className="mt-2">
                      🚪 <strong>Conexión automática:</strong> El portal{" "}
                      <code>api.entropiux.com</code> ya viene configurado.
                    </p>
                  </div>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
