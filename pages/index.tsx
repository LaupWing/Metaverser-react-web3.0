import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'

export default function Home() {
   const {isAuthenticated} = useMoralis()

   if(!isAuthenticated) return <Login/>

   return (
      <div className="h-screen w-screen">
         <Head>
            <title>Metaverse challenge</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         
      </div>
   )
}
