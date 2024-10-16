import {Link,Outlet} from "react-router-dom"

function Layout(){
    return(
        <>
        {/* <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </nav> */}

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/About" className="nav-link">About</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search"/>
                    <button className="btn btn-primary" type="button">Search</button>
                </form>
                </div>
            </div>
    </nav>
        <Outlet/>
        </>
    )
}
export default Layout