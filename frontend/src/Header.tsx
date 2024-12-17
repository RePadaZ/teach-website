export function Header() {
    return (
        <body className="bg-dark-subtle text-light">
            <header className="d-flex col-lg-8 bg-dark mt-lg-3 justify-content-center mx-auto custom-border-nav p-1">
                <nav className="navbar navbar-expand-lg navbar-light gap-4">
                    <a className="navbar-brand me-lg-5" href="#">
                        Logo
                    </a>
                    <div className="btn-group gap-3 ms-lg-5">
                        <button type="button" className="btn btn-secondary dropdown-toggle custom-button-style"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                            Frontend
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Learn HTML</a></li>
                            <li><a className="dropdown-item" href="#">Learn CSS</a></li>
                            <li><a className="dropdown-item" href="#">Learn Bootstrap</a></li>
                        </ul>
                    </div>
                    <div className="btn-group gap-3">
                        <button type="button" className="btn btn-secondary dropdown-toggle custom-button-style"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                            Backend
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Learn PHP</a></li>
                            <li><a className="dropdown-item" href="#">Learn Java</a></li>
                            <li><a className="dropdown-item" href="#">Learn Golang</a></li>
                        </ul>
                    </div>
                    <div className="btn-group gap-3">
                        <button type="button" className="btn btn-secondary dropdown-toggle me-lg-5 custom-button-style"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                            Services
                        </button>
                        <ul className="dropdown-menu ">
                            <li><a className="dropdown-item" href="#">Login in / Sing Up</a></li>
                            <li><a className="dropdown-item" href="#">Templates</a></li>
                            <li><a className="dropdown-item" href="#">How to create</a></li>
                            <li><a className="dropdown-item" href="#">My project</a></li>
                        </ul>
                    </div>
                    <form className="d-flex ms-auto ms-lg-5 me-lg-4" role="search">
                        <input className="form-control me-lg-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-secondary custom-button-style" type="submit">Search</button>
                    </form>
                    <a className="btn btn-secondary custom-button-style ms-lg-5" href="#">
                        Sign Up / Login in
                    </a>
                </nav>
            </header>
        </body>
    )
}