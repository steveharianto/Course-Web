"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { checkCredentials } from "../firebaseUtils";

export default function Page() {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const user = await checkCredentials(usernameOrEmail, password);

            console.log(user);
            if (typeof user !== "string") {
                Cookies.set("user", JSON.stringify(user));
                router.push("/");
            } else {
                alert(user);
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("Login failed");
        }
    };
    return (
        <div className="flex w-full">
            <div className="flex flex-col-reverse w-[50%] bg-[#083d22] h-screen">
                <p className="text-white text-center mb-16 ">[Learning Portal] Version 1.0</p>
            </div>
            <div className="flex flex-col w-[50%] h-screen justify-center items-center">
                <p className="text-center text-xl text-[#5e5873]" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                    Log In Learning <br /> Portal
                </p>
                <span className="relative w-64 mt-4">
                    <input type="text" className="border-2 rounded py-2 px-4 text-xs w-full" placeholder="Enter your domain" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5e5873" className="w-5 h-5 absolute inset-y-0 right-0 my-auto me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </span>
                <span className="relative w-64 mt-2">
                    <input type="text" className="border-2 rounded py-2 px-4 text-xs w-full" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5e5873" className="w-5 h-5 absolute inset-y-0 right-0 my-auto me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </span>
                <button className="bg-[#43795c] text-white px-2 py-1 rounded-lg mt-16" onClick={handleLogin}>
                    Log In
                </button>
            </div>
        </div>
    );
}
