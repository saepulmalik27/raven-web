const SectionHero = () => {
    return (
      <section
        data-cy="section-hero"
        className=" px-4 md:px-10 flex flex-col align-bottom justify-end aspect-[2.72] md:h-[480px] bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="text-white">
          <h1 className="font-bold text-base md:text-4xl">Raven</h1>
          <p className="text-sm md:text-2xl">Travel Solution</p>
        </div>
      </section>
    );
  };

  export default SectionHero