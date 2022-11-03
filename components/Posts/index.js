import axios from "axios";
import { useEffect, useState } from "react";
import PostBody from "./body";
import Categories from "./categories";

const Posts = () => {
  const [categories, setCategories] = useState({
    loading: true,
    data: [],
  });

  const [listings, setListings] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    (async () => {
      setListings({ loading: true, data: [] });
      setCategories({ loading: true, data: [] });
      const { data } = await axios("/api/listings");
      setListings({ loading: false, data: data.data });
      const { data: categoryData } = await axios("/api/categories");
      setCategories({ loading: false, data: categoryData.data });
    })();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Categories data={categories} />
      <div className="w-full xl:container mx-auto py-2 lg:py-8">
        <PostBody data={listings} />
      </div>
    </div>
  );
};

export default Posts;
