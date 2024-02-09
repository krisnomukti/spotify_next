'use client';

import { useReducer } from 'react';

import Link from 'next/link';

import prisma from '@/lib/prisma';

type StateType = {
  username: string;
  email: string;
  password: string;
};

type ActionType = {
  type: 'CHANGE';
  payload: string;
  value: string;
};

const initialState = {
  username: '',
  email: '',
  password: '',
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.payload]: action.value,
      };
    default:
      return state;
  }
};

export default function FormRegister() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    dispatch({ type: 'CHANGE', payload: name, value });
  };

  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });

      if (!response.ok)
        throw new Error(`Something wen't wrong: ${response.statusText}!`);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return (
    <form onSubmit={handlerSubmit} className='flex flex-col gap-y-5 px-2 mt-16'>
      <div className='flex flex-col w-full space-y-2'>
        <label
          htmlFor='username'
          className='text-base text-start font-bold text-white'
        >
          Username
        </label>
        <input
          id='username'
          value={state.username}
          onChange={handleChange}
          name='username'
          type='text'
          placeholder='jhon.name'
          className='rounded-md bg-transparent border p-2 hover:border-white focus:border-2 focus:border-white border-neutral-400'
        />
      </div>

      <div className='flex flex-col w-full space-y-2'>
        <label
          htmlFor='email'
          className='text-base text-start font-bold text-white'
        >
          Email address
        </label>
        <input
          id='email'
          value={state.email}
          onChange={handleChange}
          name='email'
          type='email'
          placeholder='name@domain.com'
          className='rounded-md bg-transparent border p-2 hover:border-white focus:border-2 focus:border-white border-neutral-400'
        />
      </div>

      <div className='flex flex-col w-full space-y-2'>
        <label
          htmlFor='password'
          className='text-base text-start font-bold text-white'
        >
          Password
        </label>
        <input
          id='password'
          value={state.password}
          onChange={handleChange}
          name='password'
          type='password'
          placeholder=''
          className='rounded-md bg-transparent border p-2 hover:border-white focus:border-2 focus:border-white border-neutral-400'
        />
      </div>

      <Link href='' className='text-sm text-green-500 underline'>
        Use phone number instead.
      </Link>

      <div className='w-full text-center'>
        <button
          type='submit'
          className='bg-green-500 mb-8 rounded-full hover:brightness-105 transition w-full py-3 text-base text-black font-bold text-center'
        >
          Next
        </button>
      </div>
    </form>
  );
}
