import mobile from "./mobile.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="homeTextPart">
        <h1>Getting credit has never been easier </h1>
        <ul>
          <li>Qualify for loans to buy goods and services instantly.</li>
          <li>
            Spend your credit with merchants including 7-Eleven and Smart.
          </li>
          <li>
            {" "}
            Repay with electronic wallets or over-the-counter at any 7-Eleven in
            the Philippines.
          </li>
          <li> Increase your credit limit with good repayments.</li>
        </ul>
        <button>Get the Plentina app</button>
      </div>
      <div className="mobileImage">
        <img src={mobile} alt="Android Phone" />
      </div>
    </div>
  );
};

export default Home;
