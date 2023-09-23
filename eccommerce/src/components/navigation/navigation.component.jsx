import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">navigation</div>
      <Link className="logo-container" to="/">
        <div>log</div>
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
