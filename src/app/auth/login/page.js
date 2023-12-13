"use client";

import "@/assets/css/layouts/auth.scss";

import Image from 'next/image'
import Link from 'next/link'

import EmailInput from "@/components/input/email";
import PasswordInput from "@/components/input/password";
import Button from "@/components/button";
import GoogleLoginButton from "@/components/button/google-login";
import Splashscreen from "@/assets/images/auth/login-splashscreen.png";

import useStateController from "./state.controller.js";

export default function RegistrationPage() {
    const { onRegularLogin } = useStateController();

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
                🚀 #SignInNow
            </div>

            <div className="auth_main__form">
                <EmailInput
                    label="Your email"
                />
                <PasswordInput
                    label="Password"
                />
                
                <Button 
                    label="Login"
                    variant="primary"
                    disabled={false}
                    onClick={onRegularLogin}
                />

                <GoogleLoginButton />

                <div className="auth_main__alternative">
                    <Link href="/auth/registration">
                        Don't have an account ?
                    </Link>
                </div>
            </div>
        </div>
    </main>
    )
}
