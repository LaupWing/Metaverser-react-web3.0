import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'

export default function Home() {
   const isAuthenticated = true

   if(!isAuthenticated) return <Login/>

   return (
      <div className="h-screen w-screen">
         <Head>
            <title>Metaverse challenge</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className='flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4'>
            <Image 
               src="https://links.papareact.com/3pi"
               width={200}
               height={200}
               className='object-cover rounded-full'
            />
            <button className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>Login to the METAVERSE</button>
         </div>
         <div className='w-full h-screen'>
            <Image src="https://links.papareact.com/55n" layout='fill' objectFit='cover'/>
         </div>
      </div>
   )
}
