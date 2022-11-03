import { textResizer } from "../../utils/handlers";

const ReviewCard = ({ data }) => {
  return (
    <div>
      <header className="flex gap-2 items-center">
        <div className="w-12 h-12 bg-borderColor rounded-full">
          <img
            src={data.user.profile.url}
            className="rounded-full w-full h-full object-cover"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-md font-medium">{data.user.name}</h1>
          <h1 className="text-sm text-lightTextColor">{data.user.createdAt}</h1>
        </div>
      </header>
      <div className="mt-4">
        <p className="text-blackColor text-md leading-7">
          {textResizer(data.reivew, 210)}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
