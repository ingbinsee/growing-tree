import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-primary/80 py-4 flex justify-center">
      <Link to="/"><img src="logo.png" alt="로고" /></Link>
    </header>
  );
}

export default Header;
