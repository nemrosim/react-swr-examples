import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthorizationContext } from "../../context/auth/AuthorizationContextProvider";

export const NavBar: React.FC = () => {

    const {isAuthorized, setIsAuthorized, setToken} = useAuthorizationContext();
    const {pathname} = useLocation();

    console.log("pathname", pathname);

    const onClickHandler = () => {
        setIsAuthorized(!isAuthorized);
        setToken(isAuthorized ? '' : '123');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/' && 'active'}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/users' && 'active'}`} to='/users'>Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/image' && 'active'}`} to="/image">Load image to server</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/load-image' && 'active'}`} to="/load-image">Load image from server</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-success"
                                onClick={onClickHandler}>
                            {isAuthorized ? 'Logout' : 'Login'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
