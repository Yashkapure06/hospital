import React from 'react';
import Link from 'next/link';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
                <div className="container">
                    <Link href="/"><a className="navbar-brand mx-auto d-lg-none" href="index.html">
                        Hospital Name
                        <strong className="d-block">Health Specialist</strong>
                    </a></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <Link href="/"><a className="nav-link" >Home</a></Link>
                            </li>

                            <li className="nav-item active">
                                <Link href="/about"><a className="nav-link">About</a></Link>
                            </li>

                            <li className="nav-item active">
                                <Link href="/timeline"><a className="nav-link" >Timeline</a></Link>
                            </li>

                            <Link href="/"><a className="navbar-brand d-none d-lg-block" >
                                Hospital Name
                                <strong className="d-block">Health Specialist</strong>
                            </a></Link>

                            <li className="nav-item active">
                                <Link href="/treatment"><a className="nav-link" >Treatments</a></Link>
                            </li>

                            <li className="nav-item active">
                                <Link href="/booking"><a className="nav-link" >Booking</a></Link>
                            </li>

                            <li className="nav-item active">
                                <Link href="/contact"><a className="nav-link" >Contact</a></Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Header;
