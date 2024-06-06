import Image from "next/image";
type TSectionTujuanBaru = {
    image: string;
    name: string;
    slug: string;
    desription: string;
  };
const SectionTujuanBaru: React.FC<TSectionTujuanBaru> = ({
    image,
    name,
    slug,
    desription,
  }) => {
    return (
      <section
        role="section-tujuan-baru"
        className="flex flex-col md:flex-row gap-5 px-4 md:px-10"
      >
        <div className="flex-shrink-0 rounded-[36px]  overflow-hidden">
          <Image
            src={image}
            width={440}
            height={318}
            alt={name}
            className="aspect-[1.38]"
          />
        </div>
  
        <div className="flex flex-col gap-3">
          <h5 data-cy="header-new-tour" className="title-5">
            Tujuan <span className="text-green-500">Baru</span>!
          </h5>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-base">
              <span data-cy="top-tour-name">{name}</span>,{" "}
              <span className="text-green-500">{slug}</span>
            </h5>
            <p className="text-sm md:text-base text-justify">{desription}</p>
          </div>
        </div>
      </section>
    );
  };

  export default SectionTujuanBaru