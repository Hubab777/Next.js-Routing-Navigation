'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const route= useRouter()
    return (
    <>
    <div style={{
    backgroundColor: '#EFDECD',
    height: 'auto'
    }}>
        <div className='topdiv'>
            <ul className="flex justify-around bg-teal-300">
                <li><button onClick={() => route.push('/about')} style={{
                    padding: '10px 20px',
                    backgroundColor: '#006699',
                    color: 'white',
                    border: '2px solid black',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                About</button></li>
                <li><button onClick={() => route.push('/navbar')} style={{
                    padding: '10px 20px',
                    backgroundColor: '#006699',
                    color: 'white',
                    border: '2px solid black',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                NavBar</button></li>
                <li><button onClick={() => route.push('/contact-us')} style={{
                    padding: '10px 20px',
                    backgroundColor: '#006699',
                    color: 'white',
                    border: '2px solid black',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                Contact Us</button></li>
            </ul>
        </div>
        <br />
        <h1 style={{
            color: "#006699",
            fontSize: "2rem"
        }}><b>
            This is Home Page
            </b>
        </h1>
        <br />
        <p>
            On this page, three buttons are displayed. User can easily navigate to other route upon clicking the button. <br />
            By clicking the link <b>Go back Home</b> which is present in all routes, user can return to the main page.
        </p>
        <br />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <img src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75" alt="Image Of Next Js" width={400}/>
        </div>

        <br />
        </div>
        </>
    );
}