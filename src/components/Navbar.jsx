import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
      <Link to="/" className="navbar-brand mx-auto">VeggieDelight</Link>
      </div>
    </nav>
  );
}

export default Navbar