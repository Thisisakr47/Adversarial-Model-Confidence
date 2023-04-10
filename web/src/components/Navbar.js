import React, { useState } from 'react'
import Panel from './Panel';

export default function Navbar(props) {

    const handleDataset = (event, param) => { updateFirst(param) }

    const handleAttacktype = (event, param) => { updateSecond(param) }

    const handleDropout = (event, param) => { updateThird(param) }

    const [first, updateFirst] = useState(props.d1);
    const [second, updateSecond] = useState(props.a1);
    const [third, updateThird] = useState(props.dp1);

    var path = `/${first}/${second}/${third}/`

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        DataSet
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#" onClick={event => handleDataset(event, props.d1)}>{props.d1}</a></li>
                        <li><a className="dropdown-item" href="#" onClick={event => handleDataset(event, props.d2)}>{props.d2}</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Attack Type
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href = "#" onClick={event => handleAttacktype(event, props.a1)}>{props.a1}</a></li>
                        <li><a className="dropdown-item" href="#" onClick={event => handleAttacktype(event, props.a2)}>{props.a2}</a></li>
                        <li><a className="dropdown-item" href="#" onClick={event => handleAttacktype(event, props.a3)}>{props.a3}</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropout
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#" onClick={event => handleDropout(event, props.dp1)}>{props.dp1}%</a></li>
                        <li><a className="dropdown-item" href="#" onClick={event => handleDropout(event, props.dp2)}>{props.dp2}%</a></li>
                        <li><a className="dropdown-item" href="#" onClick={event => handleDropout(event, props.dp3)}>{props.dp3}%</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <Panel path = {path}/>
    </div>
  )
}

Navbar.defaultProps = {
    title: 'Vizualizer'
}
