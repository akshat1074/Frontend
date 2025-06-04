import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface NewPasswordProps {
  onConfirm: (password: string) => void;
}

const NewPassword: React.FC<NewPasswordProps> = ({ onConfirm }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    onConfirm(password);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full font-open-sans text-sm">
      <h1 className="text-3xl font-bold font-poppins text-center mt-8">New Password</h1>
      <p className="text-center mt-2 mb-4">Enter your new password</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full space-y-4">
        <div className="w-4/5">
          <Input
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.target.value)}
            togglePassword
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
        <div className="w-4/5">
          <Input
            type={showConfirm ? "text" : "password"}
            label="Confirm Password"
            placeholder="********"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            togglePassword
            showPassword={showConfirm}
            setShowPassword={setShowConfirm}
          />
        </div>
        {error && <div className="text-red-500 text-xs">{error}</div>}
        <Button
          type="submit"
          className="w-4/5 mt-6 rounded-full bg-primary text-white text-lg py-2 hover:bg-primary/90"
        >
          Confirm Password
        </Button>
      </form>
    </div>
  );
};

export default NewPassword; 