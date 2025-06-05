"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }
        setError(""); // Clear any previous errors

        // Handle password reset logic here
        alert("Password reset successful!");
        router.push("/sign-in");
    };

    return (
        <div className="flex flex-col w-full space-y-4 items-center justify-center font-open-sans">
            <div className="flex flex-col items-center justify-center w-full h-full font-open-sans text-sm">
                <h1 className="text-2xl font-semibold font-poppins text-center mt-2">Reset Password</h1>
                <p className="text-center mt-2 mb-4">Enter your new password.</p>

                <form
                    action="#"
                    className="w-2/3 space-y-4 py-5"
                    onSubmit={handleSubmit}
                >
                    <Input
                        type="password"
                        placeholder="New Password"
                        label="New Password"
                        labelClassName="text-sm"
                        togglePassword
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        labelClassName="text-sm"
                        togglePassword
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button
                        className="w-full rounded-full mt-10 py-5"
                        variant="default"
                        size="sm"
                        type="submit"
                    >
                        Reset Password
                    </Button>
                </form>
            </div>
        </div>
    );
}