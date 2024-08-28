import React, { useState, useContext } from 'react';
import { ArrowRight } from 'lucide-react';
import { logfarm } from '../assets/images';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../components/UserContextProvider';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleKnowMoreClick = () => {
    navigate('/SignUp');
  }

  const handleLogInClick = async (e) => {
   try {
      const response = await axios.post('/api/v1/users/login', 
      {
        email,
        password
      }, 
      {
        withCredentials: true
      } 
      );

      if (response.status === 200) {
        console.log(response.data);
        const {accessToken, refreshToken, user} = response.data.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        login(user);

        setTimeout(() => {
          navigate('/user');
        }, 2000);
      }
    } catch (error) {
      console.log("Unable to login");
      console.log(error);
    }
  };

  return (
    <section
      className="flex items-center justify-between w-full h-screen bg-gradient-to-r from-green-400 via-lime-500 to-green-600"
    > 
      <img
        src={logfarm}
        alt="Farm"
        className=" object-center hidden md:block" 
      />
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-0">
        <h1 className="text-6xl font-bold text-white mb-8">
          Welcome Back to Agrimate!!
        </h1>
        <p className="text-xl text-white mb-12">
          Connect and collaborate with agricultural experts and fellow farmers.
        </p>
        </div>
        <div className="mx-10 w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Sign in to your account
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Don't have an account?{' '}
            <a
              href="#"
              title=""
              className="text-lime-600 hover:underline"
              onClick={handleKnowMoreClick}
            >
              Create one now
            </a>
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#" className="text-sm text-lime-600 hover:underline float-right mt-2">
                Forgot password?
              </a>
            </div>
            <div>
              <button
                type="button"
                className="w-full py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                onClick={handleLogInClick}
              >
                Sign In <ArrowRight className="ml-2 inline-block" size={20} />
              </button>
            </div>
          </form>

          <div className="mt-8 space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              <svg className="h-6 w-6 text-rose-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
              Sign in with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              <svg className="h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
              Sign in with Facebook
            </button>
          </div>
        </div>
      
    </section>
  );
}

export default LogIn;
