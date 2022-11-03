import React, { useContext, useEffect, useState } from "react";
import useWishlist from "../../../hooks/useWishlist";
import { Context } from "../../../pages/_app";
import Heart from "../../../public/_svgs/Heart";
import Star from "../../../public/_svgs/star";
import { textResizer } from "../../../utils/handlers";

const Card = ({ post }) => {
  const { wishlist } = useContext(Context);
  const [isSaved, changeWishlist] = useWishlist(post, wishlist);

  return (
    <div
      className="w-full cursor-pointer relative"
      title={post.lt.slice(0, 1).toUpperCase() + post.lt.slice(1, -1)}
    >
      <div className="absolute top-6 right-6 z-10" onClick={changeWishlist}>
        <Heart
          css={`h-[23px] w-[23px] stroke-white stroke-[3] ${
            isSaved ? "fill-[#ff385c]" : "fill-[rgba(0, 0, 0, 0.5)]"
          }`}
        />
      </div>
      <a className="block" href={`/listings/${post._id}`} target="_blank">
        <div className="min-h-[250px] h-[calc(50vw/5+20px)] relative">
          <img
            src={post.images[0].url}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-md font-medium mb-2 flex justify-between">
            <span>
              {textResizer(
                post.lt.slice(0, 1).toUpperCase() + post.lt.slice(1, -1),
                30
              )}
            </span>
            <span className="flex gap-1 font-normal items-center h-fit">
              <Star />
              {post.rating}
            </span>
          </h1>
          <span className="text-sm font-normal flex gap-1 items-center">
            <span className="font-semibold">{post.price}</span> night
          </span>
        </div>
      </a>
    </div>
  );
};

export default Card;
