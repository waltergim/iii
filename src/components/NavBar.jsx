import { NavLink } from "react-router-dom";
import logo from "../img/WhatsApp Image 2024-09-09 at 20.42.36.jpeg";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="container-fluid">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending nav-link"
                  : isActive
                  ? "active nav-link"
                  : "nav-link"
              }
            >
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Imaginacion de impresiones
            </NavLink>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/Nosotros"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending nav-link"
                      : isActive
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contacto"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending nav-link"
                      : isActive
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Trabajos"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending nav-link"
                      : isActive
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  Trabajos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
