import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

const SectionTestimoni = () => {
  return (
    <section className='flex flex-col md:flex-row gap-5 px-4 md:h-[333px]'>
        <div className='flex-shrink-0 flex justify-center items-center flex-col'>
        <Image width={448} height={333} alt='testimoni-illu' src={"/images/join.png"} />
        </div>
       
        <div className='flex flex-col gap-1' >
            <h5 className='title-5'>Experience Nomor <span className='text-green-500'>Satu!</span>!</h5>
            <div className='flex flex-col gap-5 h-72 overflow-y-auto'>
                <p className='font-bold '>Dipercaya Seluruh Dunia</p>
                <p className='text-sm md:text-base text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate erat sit amet malesuada lacinia. Maecenas hendrerit, nunc ac finibus interdum, metus nibh pharetra elit, in efficitur est sem ut nunc. Cras bibendum turpis tempor, eleifend leo vel, sodales ligula. Vestibulum pulvinar fringilla justo, ac dignissim sapien vulputate eu. Quisque bibendum sagittis orci, id dapibus quam tincidunt eget. Aenean suscipit ex ac ex facilisis, at ullamcorper nibh ultricies. Sed porttitor mi at leo suscipit tincidunt. Fusce molestie pharetra velit ac luctus. Donec feugiat dictum tellus, vitae vestibulum erat tempus quis. Maecenas suscipit porta ligula, ut mattis lacus ultrices sit amet. In scelerisque nibh at odio lobortis, ut venenatis eros cursus. Sed molestie purus ut eros pretium, et auctor tellus accumsan. Etiam posuere suscipit mi ac aliquet.</p>
            </div>
            <button data-cy="btn-testimoni" className='mt-4 h-10 btn-primary text-xl w-fit flex items-center' >Testimoni <ArrowRightIcon className='h-5 w-5'/> </button>
        </div>
    </section>
  )
}

export default SectionTestimoni