import React from 'react'
import BannerCard from '../shared/BannerCard'

export const Banner = () => {
    return (
        <div className=' bg-teal-100  px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8 bg-teal-100'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Achetez et vendez vos livres
                     <span className='text-[#5956e9]'> aux meilleurs prix</span></h1>
                    <p>Trouvez et lisez davantage de livres que vous aimerez et gardez une trace des livres que vous souhaitez lire. Rejoignez la plus grande communauté de passionnés de lecture au monde sur Goodreads.</p>
                    <div>
                        <input type="search" placeholder='Rechercher un livre ici' className='py-2 px-2 rounded-s-sm' />
                        <button className='bg-[#5956e9] px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Recherche</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
