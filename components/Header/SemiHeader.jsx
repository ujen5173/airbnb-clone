const HeaderSelection = ({ headerSearch }) => {
  return (
    <div
      className={`${
        headerSearch ? "semi_header_active" : "semi_header_inactive"
      }`}
    >
      <div className="flex h-full gap-4 mx-auto">
        <button className="p-2 text-sm tex-gray-700 border-b-2 border-gray-600">
          Stay
        </button>
        <button className="p-2 text-sm tex-gray-700">Experiences</button>
        <button className="p-2 text-sm tex-gray-700">Online Experiences</button>
      </div>
    </div>
  );
};

export default HeaderSelection;
