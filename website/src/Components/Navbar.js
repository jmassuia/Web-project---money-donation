import React from 'react';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar- light-blue lighten-5">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="teste">ONG's</a>
      </li>
      <li className="nav-item dropdown">
       
       
      </li>

     
      <li className="nav-item">
        <a className="nav-link " href="#"> Doar </a>
      </li>
      <form className="form-inline my-2 my-lg-0">
    
    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Cadatro ONG's</button>
  </form> 

      
    </ul>
    
  </div>
</nav>
    );
    
}

export default Navbar
