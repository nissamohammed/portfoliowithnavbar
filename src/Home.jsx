import { Link } from "react-router-dom";
import Header from "./components/Header";
import './home.css';

function Home() {
  return (
    <>
      <Header />
      <div
        className="homediv d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: '95vh',
         /* background: 'linear-gradient(to right, #ff7e5f,rgb(18, 29, 50))', */// Gradient background
          color: '#fff', // White text color for contrast
        }}
      >
        <div className="content text-dark">
          <h1 className="fw-bold display-4">Hello!!</h1>
          <h1 className="fw-bold display-4">
            I am <span className="text-danger">NISSA MOHAMMED</span>
          </h1>
          <h2 className="mt-3">A Passionate Front-End Developer</h2>
          <Link to="/myworks">
            <button className="btn btn-outline-dark rounded-5 px-4 py-2 fs-5 mt-4">
              My Works
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
