// src/pages/Login.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0c10] via-[#0f111a] to-[#0f172a] text-white px-4 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 blur-[130px] rounded-full"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-floating"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mt-2 text-sm">
          Login to continue your journey with SuPav Solutions
        </p>

        {/* Email Input */}
        <div className="mt-8">
          <label className="text-gray-300 text-sm">Email Address</label>
          <div className="mt-2 flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full outline-none text-sm px-3"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mt-5">
          <label className="text-gray-300 text-sm">Password</label>
          <div className="mt-2 flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent w-full outline-none text-sm px-3"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right mt-3">
          <Link
            to="/forgot-password"
            className="text-indigo-400 hover:text-indigo-300 text-sm"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 py-6 rounded-xl text-white font-semibold shadow-indigo-600/30 shadow-lg">
          Login Now
        </Button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6">
          © {new Date().getFullYear()} SuPav Solutions — All Rights Reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
