import Image from 'next/image'
import React from 'react'

const Products = () => {
  return (
    <div>
      <div className='text-center mt-10 text-red-800 text-4xl font-bold'>
        For You
      </div>
      <section className="text-red-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ok" src={require("../../pics/pic8.jpg")}/>
        </a>
        <div className="mt-4">
          <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-red-800 title-font text-lg font-medium">
            Perk
          </h2>
          <p className="mt-1">30 Rs</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image className='w-60 ' alt="ok" src={require("../../pics/pic9.jpg")}/>
        </a>
        <div className="mt-4">
          <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-red-800 title-font text-lg font-medium">
            Lolipops
          </h2>
          <p className="mt-1">15 Rs</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image className='h-60 w-60' alt="ok" src={require("../../pics/pic10.jpg")}/>
        </a>
        <div className="mt-4">
          <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-red-800 title-font text-lg font-medium">
            Kurkure
          </h2>
          <p className="mt-1">20 Rs</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt='jelly' src={require("../../pics/pic2.jpg")}/>
        </a>
        <div className="mt-4">
          <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-red-800 title-font text-lg font-medium">
            Jellys
          </h2>
          <p className="mt-1">10 Rs</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Products
