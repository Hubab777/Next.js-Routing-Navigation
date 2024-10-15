import React from "react";
import Link from "next/link"; 

const Navbar = () => {
    return (
        <div style={{
            backgroundColor: '#EFDECD',
            height: 'auto'
        }}>
            <h1><b>This is NavBar Page</b></h1>
            <br />
            <Link href="./">Go back to Home Page</Link>
            <br />
            <br />
        </div>
    );
}

export default Navbar;