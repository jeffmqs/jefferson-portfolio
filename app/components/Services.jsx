import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'


const Services = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="services" className='w-full px-[12%] py-10 
    scroll-mt-20'>

    <motion.h2
    initial={{ y: 20, opacity: 0}}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    className='text-center text-5xl font-serif'>
    Serviços</motion.h2>

        <motion.p 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
           Desenvolvedor Full Stack especializado em aplicações modernas com React, Node.js e Python.
Crio dashboards e soluções orientadas a dados com Power BI e SQL, transformando tecnologia em decisões estratégicas para negócios.</motion.p>

  <motion.div 
  initial={{ opacity: 0}}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.9, duration: 0.6 }}
  className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
  {serviceData.map(({icon, title, description, link}, index) => (
  
  <motion.div
   whileHover={{scale: 1.05}}
   key={index}
   className="
  border border-gray-400 rounded-lg px-8 py-12
  cursor-pointer transition-all duration-500
  hover:bg-light-hover
  hover:-translate-y-1
  hover:shadow-[4px_4px_0px_#000]
  dark:border-white
  dark:hover:bg-dark-hover
  dark:hover:shadow-[4px_4px_0px_#fff]
  "
>
              <Image src={icon} alt='' className='w-10'/>
              <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                {description}
              </p>
              <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                Leia mais <Image  alt='' src={assets.right_arrow} className='w-4'/>
              </a>
            </motion.div>

            ))}
        </motion.div>  
    </motion.div>
  )
}

export default Services