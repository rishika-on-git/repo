import React from 'react'

const Tailwind = () => {
  return (
    <div>
    <section className=" text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-8xl"
          >
           OSDC Hack'24
    
            {/* <span className="sm:block"> Increase Conversion. </span> */}
          </h1>

          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg> */}
    
          <p className="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
           Welcome to the best hackathon
           Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique.
           
          </p>
    
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>
    
            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>

          
        </div>
      </div>
    </section></div>
  )
}

export default Tailwind




// import React from 'react';

// function Tailwind() {
//   return (
//     <header className="min-h-screen bg-gray-900 pb-32">
//       {/* Navbar */}
//       <nav className="py-5 flex justify-between border-b border-opacity-20 px-6">
//         <div className="flex items-center space-x-12">
//           <div className="flex space-x-2 text-2xl items-center">
//             <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27" className="h-7 w-7 -mt-2 flex-shrink-0">
//               <path d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z" fill="#0ED3CF"></path>
//             </svg>
//             <h1 className="text-white">tailwind<span className="font-bold">components</span></h1>
//           </div>
//           <div className="hidden lg:block">
//             <ul className="flex items-center space-x-6">
//               <li><a style={{ color: '#0ED3CF' }} href="#" className="font-bold">Home</a></li>
//               <li>
//                 <a href="#" className="text-white flex items-center"
//                   >Components
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </li>
//               <li><a href="#" className="text-white">Premium</a></li>
//               <li><a href="#" className="text-white">Blog</a></li>
//               <li>
//                 <a href="#" className="text-white flex items-center"
//                   >Tools
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="hidden lg:flex items-center space-x-4 cursor-pointer">
//           <div className="text-white bg-white bg-opacity-30 p-2 rounded-md">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>
//           </div>
//           <h1 style={{ backgroundColor: '#0ED3CF' }} className="py-3 px-3 text-white font-bold rounded-lg">Submit new component</h1>
//           <div>
//             <img className="w-10 h-10 rounded-full" src="https://tailwindcomponents.com/storage/avatars/zGVdhplPHfkRi10xr9wao7ERhbwRMjGgTOLAyHeK.png" alt="" />
//           </div>
//         </div>
//         <div className="space-y-1.5 cursor-pointer lg:hidden">
//           <div className="h-1 w-8 bg-white opacity-25 rounded"></div>
//           <div className="h-1 w-8 bg-white opacity-25 rounded"></div>
//           <div className="h-1 w-8 bg-white opacity-25 rounded"></div>
//         </div>
//       </nav>

//       {/* Section Hero */}
//       <div className="lg:flex pr-6 items-center lg:text-left w-full justify-between mt-12 text-center">
//         <div className="pl-6">
//           <h1 className="text-white text-4xl">A <span className="font-bold">free repository</span> for community <br />  components using br <span style={{ color: '#0ED3CF' }}>TailwindCSS</span> </h1>
//           <p className="text-white text-lg mt-4">Open source Tailwind UI components and templates to <br />
//             bootstrap your new apps, projects or landing sites!</p>

//           <div className="flex p-2 items-center lg:max-w-lg mt-6 px-2 border rounded-lg border-opacity-20">
//             <input className="bg-gray-900 outline-none text-white w-full ml-4" type="text" placeholder="Search Components" />
//             <div className="bg-gray-900">
//               <div style={{ backgroundColor: '#0ED3CF' }} className="p-3 rounded-lg cursor-pointer">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white " bg-primary fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 lg:mt-0">
//           <img className="w-full h-96 mr-96" src="https://tailwindcomponents.com/svg/website-designer-bro.svg" alt="" />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Tailwind;
