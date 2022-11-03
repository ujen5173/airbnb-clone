import React, { useEffect, useState } from "react";
import Heart from "../../../public/_svgs/Heart";
import LeftArrow2 from "../../../public/_svgs/LeftArrow2";
import RightArrow from "../../../public/_svgs/RightArrow";
import Times from "../../../public/_svgs/Times";

const ImageViewer = ({ selectedImage, isSaved, images, setImageViewer }) => {
  const [counter, setCounter] = useState(selectedImage);
  const [currrentImage, setCurrentImage] = useState(images[selectedImage]);

  useEffect(() => {
    setCurrentImage(images[counter]);
  }, [counter]);

  return (
    <section className="fixed top-0 left-0 w-full h-full z-40 bg-black p-10 select-none">
      <header className="flex items-center justify-between">
        <button
          onClick={() => setImageViewer(false)}
          className="bg-black text-white hover:bg-gray-600 flex items-center justify-center gap-2 font-semibold px-4 py-2 rounded-md"
        >
          <Times />
          <span className="tracking-2">Close</span>
        </button>
        <p className="text-md text-white font-medium">
          {counter + 1} / {images.length}
        </p>
        <button
          type="button"
          className="bg-black text-white hover:bg-gray-600 flex items-center justify-center gap-2 font-semibold px-4 py-2 rounded-md"
        >
          <Heart
            css={`h-[20px] w-[20px] stroke-white stroke-[3] ${
              isSaved ? "fill-[#ff385c]" : "fill-[rgba(0, 0, 0, 0.5)]"
            }`}
          />{" "}
          <span className="tracking-2">Save</span>
        </button>
      </header>

      <main className="pb-20 w-full h-full flex items-center justity-center">
        <div className="w-8/12 rounded-md mx-auto h-full max-h-[calc(100vh-200px)]">
          <img
            src={currrentImage?.url}
            className="rounded-md w-full h-full object-cover "
            alt=""
          />
        </div>
        {counter >= 1 && (
          <button
            onClick={() => setCounter(counter >= 1 ? counter - 1 : counter)}
            type="button"
            className="hover:bg-gray-400 hover:bg-opacity-40 rounded-full absolute top-1/2 -translate-y-1/2 left-6 flex items-center justify-center w-10 h-10 border border-borderColor"
          >
            <LeftArrow2 color={"white"} />
          </button>
        )}
        {counter < images.length - 1 && (
          <button
            onClick={() =>
              setCounter(counter < images.length - 1 ? counter + 1 : counter)
            }
            type="button"
            className="hover:bg-gray-400 hover:bg-opacity-40 rounded-full absolute top-1/2 -translate-y-1/2 right-6 flex items-center justify-center w-10 h-10 border border-borderColor"
          >
            <RightArrow color={"white"} />
          </button>
        )}
      </main>
    </section>
  );
};

export default ImageViewer;
