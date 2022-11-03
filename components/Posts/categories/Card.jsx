const Card = ({ category, index }) => {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer w-fit mx-auto">
      <img
        style={{
          filter: index === 0 ? "contrast(1)" : "contrast(calc(13 / 44))",
        }}
        className="w-6 h-6"
        src={category.image}
        alt={category.name}
      />

      <span className="text-lightTextColor text-xs whitespace-nowrap mt-2">
        {category.name}
      </span>
    </div>
  );
};

export default Card;
