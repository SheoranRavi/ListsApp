'use client'

import Image from 'next/image';
import ToDoFrame from './components/ToDoFrame';
import NewToDo from './components/NewToDo';

export default function Home() {
  return (
    <>
    <h1>
      ToDo App
    </h1>
    <Image
      src="./vercel.svg"
      width={100}
      height={100}
      alt='The vercel logo'
    />
    <ToDoFrame/>
    </>
  )
}
