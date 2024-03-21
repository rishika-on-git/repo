import "./ExploreCard.css";
import { Link } from "react-router-dom";

const ExploreCard = () => {
  return (
    <>
    <div className="exploresection">
      <div className="exploreheading">
      <h1
            className="mt-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-5xl"
          >
         Mini Events
    
            {/* <span className="sm:block"> Increase Conversion. </span> */}
          </h1>
      </div>
      <div className="explore">
        <div className="card">
            <div className="content">
              <h2 className="title">CAPTURE THE FLAG</h2>
            </div>
        </div>

        <div className="card">
            <div className="content">
              <h2 className="title">TREASURE OF TOWN</h2>
            </div>
        </div>

        <div className="card">
            <div className="content">
              <h2 className="title">SPEAKER SESSION</h2>
            </div>
        </div>

        <div className="card">
          <Link to="/register">
            <div className="content">
              <h2 className="title">REGISTER</h2>
            </div>
          </Link>
        </div>
    </div>
    </div>
    </>
  );
};

export default ExploreCard;
