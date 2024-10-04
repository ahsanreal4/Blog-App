
import React from 'react';
import Navbar from '../components/Navbar';
import useLogin from '../hooks/useLogin';

function Login() {
  const {
    usernameOrEmail,
    password,
    setUsernameOrEmail,
    setPassword,
    handleLogin,
    error,
  } = useLogin(); 

  return (
    <>
      <Navbar />
      <form
        className="w-[400px] mx-auto mt-10 bg-white p-8 shadow-md rounded-lg flex flex-col"
        onSubmit={handleLogin} 
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && <div className="mb-4 text-red-500">{error}</div>}

        <div className="mb-4">
          <label htmlFor="usernameOrEmail" className="block mb-1 text-sm font-medium">Username or Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-sm font-medium">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
