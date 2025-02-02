import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container" >
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Find the best plants for your home and garden.</p>
        <button onClick={() => navigate("/shopping")}>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
