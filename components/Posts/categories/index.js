import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { gsap } from "gsap";
import { classNames } from "../../../utils/datePickerUtils";
import CategoriesLoading from "../../Loading/CategoriesLoading";
import { v4 as uuidv4 } from "uuid";

const Categories = ({ data }) => {
  const child = useRef([]);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (!data.loading && data.data.length > 0) {
      if (child && child.current) {
        let tl = gsap.timeline();

        tl.fromTo(
          child.current,
          0.45,
          {
            opacity: 0,
          },
          { opacity: 1, stagger: 0.025 }
        );
      }
    }
  }, [data.data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(false);
      });
    };
  });

  return (
    <div
      className={classNames(
        `${
          scroll && "shadow"
        } z-20 bg-white sticky top-[44px] md:top-[83px] left-0 px-4`
      )}
    >
      <div
        className={classNames(
          `${!scroll ? "pt-[10px]" : ""} w-full xl:container mx-auto bg-white`
        )}
      >
        <div className="flex items-center py-3 gap-4 select-none">
          <ul className="w-full overflow-hidden flex gap-7">
            {data.loading ? (
              <>
                {Array(20)
                  .fill("_")
                  .map(() => (
                    <CategoriesLoading key={uuidv4()} />
                  ))}
              </>
            ) : (
              data.data.slice(0, 18).map((item, i) => (
                <li
                  key={i}
                  ref={(el) => (child.current[i] = el)}
                  className="category-list opacity-0"
                >
                  <Card category={item} index={i} />
                </li>
              ))
            )}
          </ul>
          <button className="btn-normal">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
