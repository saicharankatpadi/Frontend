import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, photoUrl, age, gender, about, coinsEarned, donationAmount } = user;

  const handleRequestStatus = async (status, userId) => {
    try {
      await axios.post(`${BASE_URL}/request/send/${status}/${userId}`, {}, { withCredentials: true });
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("Error updating request status:", err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="User" width="200px" height="200px" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        <p>{`${age} ${gender}`}</p>
        <p>{about}</p>
        <p><strong>Coins Earned:</strong> {coinsEarned}</p>
        <p><strong>Donation Amount:</strong> ${donationAmount.toFixed(2)}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={() => handleRequestStatus("interested", _id)}>Interested</button>
          <button className="btn btn-secondary" onClick={() => handleRequestStatus("ignored", _id)}>Ignored</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
