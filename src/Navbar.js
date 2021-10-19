import logo from "./logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo"></img>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/faq">FAQs</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
        <a href="/more">More</a>
      </div>
    </nav>
  );
};

export default Navbar;
