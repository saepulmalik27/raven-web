import Image from "next/image";
type TExploreTours = {
    image : string
    name : string
    description : string
}

const SectionExploreTempatLainya : React.FC<{tours : TExploreTours[]}> = ({tours}) => {
    return (
      <section>
        <h5 className="title-5 text-center">
          <span className="text-green-500">Explore</span> Tempat Lainya
        </h5>
        <div
          data-cy="top-5-tour-container"
          className="flex bg-[#FAFAFA] flex-row items-center md:justify-center gap-14 px-4 py-10 md:py-16 overflow-x-scroll"
        >
          {tours.map((tour, key) => (
            <div
              data-cy={`header-top-tour-${key}`}
              key={key}
              className="h-fit w-40 flex flex-col gap-3 flex-shrink-0"
            >
              <Image
                src={tour.image}
                width={160}
                height={160}
                className="aspect-square  rounded-lg flex-shrink-0"
                alt={tour.name}
              />
              <div className="text-center flex flex-col gap-1">
                <h6 className="font-bold text-base ">{tour.name}</h6>
                <p className="line-clamp-3 text-sm md:text-base">{tour.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default SectionExploreTempatLainya