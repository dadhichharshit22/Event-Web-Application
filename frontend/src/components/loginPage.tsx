import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Credentials {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const [Credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin  = async (e:React.FormEvent)=>{
    e.preventDefault();
    setError(null);

    if(Credentials.email === "")
  }

  return (
    <div className="maxwidth= 400px margin:auto ">
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            value={Credentials.email}
            className="display-block "
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your Password"
            value={Credentials.password}
            className=""
          />
        </div>
        {error && <p className="color-red">{error}</p>}
        <button
        type="submit"
        className="bg-blue-950 text-white">
            Login

        </button>
      </form>
    </div>
  );
};
