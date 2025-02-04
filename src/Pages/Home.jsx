import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container" >
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Paradise Nursery is a premier destination for plant lovers, offering a diverse selection of high-quality indoor and outdoor plants. Our mission is to bring nature closer to you by providing expertly nurtured plants that enhance your home and garden. With a passion for greenery and sustainability, we ensure that every plant is carefully selected and delivered with the utmost care. Whether you're a seasoned gardener or just starting, Paradise Nursery is here to help you create a lush, vibrant space that thrives.</p>
        <button onClick={() => navigate("/shopping")}>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
