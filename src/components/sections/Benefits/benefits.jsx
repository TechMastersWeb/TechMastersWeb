const Beneficios = () => {
  return (
    <section className="flex flex-col items-center ">
      <div className=" flex m-auto p-[50px] md:w-full flex-wrap gap-4">
        <div className="w-fit h-fit p-4  flex flex-col items-center border-2 justify-center px-6 rounded-l-lg">
          <i class="bx bx-world"></i>
          <h2 className="my-4 font-bold">Hosting confiable y seguro</h2>
          <span className="text-[#464545] italic">
            Aloja tu sitio web con confianza y seguridad
          </span>
          <div className="flex p-2 ">
            <p className="text-center">
              Te ofrecemos servicios de hosting confiables y seguros para tus
              páginas web. Con servidores de alto rendimiento y medidas de
              seguridad avanzadas, puedes alojar tu sitio con tranquilidad,
              garantizando un tiempo de actividad óptimo y protección contra
              amenazas cibernéticas.
            </p>
          </div>
        </div>

        <div className="w-fit h-fit p-4  flex flex-col items-center border-2 justify-center px-6 rounded-l-lg">
          <i class="bx bx-paint"></i>{" "}
          <h2 className="my-4 font-bold">Diseño profesional y personalizado</h2>
          <span className="text-[#464545] italic">
            Crea una presencia en línea única y atractiva
          </span>
          <div className="flex p-2 ">
            <p className="text-center">
              Nuestro equipo de diseñadores profesionales se encarga de crear
              páginas web personalizadas y visualmente impactantes. Ya sea que
              necesites una página web para tu negocio, un blog o un portafolio,
              nos aseguraremos de que el diseño sea profesional, atractivo.
            </p>
          </div>
        </div>

        <div className="w-fit h-fit p-4  flex flex-col items-center border-2 justify-center px-6 rounded-l-lg">
          <i class="bx bx-laptop"></i>{" "}
          <h2 className="my-4 font-bold">
            Mejora tu presencia en línea y visibilidad
          </h2>
          <span className="text-[#464545] italic">
            Atrae a más clientes y aumenta tu alcance
          </span>
          <div className="flex p-2 ">
            <p className="text-center">
              Con nosotros, puedes mejorar tu presencia en línea y aumentar tu
              visibilidad en internet. Un diseño web profesional y una página
              web bien optimizada pueden ayudarte a destacar entre la
              competencia y atraer a más clientes potenciales. Además, al
              ofrecer un hosting confiable, garantizamos que tu sitio web esté
              siempre disponible.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
