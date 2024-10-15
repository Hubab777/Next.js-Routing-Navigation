import React from "react";
import Link from "next/link";

const Contact_Us = () => {
    return (
        <div style={{
            backgroundColor: '#EFDECD',
            height: 'auto'
        }}>
            <h1><b>This is Contact Page</b></h1>
            <br />
            <p>
                Phone: [Enter your phone number]
                <br />
                Email: [Enter your email address here]
            </p>
            <br />
            <Link href="/">Go back to Home Page</Link>
            <br />
            <br />
        </div>
    );
}

export default Contact_Us;