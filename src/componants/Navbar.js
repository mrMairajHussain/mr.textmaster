import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom/cjs/react-router-dom';


export default function Navbar(props) {

    // let userfc = document.getElementById("searchid");
    // // const [favcolor, setFavColor] = useState("");
    // const colorChange = () => {
    //     // setFavColor(userfc);
    //     document.body.style.backgroundColor=("green");

    // }




    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.abouttext}</Link>
                        </li> */}

                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2"   type="search" placeholder="Enter Your Fav Color here" id='searchid' aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 mx-3 my-sm-0" onClick={props.togglmode} type="submit">change color</button>
                    </form> */}
                    <div className={`custom-control custom-switch text-${props.mode === `light` ? `dark` : `light`}`}>
                        <input type="checkbox" onClick={props.togglemode} className="custom-control-input" id="customSwitch1" />
                        <label className="custom-control-label" for="customSwitch1">{props.mode === `light` ? `Enable dark mode` : `Enable light mode`}</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired, abouttext: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    // default value can set here
    title: "mytaxtmaster",
    abouttext: "aboutch"

}