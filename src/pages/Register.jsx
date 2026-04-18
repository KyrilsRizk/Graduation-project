import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff } from 'lucide-react';
import Loader from '../components/common/loader';

const registerSchema = z.object({
  fullName: z
    .string()
    .nonempty({ message: 'Full name is required' })
    .min(3, { message: 'Full name must be at least 3 characters' })
    .regex(/^[A-Za-z]+([ '-][A-Za-z]+)*$/, {
      message: "Full name can only contain letters, spaces, hyphens, and apostrophes",
    }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' })
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*_)/, {
      message: 'Password must contain an uppercase letter, a number, and an underscore',
    }),
});

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    // replace this with your register logic
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    reset();
    navigate('/login');
  };

  return (
    <div className="bg-[#F2ECE2] pt-20 pb-10 flex flex-col items-center text-center">

      {/* Logo */}
      <div className="image mb-6">
        <img src="/Logo.png" alt="Logo" width={300} height={200} />
      </div>

      {/* Heading */}
      <div className="text">
        <h1 className="font-display text-5xl text-[#425B6F] mb-4">Welcome</h1>
        <p className="font-sans text-2xl text-[#425B6F]">
          create account to access exclusive AI predictions and portfolio tracking
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-[#F6F4EE] rounded-3xl shadow p-8 mt-5 mb-5">
        <h1 className="text-2xl font-display text-[#425B6F] text-center mb-8">
          create account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-left">

          {/* Full Name */}
          <div>
            <label className="block text-sm text-[#425B6F] mb-1 font-sans">Full name</label>
            <input
              type="text"
              {...register('fullName')}
              placeholder="Enter your name"
              className="w-full rounded-2xl border border-gray-300 px-4 py-2 outline-none focus:border-yellow-400"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-[#425B6F] mb-1 font-sans">email address</label>
            <input
              type="email"
              {...register('email')}
              placeholder="your@email.com"
              className="w-full rounded-2xl border border-gray-300 px-4 py-2 outline-none focus:border-yellow-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-[#425B6F] mb-1 font-sans">password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="********"
                className="w-full rounded-2xl border border-gray-300 px-4 py-2 pr-14 outline-none focus:border-yellow-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-500"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-between px-3 gap-3 rounded-xl border-2 border-yellow-200 py-2"
          >
            {loading ? (
              <Loader />
            ) : (
              <>
                <span className="font-sans text-[#425B6F]">create account</span>
                <img src="/Logobtn.png" alt="icon" width={24} height={24} />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-yellow-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}