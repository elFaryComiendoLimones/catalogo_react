import React, {Component} from 'react';
import './App.css';
import Sidebar from './classes/Sidebar.js';
import Product from './classes/Product.js';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            showHideSidenav: ''
        }
    }

    getInitialState(){
        return {"showHideSidenav":"toggled"};
    }

    toggleSidenav() {
        var css = (this.state.showHideSidenav == "toggled") ? '' : 'toggled';
        this.setState({showHideSidenav:css});
    }

    render() {
        return(
        <div id="wrapper" className={"wrapper-total d-flex " + this.state.showHideSidenav}>
            <Sidebar/>
            <div id="page-content-wrapper">
                <header className="header">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button className="btn btn-primary" id="menu-toggle"
                                onClick={this.toggleSidenav.bind(this)}>Toggle Menu
                        </button>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </header>
                <div className="container pt-5 pb-5">
                    <div className="row products">
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
