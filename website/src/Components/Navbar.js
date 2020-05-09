import React from 'react';

function Navbar() {

    return (
    <nav className="navbar navbar-expand-lg navbar-container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="teste">ONG's</a>
            </li>
            <li className="nav-item dropdown">
              <a href=""></a>
            </li>
            <li>

            </li>
          
            <li className="nav-item">
              <a className="nav-link " href="#"> Doar </a>
            </li>
          </ul>
        </div>
    
    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Cadatro ONG's</button>
</nav>
    );
    
}

export default Navbar
