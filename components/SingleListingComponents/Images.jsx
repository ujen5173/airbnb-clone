import React from "react";
import Grid from "../../public/_svgs/Grid";
import { v4 as uuidv4 } from "uuid";

const Images = ({ setSelectedImage, listing, setImageViewer }) => {
  return (
    <div className="flex gap-2 w-full h-full">
      {listing.loading ? (
        <div className="w-1/2 h-[calc(35vh)] min-h-[500px] bg-lightBorderColor rounded-md"></div>
      ) : (
        <div
          className={`${
            listing.data?.images.length >= 4 ? "w-6/12" : "w-8/12"
          } `}
        >
          <div
            className="image-cover h-full w-full"
            onClick={() => {
              setImageViewer(true);
              setSelectedImage(0);
            }}
          >
            {listing.data?.images?.length > 0 && (
              <img
                src={listing.data?.images[0]?.url}
                className="h-full w-full object-cover"
                alt=""
              />
            )}
          </div>
        </div>
      )}
      {listing.data?.images?.length >= 3 ? (
        <div className="flex-1 flex flex-col gap-2">
          {[...listing.data?.images]?.splice(1, 2).map((e, i) => (
            <div
              className="image-cover h-[calc(100%/2-4px)] w-full"
              key={uuidv4()}
              onClick={() => {
                setImageViewer(true);
                setSelectedImage(i++);
              }}
            >
              {listing.data?.images?.length > 0 && (
                <img
                  src={e.url}
                  className="h-full w-full object-cover"
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        !listing.loading &&
        listing.data?.images?.length >= 2 && (
          <div
            className="image-cover h-full w-5/12"
            key={uuidv4()}
            onClick={() => {
              setImageViewer(true);
              setSelectedImage(i++);
            }}
          >
            <img
              src={listing.data?.images[1].url}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        )
      )}
      {listing.data?.images?.length >= 4 && (
        <div className="flex-1 flex flex-col gap-2">
          {[...listing.data?.images]?.splice(3, 4).map((e, i) => (
            <div
              className="image-cover h-[calc(100%/2-4px)] w-full"
              key={uuidv4()}
              onClick={() => {
                setImageViewer(true);
                setSelectedImage(i++);
              }}
            >
              {listing.data?.images?.length > 0 && (
                <img
                  src={e.url}
                  className="h-full w-full object-cover"
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => {
          setImageViewer(true);
          setSelectedImage(0);
        }}
        className="flex items-center justify-center gap-2 absolute bottom-4 right-4 rounded-md font-medium border darkBorderColor bg-lightBorderColor text-blackColor px-3 py-1"
      >
        <span>
          <Grid />
        </span>
        <span>Show all photos</span>
      </button>
    </div>
  );
};

export default Images;
