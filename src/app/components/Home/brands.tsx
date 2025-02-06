import Image from "next/image"

export default function Brands() {
    return (
        <div className="flex justify-center px-28 items-center w-full dark:bg-white ">
        <Image src="/brand1.png" alt="brand1" className="dark:w-full dark:max-w-full dark:object-contain" />
      </div>
      
    )
}