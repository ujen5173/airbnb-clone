import React, { useContext, useEffect, useState } from "react";
import Heart from "../../public/_svgs/Heart";
import Star from "../../public/_svgs/star";
import Upload from "../../public/_svgs/upload";

const Title = ({ isSaved, listing, addWishlist }) => {
  return (
    <>
      {listing.loading ? (
        <>
          <div className="w-7/12 h-7 mb-2 rounded-md bg-lightBorderColor"></div>
          <div className="w-4/12 h-5 mb-2 rounded-md bg-lightBorderColor"></div>
        </>
      ) : (
        <>
          <div className="text-2xl lg:text-3xl font-medium mb-2">
            {listing.data?.title.slice(0, 1).toUpperCase() +
              listing.data?.title.slice(1, listing.data?.title.length)}
          </div>
          <div className="flex items-center justify-between my-8 md:my-0">
            <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
              <span className="flex gap-1 items-center text-md font-medium">
                <span>
                  <Star />
                </span>
                {listing.data?.rating}
              </span>
              <div className="hidden">·</div>
              <span className="underline text-md font-medium">
                {listing.data?.reviews?.length || 0} reviews
              </span>
              <div className="hidden">·</div>
              <span className="underline text-md font-medium">
                {listing.data?.lt}
              </span>
            </div>
            <div className="gap-4 items-center hidden lg:flex">
              <button className="bg-white hover:bg-borderColor flex items-center gap-2 px-4 py-2 underline rounded-md">
                <Upload />
                <span className="block text-lg font-medium">Share</span>
              </button>
              <button
                onClick={addWishlist}
                className="bg-white hover:bg-borderColor flex items-center gap-2 px-4 py-2 underline rounded-md"
              >
                <Heart
                  css={`h-[23px] w-[23px] stroke-white stroke-[3] ${
                    isSaved ? "fill-[#ff385c]" : "fill-[rgba(0, 0, 0, 0.5)]"
                  }`}
                />
                <span className="block text-lg font-medium">Save</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Title;
