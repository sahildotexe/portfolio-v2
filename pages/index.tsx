import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>sahil</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='flex grid dark:bg-[#121212] dark:text-white'>
      <div className='grid items-center	justify-items-center'>
      <div className='grid mt-10 w-10/12 items-start justify-items-start'>
        <div className='text-3xl md:text-5xl'>hey, i'm <span className='name' id='my-name' > sahil kaling.</span></div>
        <div className='text-md md:text-lg pt-2 opacity-60' >master of the 'it's not a bug, it's a feature' excuse.</div>
        <div className='pt-8' id='work'>
         <div className='text-2xl name pb-4'>work</div>
         <div>
          <div className='text-md md:text-lg'>(present) product intern, <Link href='http://adobe.com/' className='underline' target='_blank' > adobe.</Link></div>
          <div className='text-md md:text-lg'>(prev) technical writer at <Link href='https://buildspace.so/' className='underline' target='_blank' > buildspace.</Link></div>
          <div className='text-md md:text-lg'>(prev) full stack dev at <Link href='https://www.linkedin.com/company/esqb-tech/' target="_blank" className='underline'>esqb technologies.</Link> </div>
          <div className='text-md md:text-lg'>(prev) full stack dev at <Link href='https://www.linkedin.com/company/the-pastel-leaf/' target='_blank' className='underline'> the pastel leaf.</Link></div>
          <div className='text-md md:text-lg'>(prev) full stack dev at <Link href='https://www.linkedin.com/company/movio-mobility/' target='_blank'  className='underline'> movio mobility.</Link></div>
         </div>
        </div>
        <div className='pt-8' id='hustles'>
         <div className='text-2xl name pb-4'>side hustles</div>
         <div className='text-md md:text-lg'>
          <Link href='https://thegifthub.vercel.app' target='_blank' className='title'> gifthub - </Link>
          <span className='desc'>a gifting guide for n00bs built using gpt-3.</span>
         </div>
         <div className='text-md md:text-lg'>
          <Link href='https://wa.me/+918941807949' target='_blank' className='title'> krishna-ai - </Link>
          <span className='desc'> a whatsapp chatbot to interact with the supreme lord- shri krishna and get answers to all your problems.</span>
         </div>
         <div className='text-md md:text-lg'>
          <Link href='https://github.com/sahildotexe/crypto-jcomp' target='_blank' className='title'> instabi$ - </Link>
          <span className='desc'> a decentralized e-commerce portal.</span>
         </div>
         <div className='text-md md:text-lg'>
          <Link href='https://github.com/sahildotexe/We-Cover' target='_blank' className='title'> we cover - </Link>
          <span className='desc'>a decentralized portal to connect donors and ngo where the donors get donors get rewards in the form of token after donation.</span>
         </div>
         <div className='text-md md:text-lg'>
          <Link href='https://github.com/sahildotexe/Tweet-as-NFT' target='_blank' className='title'> tweet-as-nft  - </Link>
          <span className='desc'> a portal to generate digital art from the text of any tweet and mint it as nft.</span>
         </div>
         <div className='text-md md:text-lg'>
          <Link href='https://github.com/sahildotexe' target='_blank' className='underline'> more projects</Link>
         </div>
        </div>
        <div className='pt-8' id='writings'>
         <div className='text-2xl name pb-4'>writings</div>
          <div className='text-md md:text-lg'>
          <Link href='https://buildspace.so/notes/build-chatgpt-whatsapp-bot' target="_blank" className='underline'>build a chatgpt bot for whatsapp.</Link>
         </div>
          <div className='text-md md:text-lg'>
          <Link href='https://buildspace.so/notes/run-stable-diffusion-on-windows' target='_blank' className='underline'> how to setup and run stable diffusion on windows.</Link>
         </div>
          <div className='text-md md:text-lg'>
          <Link href='https://buildspace.so/notes/fix-ai-faces' target='_blank' className='underline'> how to restore ai-generated faces using gfpgan.</Link >
         </div>
          <div className='text-md md:text-lg'>
          <Link href='https://buildspace.so/notes/build-gpt3-app' target='_blank' className='underline'> build a gpt-3 app: how i used gpt-3 to make gifting easier.</Link >
         </div>
        </div>
        <div className='pt-8' id='socials'>
         <div className='text-2xl name'>socials</div>
          <div className='text-md md:text-lg'>
          connect with me on <Link href='https://twitter.com/sahilkaling_' target='_blank' className='underline social-links'>twitter,</Link> <Link href='https://www.instagram.com/sahilkaling/' target='_blank' className='underline social-links'>instagram</Link> or send me a mail at <Link href='mailto:sahilkaling@gmail.com' className='underline social-links'>sahilkaling@gmail.com</Link>. 
          </div> 
        </div>
      </div>
      <div className='mt-6 pt-10 grid justify-items-center'>
        <div className='text-md opacity-50'> built with love in next and tailwind. </div>
      </div>
      </div>
   

      </main>

    </>
  )
}
