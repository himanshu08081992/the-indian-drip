import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  signupUser,
  loginWithGoogle,
} from "../services/authService";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      formData.name.trim().length < 3
    ) {
      return setError(
        "Name must be at least 3 characters"
      );
    }

    if (
      formData.password.length < 6
    ) {
      return setError(
        "Password must be at least 6 characters"
      );
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      return setError(
        "Passwords do not match"
      );
    }

    try {
      setLoading(true);

      await signupUser(
        formData.name,
        formData.email,
        formData.password
      );

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup =
    async () => {
      try {
        setLoading(true);

        await loginWithGoogle();

        navigate("/");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

  return (
    <section className="bg-[#F5EFE6] min-h-screen flex items-center justify-center px-6 py-10">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-semibold text-center mb-8">
          Create Account
        </h1>

        {error && (
          <p className="text-red-500 mb-4 text-sm">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-[#7A0C0C]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-[#7A0C0C]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-[#7A0C0C]"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={
              formData.confirmPassword
            }
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-[#7A0C0C]"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full

              bg-[#7A0C0C]
              text-white

              py-4

              rounded-xl

              hover:bg-[#5f0909]
            "
          >
            {loading
              ? "Creating Account..."
              : "Sign Up"}
          </button>
        </form>

        <button
          onClick={handleGoogleSignup}
          className="
            w-full

            border
            border-gray-300

            py-4

            rounded-xl

            mt-4

            hover:bg-gray-50
          "
        >
          Continue With Google
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#7A0C0C] font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;