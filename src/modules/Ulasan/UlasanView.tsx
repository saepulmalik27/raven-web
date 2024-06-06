"use client";
import React, { useEffect, useState } from "react";
import TestimonyCard from "./_components/TestimonyCard";
import { chunkArray } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const ratings = [
  {
    _id: "6549e118fc89e5415861e1db",
    rateComment: "Hebat Sekali Ini ges aplikasinya , keren keren",
    applicationRate: "4.5",
    userId: "prakasa.judha",
    name: "prakasa",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e17efc89e5415861e1dd",
    rateComment: "Saya menjadi lebih enak disini, traveling jadi mudah",
    applicationRate: "5",
    userId: "reza.arap",
    name: "reza",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e1c7fc89e5415861e1df",
    rateComment: "kurang nyaman penggunaannya",
    applicationRate: "3",
    userId: "hamzah.faisal",
    name: "Hamzah Faisal",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e5ead098f0218ccfd29f",
    rateComment: "Kurang Bagus gan",
    applicationRate: "4.0",
    userId: "mantap.gan",
    name: "mantap gan",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e5ead098f0218ccfd2a0",
    rateComment: "Cukup Bagus bro",
    applicationRate: "4.5",
    userId: "satisfied.user",
    name: "happy_camper",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e5ead098f0218ccfd2a1",
    rateComment: "Sangat Membantu sekali!",
    applicationRate: "5.0",
    userId: "super.helper",
    name: "grateful_user",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e5ead098f0218ccfd2a2",
    rateComment: "Biasa aja sih",
    applicationRate: "3.0",
    userId: "so-so.user",
    name: "meh_feeling",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e5ead098f0218ccfd2a3",
    rateComment: "Luar biasa bagus!",
    applicationRate: "5.0",
    userId: "amazing.user",
    name: "impressed_user",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e5ead098f0218ccfd2a4",
    rateComment: "Perlu peningkatan",
    applicationRate: "2.5",
    userId: "constructive.feedback",
    name: "helpful_suggestions",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e5ead098f0218ccfd2a5",
    rateComment: "Saya suka sekali!",
    applicationRate: "4.8",
    userId: "very.happy.user",
    name: "delighted_user",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e5ead098f0218ccfd2a6",
    rateComment: "Tidak sesuai harapan",
    applicationRate: "2.0",
    userId: "disappointed.user",
    name: "letdown_user",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e691452c2b1a18f3e1c1",
    rateComment: "Butuh perbaikan besar-besaran",
    applicationRate: "2.0",
    userId: "needs.improvement",
    name: "critical_feedback",
    image: null,
    __v: 0,
  },
  {
    _id: "6549e691452c2b1a18f3e1c2",
    rateComment: "Sederhana dan efektif",
    applicationRate: "4.2",
    userId: "simple.and.effective",
    name: "efficient_user",
    image: null,
    __v: 0,
  },
];

type TDestinationRating = {
  rateComment: string;
  applicationRate: string;
  userId: string;
  name: string;
  image: string | null;
};

const UlasanView = () => {
  const rating = chunkArray(ratings, 5);
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<TDestinationRating[]>(rating[0] || []);
  const [hasMore, setHasMore] = useState<boolean>(rating.length > 1); // Initially true if there's more than one chunk
  const { ref, inView, entry  } = useInView();


  useEffect(() => {
    if (inView && hasMore && entry && entry.intersectionRatio> 0) {
        setCurrentPage((prev) => prev +1)
    }
  },[inView, hasMore, JSON.stringify(entry)])

  useEffect(() => {
    if (currentPage > 1 && currentPage <= rating.length) {
        setData((prevData) => [...prevData, ...rating[currentPage - 1]])
        if (currentPage === rating.length) {
            setHasMore(false)
        }
    }
  }, [currentPage, JSON.stringify(rating)]);

  return (
    <div className="flex flex-col gap-10 py-4">
      <h1
        className="font-bold text-2xl md:text-[40px] text-center"
        data-cy="testimony-header"
      >
        Semua <span className="text-green-500">Testimoni</span> Kami
      </h1>
      <section className="grid px-4 grid-cols-1 md:grid-cols-2 gap-4  ">
        {data.map((item, key) => (
          <TestimonyCard
            name={item.name}
            index={key}
            image={item.image}
            comment={item.rateComment}
            rate={item.applicationRate}
            key={key}
          />
        ))}
      </section>
      {hasMore && <div ref={ref} />}
    </div>
  );
};

export default UlasanView;
