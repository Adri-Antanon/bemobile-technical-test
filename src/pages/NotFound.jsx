import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="centered column">
    <p>PAGE NOT FOUND!</p>
    <Link className="btn--flat" to="/">
      Back to Shop
    </Link>
  </div>
);

export default NotFound;
