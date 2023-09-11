import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

  }
  
  return (
    <div className='flex flex-col justify-center py-20 '>
    <form onSubmit={{handleSubmit}} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
      <h2 className='text-4xl dark:text-white font-bold text-center'>LOG IN</h2>
      <div className='flex flex-col text-gray-400 py-2'>
        <label htmlFor="Name">User Name</label>
        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
      </div>
      <div className='flex flex-col text-gray-400 py-2'>
      <label htmlFor="email">email</label>
      <input  className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' id='email' name='email' />
      </div>
      <div className='flex flex-col text-gray-400 py-2'>
      <label htmlFor="password">Password</label>
      <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  value={pass} onChange={(e) => setPass(e.target.value)}type="Password" placeholder='********' id='password' name='password' />
      </div>
      <button type="submit" className='w-full my-5 py-2 bg-teal-400 shadow-lg shadow-teal-500/100 hover:scale-105 duration-300'>Login</button>
      <Link to='/Signup' className='text-white px-10'>Dont have account? Sign Up here</Link>
    </form>
    </div>
  )
}
export default Login
