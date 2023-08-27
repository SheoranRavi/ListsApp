'use client'

import Image from 'next/image';
import ToDoFrame from './components/ToDoFrame';
import Header from './components/Header';

export default function Home() {
  return (
    <>
    <Header text='ToDos'/>
    <ToDoFrame/>
    </>
  )
}
