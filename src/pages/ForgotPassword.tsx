// src/pages/ForgotPassword.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ForgotPassword = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0c10] via-[#0e1020] to-[#0f172a] text-white px-4 relative overflow-hidden">
      
      {/* Glowing Backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 blur-[130px] rounded-full"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/25 rounded-full animate-floating"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-md p-8 rounded-3xl"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
          Forgot Password?
        </h2>

        <p className="text-center text-gray-300 mt-2 text-sm">
          Don’t worry! Enter your email and we’ll send you a reset link.
        </p>

        {/* Email Input */}
        <div className="mt-8">
          <label className="text-gray-300 text-sm">Email Address</label>
          <div className="mt-2 flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your registered email"
              className="bg-transparent w-full outline-none text-sm px-3"
            />
          </div>
        </div>

        {/* Reset Button */}
        <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 py-6 rounded-xl text-white font-semibold shadow-indigo-600/30 shadow-lg">
          Send Reset Link
        </Button>

        {/* Back to Login */}
        <p className="text-center mt-6 text-sm text-gray-400">
          Remember password?{" "}
          <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Go Back to Login
          </Link>
        </p>

        <p className="text-center text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} SuPav Solutions — All Rights Reserved.
        </p>
      </motion.div>

    </section>
  );
};

export default ForgotPassword;
