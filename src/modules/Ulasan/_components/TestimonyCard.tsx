"use client";
import Image from "next/image";
import React, { FC } from "react";
import StarRating from "./StarRating";
import { getInitialName } from "@/lib/utils";

type TTestimonyCard = {
  name: string;
  image: string | null;
  comment: string;
  rate: string;
  index: number;
};

const TestimonyCard: FC<TTestimonyCard> = ({
  image,
  name,
  rate,
  index,
  comment,
}) => {
  const handleErrorImage = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // To prevent infinite loop in case the default image also fails to load
    target.src = "/images/default_avatar.png";
    target.srcset = "/images/default_avatar.png";
  };

  return (
    <div className="flex flex-row gap-5 border border-jet-black-300 py-4 px-5 rounded-xl">
      <div className="flex flex-col justify-center items-center">
        {image ? (
          <Image
            width={80}
            height={80}
            src={image}
            alt={name}
            data-cy={`t-image-${index}`}
            onError={handleErrorImage}
          />
        ) : (
          <div className="rounded-full w-20 h-20 aspect-square flex items-center justify-center text-2xl border border-jet-black-300">{getInitialName(name)}</div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h5 className="title-5 capitalize" data-cy={`t-name-${index}`}>
            {name}
          </h5>
          <p className="text-[11px]" data-cy={`t-comment-${index}`}>
            {comment}
          </p>
        </div>
        <StarRating rating={Number(rate)} maxRating={5} index={index} />
      </div>
    </div>
  );
};

export default TestimonyCard;
