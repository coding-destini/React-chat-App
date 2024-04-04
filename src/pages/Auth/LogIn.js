import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-6 border border-black">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            BizChat
          </a>
          <h1 className="text-xl font-bold leading-tight text-gray-900 mb-6">Sign in to your account</h1>
          <form className="space-y-4" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5"
                required=""
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5"
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-300"
                  required=""
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-500">Remember me</label>
              </div>
              <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500">Don’t have an account yet? 
            <Link to="/signup">
            <a href="#" className="font-medium text-primary-600 hover:underline"> Sign up</a>
            </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
    </>
  );
};

export default LogIn;
