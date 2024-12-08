import axios from "axios";
import { useRouter } from "next/navigation";

const handleSignup = async (
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
  router: ReturnType<typeof useRouter> // Pass router as an argument
) => {
  if (!fullName || !email || !password || !confirmPassword) {
    alert("All fields are required!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await axios.post("http://localhost:5000/api/auth/signUp", {
      fullName,
      email,
      password,
      confirmPassword,
    });

    if (response.status === 201) {
      const token = response.data.token;
      localStorage.setItem("accessToken", token);
      router.push("/"); // Redirect to the home page
    }
  } catch (error: any) {
    // Handle server-side errors
    if (error.response) {
      alert(`Signup failed: ${error.response.data.message}`);
    } else {
      alert("Signup failed: An unknown error occurred.");
    }
  }
};

export default handleSignup;
