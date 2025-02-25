import Image from "next/image";
import Link from "next/link";

import { Poppins} from "next/font/google";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-poppins', 
});


export default function Home() {
  return (
   <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[80vh]">

        <div className=" flex flex-col gap-4 items-center justify-center">

        <p className={`${poppins.className} text-3xl font-bold`}>The best URL shortener in the Market</p>


          <p className="text-center text-gray-500 text-1xl font-bold hover:text-gray-700">We are the most reliable and efficient service available. We do not want you to login. </p>

          <div className="flex space-x-4">
            <Link href="/shorten">
            <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">Try Now</button>
            </Link>
        
            <Link href="/github" target="_blank">
            <button className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded">GitHub</button>
            </Link>
          </div>

        </div>

        <div className=" flex justify-start relative">

           <Image className="mix-blend-darken" src={"/vector.jpg"} fill={true} alt="An image of a vector" />

        </div>

      </section>
   </main>
  );
}
