import Star from "../../public/_svgs/star";
import ReviewCard from "./ReviewCard";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const Reviews = React.forwardRef(({ data }, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-[50vh] border-y border-darkBorderColor py-8"
    >
      <h1 className="text-xl md:text-2xl mb-4 font-semibold flex items-center gap-1">
        <Star />
        <span>{data?.rating}</span>
        <span> · </span>
        <span>{data?.review}</span>
      </h1>

      <div className="flex flex-wrap gap-0 md:gap-10 mb-10">
        <div className="w-full md:w-[calc(100%/2-1.5rem)]">
          <div className="mb-3 flex items-center justify-between">
            <span>Cleanliness</span>
            <div className="flex gap-2 items-center">
              <div className="w-36 h-1 rounded-full bg-borderColor">
                <span className="w-11/12 bg-blackColor h-1 block rounded-full"></span>
              </div>
              <span>4.9</span>
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span>Communication</span>
            <div className="flex gap-2 items-center">
              <div className="w-36 h-1 rounded-full bg-borderColor">
                <span className="w-11/12 bg-blackColor h-1 block rounded-full"></span>
              </div>
              <span>4.9</span>
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span>Check-in</span>
            <div className="flex gap-2 items-center">
              <div className="w-36 h-1 rounded-full bg-borderColor">
                <span className="w-11/12 bg-blackColor h-1 block rounded-full"></span>
              </div>
              <span>4.9</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[calc(100%/2-1.5rem)]">
          <div className="mb-3 flex items-center justify-between">
            <span>Accuracy</span>
            <div className="flex gap-2 items-center">
              <div className="w-36 h-1 rounded-full bg-borderColor">
                <span className="w-10/12 bg-blackColor h-1 block rounded-full"></span>
              </div>
              <span>4.8</span>
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span>Location</span>
            <div className="flex gap-2 items-center">
              <div className="w-36 h-1 rounded-full bg-borderColor">
                <span className="w-11/12 bg-blackColor h-1 block rounded-full"></span>
              </div>
              <span>4.8</span>
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span>Value</span>
            <div className="flex gap-2 items-center">
              <div className="w-36 h-1 rounded-full bg-borderColor">
                <span className="w-full bg-blackColor h-1 block rounded-full"></span>
              </div>
              <span>4.8</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        {data?.reviews?.map((review) => {
          return (
            <div
              className="my-6 md:my-0 w-full md:w-[calc(100%/2-1.5rem)]"
              key={uuidv4()}
            >
              <ReviewCard data={review} />
            </div>
          );
        })}
      </div>
      <button className="btn-normal mt-8">Show all reviews</button>
    </section>
  );
});

export default Reviews;
