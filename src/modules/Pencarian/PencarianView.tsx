"use client";
import Search from "@/components/ui/search/Search";
import { formatRupiah } from "@/lib/utils";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const tours = [
  {
    _id: "6549a23162433e1d401769d9",
    name: "Antartica",
    slug: "Indahnya dunia",
    rating: 2.7,
    price: 9329470,
    description:
      "Dolor repudiandae error qui incidunt quidem. Fugiat amet reiciendis culpa in autem est. Vel id in libero nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "6549a23162433e1d401769dc",
    name: "Canada",
    slug: "Jangan sampai ketinggalan",
    rating: 3.9,
    price: 15398071,
    description:
      "Incidunt qui omnis fuga maiores. Fugiat ratione dolorem sit quae fugiat. Qui enim corrupti quam ut dolorum recusandae quae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "6549a23162433e1d401769dd",
    name: "Germany",
    slug: "Makan Hotdog",
    rating: 4.2,
    price: 12581785,
    description:
      "Inventore incidunt ratione labore doloribus debitis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "6549a23162433e1d401769da",
    name: "India",
    slug: "Dunia Hebat",
    rating: 4.5,
    price: 7836417,
    description:
      "Sit dolorum nulla nemo quisquam repellendus. Temporibus eos quam aut fugiat illo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "6549a23162433e1d401769db",
    name: "Italy",
    slug: "Ayo Ramaikan",
    rating: 2.5,
    price: 14448028,
    description:
      "Reprehenderit officiis quisquam deleniti. Qui maxime id perspiciatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1554598284-6e4f034a35a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "6549a0a465ac3d647c70d512",
    name: "Brazil",
    slug: "Jangan-sampai-ketinggalan",
    rating: 3.1,
    price: 10581679,
    description:
      "Rerum aperiam nulla minima sapiente dolor. Accusamus id atque perspiciatis voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://www.https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/image3.jpg",
    __v: 0,
  },
  {
    _id: "6549a0a465ac3d647c70d514",
    name: "Netherlands",
    slug: "Pesona-Nurani",
    rating: 1.8,
    price: 13753938,
    description:
      "Eos in voluptatem reprehenderit. Est minima voluptates voluptates. Sed sunt quis error ab et veniam rerum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "6549a0a465ac3d647c70d513",
    name: "Russia",
    slug: "Pesona-dunia",
    rating: 1.4,
    price: 15044628,
    description:
      "Cupiditate ipsam omnis corrupti consectetur. Quia enim amet dolor et sit. Soluta minus et aut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "6549a0a465ac3d647c70d510",
    name: "Vietnam",
    slug: "Indahnya-dunia",
    rating: 2.7,
    price: 9329470,
    description:
      "Dolor repudiandae error qui incidunt quidem. Fugiat amet reiciendis culpa in autem est. Vel id in libero nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "65499711813f4640fcb765f7",
    name: "Raja Ampat",
    slug: "Berenang bersama hiu paus",
    rating: 5,
    price: 10000000,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "6549961a43fd470e6cffc802",
    name: "Bali",
    slug: "Pulau Dewata",
    rating: 5,
    price: 3000000,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "65499578e046063ee8a1951d",
    name: "Jogjakarta",
    slug: "Megahnya Dunia",
    rating: 5,
    price: 2000000,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
  {
    _id: "654994ffc89ad6643c49739a",
    name: "Maldives",
    slug: "Surganya Dunia!",
    rating: 4.5,
    price: 15000000,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    __v: 0,
  },
];

const PencarianView = () => {
  const [search, setSearch] = useState<string | undefined>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  console.log(search);

  return (
    <div className="flex flex-col items-center gap-5 md:gap-10 py-7 px-4 md:px-10 m-auto">
      <section className="text-center">
        <h1 className="font-bold text-4xl md:text-6xl" data-cy="h-seacrh-page">
          Hallo, <span className="text-green-500">Malik</span>
        </h1>
        <h2 className="font-bold text-2xl md:text-4xl">
          Kemana Kau Ingin Pergi
        </h2>
      </section>
      <section className="max-w-[500px] w-full">
        <Search
          attribute="input-search-tour"
          value={search}
          onChange={handleChange}
        />
      </section>

      <section>
        <h5 className="title-5">Hasil Pencarian mu:</h5>
        <div className="flex flex-col gap-5">
          {tours.map((tour, key) => (
            <div key={key} className="flex flex-col md:flex-row gap-6 md:gap-16">
              <div className="flex-shrink-0 flex flex-row items-center justify-center">
                <Image
                  src={tour.image}
                  width={242}
                  height={198}
                  alt={tour.name}
                  className="aspect-square rounded-md"
                  data-cy={`tour-image-${key}`}
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h5 className="title-5" data-cy={`tour-title-${key}`}>
                  {tour.name},{" "}
                  <span data-cy={`tour-sluge-${key}`} className="text-green-500">{tour.slug}</span>{" "}
                </h5>
                <p data-cy={`tour-desc-${key}`}>{tour.description}</p>
                <p className="font-bold mt-4" data-cy={`tour-price-${key}`}>
                  Mulai dari : {formatRupiah(tour.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PencarianView;
