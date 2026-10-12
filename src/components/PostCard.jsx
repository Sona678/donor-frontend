
import { Link } from "react-router-dom";

const PostCard = ({
  $id,
  type,
  image,
  bloodGroup,
  district,
  isAvailable
}) => {
  const link =
    type === "donor"
      ? `/donors/${$id}`
      : `/blood-requests/${$id}`;

  return (
    <Link to={link}>
      <div className="w-full bg-gray-100 rounded-xl p-4">

        <div className="w-full flex justify-center mb-4">
          <img
            src={image}
            alt="Donor"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        <h2>Blood Group: {bloodGroup}</h2>

        <h2>District: {district}</h2>

        <h1
          className={`rounded-lg text-white ${
            isAvailable ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </h1>

      </div>
    </Link>
  );
};

export default PostCard;