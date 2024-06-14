import MyIMG from "./images/LOGO.png";
export default function Navbar() {
  return (
    <nav>
      <img src={MyIMG} alt="not found" />
      <a href="sell">Sell</a>
      <a href="maketplace">Marketplace</a>
      <a href="develop">Develop</a>
      <a href="resources">Resources</a>
      <button>Login</button>
      <button>Get Started</button>
    </nav>
  );
}
