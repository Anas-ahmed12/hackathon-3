'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios';
import Breadcrumb from '@/app/components/BreadCrumb'
import Brands from '@/app/components/Home/brands'

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

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
  //     try {
  //       await axios.post('/api/users', {
  //         id: Date.now().toString(),
  //         ...formData
  //       });

  //       toast.success('Sign up successful! Please sign in.');
  //       router.push('/pages/sign-in');
  //     } catch (error) {
  //       toast.error('An error occurred. Please try again.');
  //     }
  //   }
  // }

  return (
    <>
    
    <Breadcrumb
    mainHeading='Sign Up'
miniHeadings={['Home', 'pages', 'Sign Up']}
/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#0F0F0F]">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md shadow-black dark:shadow-gray-800 dark:bg-[#1a1a1a]">
        <h1 className="text-2xl font-extrabold font-weight-bold text-center text-black dark:text-white">SIGN UP</h1>
        
        <p className="mt-2 text-sm text-center text-gray-500 dark:text-white/80">
          Create an account to continue.
        </p>

        <form className="mt-6 space-y-4" >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
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

          <button
            type="submit"
            className="w-full py-2 text-white bg-pink-600 rounded-md hover:bg-pink-700 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 space-y-2">
          <button
            onClick={() => signIn('github')}
            className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none"
          >
            Sign up with GitHub
          </button>
          <button
            onClick={() => signIn('google')}
            className="w-full py-2 text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            Sign up with Google
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-white/80">
          Already have an account?{" "}
          <Link href="/pages/sign-in" className="hover:text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
    <Brands/>
    </>
  )
}