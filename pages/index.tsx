import Head from 'next/head';

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
          <div className='text-md md:text-lg'>(present) co-founder, top.</div>
          <div className='text-md md:text-lg'>(present) technical writer at buildspace.</div>
          <div className='text-md md:text-lg'>(prev) full stack dev at esqb technologies.</div>
          <div className='text-md md:text-lg'>(prev) full stack dev at the pastel leaf.</div>
          <div className='text-md md:text-lg'>(prev) full stack dev at movio mobility.</div>
         </div>
        </div>
        <div className='pt-8' id='hustles'>
         <div className='text-2xl name pb-4'>side hustles</div>
         <div className='text-md md:text-lg'>
          <span className='title'> gifthub - </span>
          <span className='desc'>a gifting guide for n00bs built using gpt-3.</span>
         </div>
         <div className='text-md md:text-lg'>
          <span className='title'> krishna-ai - </span>
          <span className='desc'> a whatsapp chatbot to interact with the supreme lord- shri krishna and get answers to all your problems.</span>
         </div>
         <div className='text-md md:text-lg'>
          <span className='title'> instabi$ - </span>
          <span className='desc'> a decentralized e-commerce portal.</span>
         </div>
         <div className='text-md md:text-lg'>
          <span className='title'> we cover - </span>
          <span className='desc'>a decentralized portal to connect donors and ngo where the donors get donors get rewards in the form of token after donation.</span>
         </div>
         <div className='text-md md:text-lg'>
          <span className='title'> tweet-as-nft  - </span>
          <span className='desc'> a portal to generate digital art from the text of any tweet and mint it as nft.</span>
         </div>
         <div className='text-md md:text-lg'>
          <span className='underline'> more projects</span>
         </div>
        </div>
        <div className='pt-8' id='writings'>
         <div className='text-2xl name pb-4'>writings</div>
          <div className='text-md md:text-lg'>
          <span className='underline'>build a chatgpt bot for whatsapp.</span>
         </div>
          <div className='text-md md:text-lg'>
          <span className='underline'> how to setup and run stable diffusion on windows.</span>
         </div>
          <div className='text-md md:text-lg'>
          <span className='underline'> how to restore ai-generated faces using gfpgan.</span>
         </div>
          <div className='text-md md:text-lg'>
          <span className='underline'> build a gpt-3 app: how i used gpt-3 to make gifting easier.</span>
         </div>
        </div>
        <div className='pt-8' id='socials'>
         <div className='text-2xl name'>socials</div>
          <div className='text-md md:text-lg'>
          connect with me on <span className='underline'>twitter,</span> <span className='underline'>instagram</span> or send me a mail at <span className='underline'>sahilkaling@gmail.com</span>. 
          </div> 
        </div>
      </div>
      <div className='pt-10 grid justify-items-center'>
        <div className='mb-10 text-md opacity-50'> built with love in next and tailwind. </div>
      </div>
      </div>
   

      </main>

    </>
  )
}
