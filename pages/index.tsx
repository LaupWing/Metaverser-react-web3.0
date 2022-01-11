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
         <div>

         </div>
         <div className='w-full h-screen'>
            <Image src="https://links.papareact.com/55n" layout='fill' objectFit='cover'/>
         </div>
      </div>
   )
}
