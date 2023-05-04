import { useState } from "react";
import { useContext } from "react";
import { RootContext } from "./GlobalState";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserGlobalState } = useContext(RootContext);
  const redirect = useNavigate();

  const submit = async (e) => {
    try {
      e.preventDefault();

      await axios.post("http://localhost:8080/user/login", {
        email,
        password,
      });

      const { data } = await axios.get("http://localhost:8080/user/islogin");
      setUserGlobalState({
        username: data.data[0].username,
        email: data.data[0].email,
      });

      alert("berhasil login");

      redirect("/dashboard");
    } catch (err) {
      console.log(err);
    } finally {
      e.target.reset();
    }
  };

  return (
    <section className="h-[100vh] bg-gray-200 flex justify-center items-center">
      <form className="bg-blue-600 w-96 p-5 rounded-md" onSubmit={submit}>
        <section className="p-2 flex flex-col">
          <label htmlFor="username" className="text-white">
            Email
          </label>
          <input
            type="email"
            className="outline-none text-sm px-1 w-2/3 mt-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className="p-2 flex flex-col">
          <label htmlFor="username" className="text-white">
            Password
          </label>
          <input
            type="password"
            className="outline-none text-sm px-1 w-2/3 mt-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button className="py-1 px-4 bg-white hover:bg-blue-500 hover:text-white mt-2 ml-2">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
