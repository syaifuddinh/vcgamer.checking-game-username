"use client";

import "@/assets/css/layouts/auth.scss";

import Image from 'next/image'
import Link from 'next/link'

import EmailInput from "@/components/input/email";
import PasswordInput from "@/components/input/password";
import Button from "@/components/button";
import Splashscreen from "@/assets/images/auth/registration-splashscreen.png";
import useStateController from "./state.controller.js";

export default function RegistrationPage() {
    const { onRegister } = useStateController();

    return (
    <main className="auth">
        <div className="auth_col auth_col-1">
            <Image
                src={Splashscreen}
                alt="Registration splashscreen"
            />
        </div>
        <div className="auth_col auth_col-2 auth_main">
            <div className="auth_main__caption">
                Unlock a world of possibilities! 
                Join us by registering today and embark 
                on your journey to limitless opportunities. 
                🚀 #SignUpNow #NewBeginnings
            </div>

            <div className="auth_main__form">
                <EmailInput
                    label="Your email"
                />
                <PasswordInput
                    label="Password"
                />
                <PasswordInput
                    label="Confirm your password"
                />
                <Button 
                    label="Register"
                    variant="primary"
                    onClick={onRegister}
                />

                <div className="auth_main__alternative">
                    <Link href="/auth/login">
                        Already have an account ?
                    </Link>
                </div>
            </div>
        </div>
    </main>
    )
}
