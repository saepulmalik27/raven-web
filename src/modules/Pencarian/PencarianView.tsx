"use client"
import Search from "@/components/ui/search/Search";
import React, { ChangeEvent, useState } from "react";

const PencarianView = () => {
  const [search, setSearch] = useState<string | undefined>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  console.log(search);
  
  return (
    <div className="flex flex-col gap-5 py-7 px-4 md:px-10">
      <div className="text-center ">
        <h1 className="font-bold text-4xl md:text-6xl">
          Hallo, <span className="text-green-500">Malik</span>
        </h1>
        <h2 className="font-bold text-2xl md:text-4xl">
          Kemana Kau Ingin Pergi
        </h2>
      </div>

      <Search value={search} onChange={handleChange} />
    </div>
  );
};

export default PencarianView;
