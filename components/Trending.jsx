"use client";
import Image from "next/image";

export default function Trending() {
  return (
    <>
    {Card()}
    </>
  );
}

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src="/image/logo.png"
          width={600}
          height={100}
          alt="Card Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag
          </span>
        </div>
      </div>
    </div>
  )
}