import { useState } from 'react'
import './App.css'

import { Slide } from './components/Slide'

function App() {

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory">
      <Slide>
        <div className="flex items-center justify-around w-full h-full p-5">
          <div className="flex flex-col items-start justify-center h-full gap-5 w-fit">
            <h1 className="text-7xl text-slate-200">Tailwind in action</h1>
            <h3 className="text-5xl font-light text-slate-300">how it works in React</h3>
          </div>
          <img className="w-1/2" src="tailwindlogo.svg" alt="Tailwind Logo"></img>
        </div>
      </Slide>

      <Slide>
        <div className="flex items-center justify-between w-full h-full p-5">
          <div className="flex flex-col items-start justify-center w-1/2 h-full gap-5">
            <h1 className="text-7xl text-slate-200 text-nowrap">What is tailwindcss?</h1>
            <h3 className="text-3xl font-light text-slate-300">It is a CSS framework focused on attaching styles to HTML elements directly, rather than have them in separate CSS file or <code className="p-1 rounded-lg bg-slate-800">&lt;style&gt;</code> tag</h3>
          </div>
          <div className="flex flex-col items-end justify-center w-1/2 gap-20">
            <img className="w-[300px] [transform:translateX(-50px)] rounded-md" src="code2.png" alt="Tailwind CSS"></img>
            <img className="w-[600px] [transform:translateX(-50px)] rounded-md" src="code3.png" alt="Tailwind CSS"></img>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="flex items-center justify-around w-full h-full p-5">
          <div className="flex flex-col items-start justify-center h-full gap-5 w-fit max-w-1/2">
            <h1 className="text-7xl text-slate-200">How to install tailwind</h1>
            <h3 className="text-5xl font-light text-slate-300">Installing tailwind in React is pretty straight forward, as shown.</h3>
          </div>
          <div className="flex flex-col gap-5 w-[450px]">
            <div className="flex flex-col w-full px-2 py-2 h-fit bg-slate-900 rounded-2xl">
              <code className="pl-2 text-slate-500">terminal</code>
              <code className="p-4 border-2 border-solid border-slate-400 bg-slate-900 rounded-xl"><span>npm install tailwindcss @tailwindcss/vite</span></code>
            </div>
            <div className="w-full px-2 py-2 h-fit bg-slate-900 rounded-2xl">
              <code className="pl-2 text-slate-500">vite.config.js</code>
              <code className="flex flex-col p-4 border-2 border-solid border-slate-400 bg-slate-900 rounded-xl">
                <span>import &#123; defineConfig &#125; from 'vite'</span>
                <span className="text-blue-400">import tailwindcss from '@tailwindcss/vite'</span>
                <span className="whitespace-pre">&#10;</span>
                <span>export default defineConfig&#40;&#123;</span>
                <span>plugins: &#91;</span>
                <span className="whitespace-pre">&#9;react&#40;&#41;,</span>
                <span className="text-blue-400 whitespace-pre">&#9;tailwindcss&#40;&#41;</span>
                <span>&#93;</span>
                <span>&#125;&#41;;</span>
              </code>
            </div>
            <div className="w-full px-2 py-2 h-fit bg-slate-900 rounded-xl">
              <code className="pl-2 text-slate-500">CSS file</code>
              <code className="flex flex-col p-4 border-2 border-solid border-slate-400 bg-slate-900 rounded-xl"><span>@import "tailwindcss";</span></code>
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="flex items-center justify-around w-full h-full p-5">
          <div className="flex flex-col items-start justify-center h-full gap-5 max-w-2/3">
            <h1 className="text-7xl">What is the difference between pure HTML and React?</h1>
            <h3 className="text-3xl font-light text-slate-300">Really - none. The only real difference is that you need to type Tailwind classes inside <code className="p-1 rounded-lg bg-slate-800">className</code> attribute instead of <code className="p-1 rounded-lg bg-slate-800">class</code></h3>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-5">
          <h1 className="text-7xl">Examples - Simple form.</h1>
          <div className="flex gap-5">
            <div className="flex flex-col p-2 bg-slate-900 rounded-xl">
              <code className="text-slate-500 ml-1">Leave us a review</code>
              <textarea className="p-2 text-lg border-2 border-solid border-slate-300 rounded-lg w-[400px] h-[350px]"></textarea>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <div className="w-fit h-fit p-1 bg-slate-900 rounded-xl">
                  <div className="w-[200px] h-[40px] relative border-solid border-2 border-slate-300 rounded-lg">
                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-end">
                      <i class="bi bi-caret-down float-end mr-2"></i>
                    </div>
                    <select className="outline-none absolute w-[200px] p-2 appearance-none cursor-pointer rounded-xl">
                      <option hidden className="p-2 appearance-none text-md bg-slate-900">Select an option</option>
                      <option className="p-2 text-md bg-slate-900">Option 1</option>
                      <option className="p-2 text-md bg-slate-900">Option 2</option>
                      <option className="p-2 text-md bg-slate-900">Option 3</option>
                      <option className="p-2 text-md bg-slate-900">Option 4</option>
                    </select>
                  </div>
                </div>

                <div className="p-1 bg-slate-900 rounded-xl h-fit">
                  <div className="flex items-center gap-2 p-[6px] border-2 border-solid rounded-lg border-slate-300">
                    <input type="checkbox" id="exampleCheckbox" className="appearance-none bg-slate-300 w-[20px] h-[20px] rounded-lg checked:bg-blue-700 transition-colors cursor-pointer" />
                    <label htmlFor="exampleCheckbox" className="cursor-pointer select-none">Example Checkbox</label>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-1 rounded-xl">
                <input placeholder="Name" type="text" className="w-full appearance-none border-solid outline-none border-2 border-slate-300 rounded-lg p-2"></input>
              </div>

              <div className="bg-slate-900 p-1 rounded-xl">
                <input placeholder="Surname" type="text" className="w-full appearance-none border-solid outline-none border-2 border-slate-300 rounded-lg p-2"></input>
              </div>

              <div className="bg-slate-900 p-1 rounded-xl">
                <input placeholder="Email" type="text" className="w-full appearance-none border-solid outline-none border-2 border-slate-300 rounded-lg p-2"></input>
              </div>

              <div className="bg-slate-900 p-1 rounded-xl">
                <input placeholder="Phone number" type="number" className="w-full appearance-none border-solid outline-none border-2 border-slate-300 rounded-lg p-2"></input>
              </div>

              <div className="p-1 bg-blue-600 rounded-xl">
                <button className="w-full p-2 text-lg font-semibold text-slate-100 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors border-solid border-2 border-slate-300 cursor-pointer">Submit</button>
              </div>
            </div>

          </div>
        </div>
      </Slide>

      <Slide>
        <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-5">
          <h1 className="text-7xl">Examples - Articles.</h1>

          <div className="flex items-center flex-col gap-4">
            <div className="flex items-center gap-5 bg-slate-50 p-5 rounded-xl [box-shadow:0_5px_10px_5px_rgba(0,0,0,0.1)] w-[70vw] h-full hover:[transform:translateY(-3px)] hover:[box-shadow:0_8px_5px_0px_rgba(0,0,0,0.3)] transition-[transform,box-shadow] group">
              <div className="flex-1 flex flex-col gap-3">
                <h1 className="text-2xl text-slate-800">Lorem ipsum dolor sit amet</h1>
                <p className="text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis harum, odio quisquam esse, et tenetur ab deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis harum, odio quisquam esse, et tenetur ab deleniti. <a href="" className="text-blue-600 underline">Learn more <i class="bi bi-arrow-right-short"></i></a></p>
              </div>
              <div className="h-full">
                <img className="h-full max-h-[200px] object-cover object-center rounded-lg group-hover:[transform:scale(1.05)] transition-[transform]" src="tailwindlogo.svg" alt="code" />
              </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-50 p-5 rounded-xl [box-shadow:0_5px_10px_5px_rgba(0,0,0,0.1)] w-[70vw] h-full hover:[transform:translateY(-3px)] hover:[box-shadow:0_8px_5px_0px_rgba(0,0,0,0.3)] transition-[transform,box-shadow] group">
              <div className="h-full">
                <img className="h-full max-h-[200px] object-cover object-center rounded-lg group-hover:[transform:scale(1.05)] transition-[transform]" src="code1.png" alt="code" />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <h1 className="text-2xl text-slate-800">Lorem ipsum dolor sit amet</h1>
                <p className="text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis harum, odio quisquam esse, et tenetur ab deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis harum, odio quisquam esse, et tenetur ab deleniti.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="flex items-center justify-around w-full h-full p-5">

          <div className="w-1/3 flex flex-col gap-5">
            <h1 className="text-7xl">Customizing Tailwind styles</h1>
            <p className="text-lg">Some Tailwind properties has many values to choose from, for example <code className="p-1 rounded-lg bg-slate-800">w-&#123;value&#125;</code> &#40; as <code className="p-1 rounded-lg bg-slate-800">width:&#123;value&#125;</code>&#41;. However, these properties are predefined, meaning not every value can be used. Tailwind comes with 2 options to fix this.</p>
          </div>

          <div className="flex flex-col justify-center w-1/2 gap-10">

            <div>
              <h1 className="text-4xl">1. Arbitrary values and properties</h1>
              <p>Tailwind allows to quite literally paste pure CSS code or custom values.</p>
              <div className="p-1 bg-slate-800 rounded-xl">
                <code className="p-2 text-slate-400">JSX</code>
                <div className="bg-slate-800 p-2 rounded-xl border-solid border-2 border-slate-300">
                  <code className="p-1 rounded-lg">
                    <span>&lt;p className="<span className="text-blue-400">&#91;box-shadow:0px_10px_5px_0px_rgba(0,0,0,0.1)&#93; w-&#91;27px&#93;</span>"&gt;some cool text&lt;/p&gt;</span>
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-4xl">2. Customizing theme</h1>
              <p>Tailwind allows to quite literally paste pure CSS code or custom values.</p>
              <div className="p-1 bg-slate-800 rounded-xl">
                <code className="p-2 text-slate-400">CSS</code>
                <div className="bg-slate-800 p-2 rounded-xl border-solid border-2 border-slate-300">
                  <code className="p-1 rounded-lg flex flex-col">
                    <span>@theme &#123;</span>
                    <span className="whitespace-pre">&#9;--font-display: "Satoshi", "sans-serif";</span>
                    <span className="whitespace-pre">&#10;</span>
                    <span className="whitespace-pre">&#9;--breakpoint-3xl: 120rem;</span>
                    <span className="whitespace-pre">&#9;--color-avocado-100: oklch(0.99 0 0);</span>
                    <span className="whitespace-pre">&#9;--color-avocado-200: oklch(0.98 0.04 113.22);</span>
                    <span className="whitespace-pre">&#9;--color-avocado-300: oklch(0.94 0.11 115.03);</span>
                    <span className="whitespace-pre">&#9;--color-avocado-400: oklch(0.92 0.19 114.08);</span>
                    <span className="whitespace-pre">&#9;--color-avocado-500: oklch(0.84 0.18 117.33);</span>
                    <span className="whitespace-pre">&#9;--color-avocado-600: oklch(0.53 0.12 118.34);</span>
                    <span className="whitespace-pre">&#10;</span>
                    <span className="whitespace-pre">&#9;--ease-fluid: cubic-bezier(0.3, 0, 0, 1);</span>
                    <span className="whitespace-pre">&#9;--ease-snappy: cubic-bezier(0.2, 0, 0, 1);</span>
                    <span>&#125;</span>
                  </code>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Slide>

      <Slide>
        <div className="flex items-center justify-around w-full h-full p-5">
          <div className="flex flex-col items-start justify-center h-full gap-5 max-w-2/3">
            <h1 className="text-7xl">The only real issue in my opinion</h1>
            <p className="text-3xl text-slate-300">In component based framework, styles will be spread across multiple files, making it harder to track and manage styles. Even though, i think it is way better than having them put in CSS files. </p>
            <p className="text-3xl text-slate-300">Ultimately, Tailwind does not collide with pure CSS, so both can work together (though not recommended)</p>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="flex items-center justify-around w-full h-full">
          <div className="flex flex-col items-start justify-center h-full gap-5 p-5 w-fit max-w-1/3">
            <h1 className="text-7xl text-slate-200">Useful extensions</h1>
            <h3 className="text-4xl font-light text-slate-300">Using pure Tailwind can be annoying, but there are some must-have extensions that are here to enhance your experience.</h3>
          </div>
          <div className="flex flex-col gap-5 max-w-2/3">
            <div className="p-5 border-2 border-solid border-slate-300 rounded-xl w-[650px]">
              <h2 className="text-4xl border-b-2 border-slate-300">Tailwind CSS IntelliSense</h2>
              <p>Good old intellisense, providing you with class name suggestions as you type.</p>
            </div>
            <div className="p-5 border-2 border-solid border-slate-300 rounded-xl w-[650px]">
              <h2 className="text-4xl border-b-2 border-slate-300">Tailwind Docs</h2>
              <p>When you forget what is equivalent of CSS property in Tailwind, the Tailwind Docs are here to help you. Use <code className="p-1 rounded-lg bg-slate-800">Ctrl + Shift + P</code> to search for any property and open Tailwindcss website inside your editor right away with specific property described.</p>
            </div>
            <div className="p-5 border-2 border-solid border-slate-300 rounded-xl w-[650px]">
              <h2 className="text-4xl border-b-2 border-slate-300">Tailwind fold</h2>
              <p>Sometimes, HTML lines will become very, veeery long, as it contains lots of Tailwind CSS classes. Tailwind fold as its name spoils, folds class attributes so they are visible only when needed, for example when line is selected.</p>
            </div>
            <div className="p-5 border-2 border-solid border-slate-300 rounded-xl w-[650px]">
              <h2 className="text-4xl border-b-2 border-slate-300">Headwind</h2>
              <p>Headwind will help you organize your Tailwind CSS classes consistently. It sorts your classes alphabetically on saving, so you'd know better which class would be where in this long string of classes.</p>
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="flex flex-col items-center justify-center w-full h-full gap-5">
          <h1 className="text-7xl">Thank you for your attention!</h1>
          <p className="text-xl italic font-light text-slate-300">And to those who didn't listen, i hope you have warm pillow at night.</p>
        </div>
      </Slide>
    </div>
  )
}

export default App
