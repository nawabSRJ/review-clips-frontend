import React from 'react'

export default function Header() {
  return (
    <div class="navbar w-[100%] border-2 border-black  bg-white sm:text-2xl flex sm:flex-row justify-evenly">
        <div class="container sm:flex-row flex-col flex flex-wrap items-center mx-auto ">
            <a href="/" class="text-emerald-600 text-3xl md:py-1 flex flex-col my-0">
              ReviewClips
            </a>
            <nav class="mr-auto ml-20 md:py-4 flex flex-wrap items-center justify-center text-[20px]">
              <a href={'#aboutSect'} class="mr-5 text-zinc-700 hover:text-zinc-950">About Us</a>
              <a href={'#guideSect'} class="mr-5 text-zinc-700 hover:text-zinc-950">Guide</a>
            </nav>
          </div>
    </div>
  )
}
