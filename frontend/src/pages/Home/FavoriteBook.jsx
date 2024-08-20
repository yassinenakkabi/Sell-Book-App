import React from 'react'
import favBook from '../../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavoriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={favBook} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='space-y-6 md:w-1/2'>
            <h2 className='text-5xl my-5 font-bold md:w-3/4 leading-snug'>Trouvez votre livre<span className='text-[#5956e9]'> Préféré ici !</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Votre destination en ligne pour découvrir et acheter les livres qui vous passionnent. Que vous soyez amateur de romans, de biographies, de thrillers ou de poésie, notre vaste sélection vous garantit de trouver votre prochain coup de cœur littéraire. Grâce à notre interface intuitive et à nos recommandations personnalisées, explorer l'univers des livres n'a jamais été aussi simple. Trouvez votre livre préféré ici et laissez-vous emporter par une aventure littéraire unique, directement à portée de clic !</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
              <div>
                <h3 className='text-3xl font-bold '>800+</h3>
                <p className='text-base'>Liste des livres</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>550+</h3>
                <p className='text-base'>Enregistrer L'utilisateur</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>1200+</h3>
                <p className='text-base'>PDF Téléchargé</p>
              </div>
            </div>
            <Link to="/shop" className='block mt-8'><button className='bg-[#5956e9] text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Découvrir Maintenant</button></Link>
        </div>
    </div>
  )
}

export default FavoriteBook