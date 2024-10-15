import React from "react";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div style={{
            backgroundColor: '#EFDECD',
            height: 'auto'
        }}>
            <h1><b>This is About Page</b></h1>
            <p>This web application is built by using Next.js. Next.js is a powerful React framework for building fast and scalable web applications.</p>
            <br />
            <Link href="/">Go back to Home Page</Link>
            <br />
            <br />
        </div>
    );
}

export default AboutPage;