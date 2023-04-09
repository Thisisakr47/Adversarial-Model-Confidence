import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        DataSet
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">MNIST</a></li>
                        <li><a className="dropdown-item" href="/">STL-10</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Attack Type
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">LBFGS</a></li>
                        <li><a className="dropdown-item" href="/">FGSM</a></li>
                        <li><a className="dropdown-item" href="/">State-of-art</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropout
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">10%</a></li>
                        <li><a className="dropdown-item" href="/">20%</a></li>
                        <li><a className="dropdown-item" href="/">30%</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.defaultProps = {
    title: 'Vizualizer'
}
