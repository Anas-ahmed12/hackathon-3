'use client'

interface User {
  email: string;
  password: string;
}

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios';
import Breadcrumb from '@/app/components/BreadCrumb';
import Brands from '@/app/components/Home/brands';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors: {[key: string]: string} = {}

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
      isValid = false
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     const { data: users } = await axios.get('/api/users');
  //     const user = users.find((user: User) => user.email === formData.email && user.password === formData.password);
  
  //     if (user) {
  //       toast.success('Signed in successfully!');
  //       router.push('/');
  //     } else {
  //       toast.error('Invalid credentials. Please try again.');
  //     }
  //   }
  // };
  return (
    <>
    <Breadcrumb
    mainHeading='Sign In'
miniHeadings={['Home', 'pages', 'Sign In']}
/>


    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#0F0F0F]">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md shadow-black dark:shadow-gray-800 dark:bg-[#1a1a1a]">
        <h1 className="text-2xl font-extrabold font-weight-bold text-center text-black dark:text-white">LOGIN</h1>
        
        <p className="mt-2 text-sm text-center text-gray-500 dark:text-white/80">
          Log in to your account to continue.
        </p>

        <form className="mt-6 space-y-4" >
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <p className="text-sm text-left text-gray-500 cursor-pointer hover:text-gray-700 dark:text-white/80">
            Forgot Password?
          </p>

          <button
            type="submit"
            className="w-full py-2 text-white bg-pink-600 rounded-md hover:bg-pink-700 focus:outline-none"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 space-y-2">
          <button
            onClick={() => signIn('github')}
            className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none"
          >
            Sign in with GitHub
          </button>
          <button
            onClick={() => signIn('google')}
            className="w-full py-2 text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            Sign in with Google
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-white/80">
          Don&apos;t have an account?{" "}
          <Link href="/pages/sign-up" className="hover:text-pink-500 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
    <Brands/>
    </>
  )
}

