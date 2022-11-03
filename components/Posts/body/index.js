import gsap from "gsap";
import { useEffect, useRef } from "react";
import ListingsLoading from "../../Loading/ListingsLoading";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

const PostBody = ({ data }) => {
  const child = useRef([]);

  useEffect(() => {
    if (!data.loading && data.data.length > 0) {
      if (child && child.current) {
        let tl = gsap.timeline();

        tl.fromTo(
          child.current,
          {
            opacity: 0,
          },
          { opacity: 1, stagger: 0.005 }
        );
      }
    }
  }, [data.data]);

  return (
    <div>
      <ul className="flex gap-6 flex-wrap px-4">
        {data.loading
          ? Array(50)
              .fill("_")
              .map(() => <ListingsLoading key={uuidv4()} />)
          : data.data.map((post, i) => (
              <li
                key={post._id}
                className="w-full sm:w-[calc(100%/2-15px)] lg:w-[calc(100%/3-25px)] xl:w-[calc(100%/4-1.2rem)] 2xl:w-[calc(100%/5-1.2rem)] opacity-0"
                ref={(el) => (child.current[i] = el)}
              >
                <Card post={post} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default PostBody;
