import Link from "next/link";

const WishlistCard = ({ data }) => {
  return (
    <Link href={`/wishlists/${data._id}`}>
      <div className="w-full md:w-[calc(100%/2-11px)] lg:w-[calc(100%/3-1.2rem)] my-6 md:my-0 cursor-pointer">
        {data.listings.length > 0 ? (
          <div className="h-56 mb-3 overflow-hidden rounded-xl w-full flex gap-2">
            {data.listings.length === 1 ? (
              <>
                <div className="w-[calc(100%/2-4px)] h-full bg-gray-200">
                  <img
                    src={data?.listings[0].images[0].url}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 w-[calc(100%/2-6px)] h-full">
                  {data?.listings[0].images.length >= 3 ? (
                    <>
                      <div className="w-full h-[calc(100%/2-4px)] bg-gray-200">
                        <img
                          src={data?.listings[0].images[1].url}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-full h-[calc(100%/2-4px)] bg-gray-200">
                        <img
                          src={data?.listings[0].images[2].url}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-200">
                      <img
                        src={data?.listings[0].images[1].url}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </>
            ) : data.listings.length === 2 ? (
              <>
                <div className="w-[calc(100%/2-4px)] h-full bg-gray-200">
                  <img
                    src={data?.listings[0].images[0].url}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 w-[calc(100%/2-6px)] h-full">
                  {data?.listings[1].images.length >= 2 ? (
                    <>
                      <div className="w-full h-[calc(100%/2-4px)] bg-gray-200">
                        <img
                          src={data?.listings[1].images[0].url}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-full h-[calc(100%/2-4px)] bg-gray-200">
                        <img
                          src={data?.listings[1].images[1].url}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-200">
                      <img
                        src={data?.listings[0].images[1].url}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="w-[calc(100%/2-4px)] h-full bg-gray-200">
                  <img
                    src={data?.listings[0].images[0].url}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 w-[calc(100%/2-6px)] h-full">
                  {data?.listings[1].images.length >= 3 ? (
                    <>
                      <div className="w-full h-[calc(100%/2-4px)] bg-gray-200">
                        <img
                          src={data?.listings[1].images[0].url}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-full h-[calc(100%/2-4px)] bg-gray-200">
                        <img
                          src={data?.listings[2].images[0].url}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-200">
                      <img
                        src={data?.listings[0].images[1].url}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="h-56 mb-3 overflow-hidden rounded-xl w-full flex gap-2">
            <div className="w-[calc(100%/2-4px)] h-full bg-gray-200"></div>
            <div className="flex flex-col gap-2 w-[calc(100%/2-6px)] h-full">
              <div className="w-full h-[calc(100%/2-4px)] bg-gray-200"></div>
              <div className="w-full h-[calc(100%/2-4px)] bg-gray-200"></div>
            </div>
          </div>
        )}
        <h1 className="text-2xl font-semibold">
          {data.name.slice(0, 1).toUpperCase() +
            data.name.slice(1, data.name.length)}
        </h1>
      </div>
    </Link>
  );
};

export default WishlistCard;
