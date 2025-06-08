'use client'
import React from 'react'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/Logo.svg'
import Socials from '@/public/images/SocialMedias.png'
import MyPicture from '@/public/images/Mypicture.jpg'
import PictureTwo from '@/public/images/picturetwo.jpg'
import WhatsApp from '@/public/images/WhatsappLogo.png'
import Download from '@/public/images/ArrowLineDown.png'
import Netflix from '@/public/images/movie.png'
import Plant from '@/public/images/Screenshot 2025-05-31 174930.png'
import Todo from '@/public/images/todo.png'
import Game from '@/public/images/mathsgame.png'
import Rock from '@/public/images/rockpaperscissors.png'
import Youtube from '@/public/images/derintube.png'
import DailyTech from '@/public/images/WorkingTechs.png'
import Paperplane from '@/public/images/PaperPlaneTilt.png'
import ArrowUp from '@/public/images/ArrowUp.png'
import Programmer from '@/public/images/CodeIcon.svg'
import Learn from '@/public/images/DesignIcon.svg'
import Project from '@/public/images/ProjectsIcon.svg'




const Everything = () => {

    const [isOpen, setIsOpen] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <main>
            {/****************************HOUSE*****************************************/}
            <section className='flex justify-center xl:h-auto lg:h-screen select-none' id='house'>
                <section className='w-full px-6 md:px-15 pt-2 md:pt-5'>
                    <div className='w-full bg-[#7B4AE21A] rounded-md py-2 flex gap-2 md:justify-between px-3 text-neutral-400 text-sm '>
                        <div className='flex items-center justify-center'>
                            <Image src={Logo} width={15} height={15} alt='logo' className='md:w-[20px] md:h-[20px]' />
                        </div>
                        <div className=" flex md:hidden w-full justify-end">
                            <div className="md:hidden">
                                <button onClick={() => setIsOpen(!isOpen)}>
                                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                                </button>
                            </div>
                        </div>

                        <div className={`flex justify-between md:gap-4 select-none rounded-2xl bg-[#090E16] md:bg-transparent md:font-semibold md:text-xs text-2xl py-3  cursor-pointer flex-col md:flex md:flex-row md:items-center md:shadow-none shadow-[0_0_20px_#7B4AE280] absolute md:static w-[50%] h-[50%] right-4 top-16 md:w-auto  transform transition-transform duration-300 ease-in-out ${isOpen ? 'flex': 'hidden' }`}>
                            <Link href='#house' className='hover:text-[#7B4AE2] flex-1 pl-5 '>Home</Link>
                            <Link href='#professional' className='hover:text-[#7B4AE2] md:active:bg-transparent  active:bg-[#7B4AE2] flex-1 pl-5 '>Professional</Link>
                            <Link href='#about' className='hover:text-[#7B4AE2] md:active:bg-transparent  active:bg-[#7B4AE2] flex-1 pl-5 '>About</Link>
                            <Link href='#skills' className='hover:text-[#7B4AE2] md:active:bg-transparent  active:bg-[#7B4AE2] flex-1 pl-5 '>Skills</Link>
                            <Link href='#portfolio' className='hover:text-[#7B4AE2] md:active:bg-transparent  active:bg-[#7B4AE2] flex-1 pl-5 '>Portfolio</Link>
                            <Link href='#career' className='hover:text-[#7B4AE2] md:active:bg-transparent  active:bg-[#7B4AE2] flex-1 pl-5 '>Career</Link>
                            <Link href='#contact' className='hover:text-[#7B4AE2] md:active:bg-transparent  active:bg-[#7B4AE2] flex-1 pl-5 '>Contact</Link>
                        </div>
                    </div>
                    <section className='flex flex-col items-start md:flex-row  md:justify-between mt-10 md:items-center'>
                        <div className='md:hidden flex justify-center w-full mb-6'>
                            <Image src={Socials} width={120} height={100} alt='Contact me on social media' className='mt-1 md:w-[80px] md:h-[60] ' />
                        </div>
                        <div className='flex-1 order-2 md:order-1'>
                            <div className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-lg w-fit md:px-2 md:py-1 py-2 px-5 font-bold md:mb-3 mb-7 md:text-lg text-2xl '>✌️Hello!</div>
                            <p className='font-extrabold md:text-3xl text-4xl md:mb-3 mb-4'>Sam-Ashimi<br /> Aderinsola</p>
                            <p className='md:text-sm text-xl text-neutral-500 md:mb-3 mb-5'>Front-end developer</p>
                            <div className='hidden md:block'>
                                <Image src={Socials} width={80} height={60} alt='Contact me on social media' className='mt-1' />
                            </div>
                        </div>
                        <div className='flex-1 flex justify-center order-1 md:order-2 w-full'>
                            <div>
                                <Image src={PictureTwo} width={270} height={320} alt='My picture' className='rounded-full select-none md:w-[250px] lg:h-[250px] shadow-[0_0_20px_#7B4AE280] mb-15' />
                            </div>
                        </div>
                        <div className='flex-1 md:block flex flex-row gap-2 items-center order-3'>
                            <div className='flex gap-2 select-none md:float-right text-[#4B2D8A] text-sm'>

                                <a href='/MyResume.pdf' download>
                                    <p>Download CV</p>
                                </a>
                                <a href='/MyResume.pdf' download>
                                    <Image src={Download} width={16} height={10} alt='Download' />
                                </a>
                            </div><br />
                            <a
                                href="https://wa.me/2348147374245"
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className='flex gap-2 md:py-1 py-3 select-none md:float-right text-[#4B2D8A] text-sm border-1 rounded-md border-[#4B2D8A] px-5'>
                                    <Image src={WhatsApp} width={20} height={20} alt='WhatsApp logo' />
                                    <p>Let&apos;s talk</p>
                                </div>
                            </a>
                        </div>
                    </section>
                </section>
            </section>



            {/***********************PROFESSIONAL***************************************/}
            <section className='mt-20 mb-10' id='professional'>
                <hr className='border-0.5 w-full mt-10 text-[#4B2D8A] md:block hidden mb-20' />
                <section className='w-full px-12 md:px-40 md:flex gap-10 '>
                    <div className='border-[1.5px] border-[#7B4AE2] rounded-2xl p-6 flex flex-1 justify-center items-center mb-8 md:h-[150px]'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={Programmer} width={100} height={100} alt='2 years a programmer' className='md:h-[50px]' />
                            <div className='text-center'>
                                <p className='font-extralight'>2 years a</p>
                                <p className='font-bold text-xl'>programmer</p>
                            </div>
                        </div>
                    </div>

                        <div className='border-[1.5px] border-[#7B4AE2] rounded-2xl p-6 flex justify-center items-center mb-8 flex-1 md:h-[150px]'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={Learn} width={100} height={100} alt='Learning everyday' className='md:h-[50px]'/>
                            <div className='text-center'>
                                <p className='font-extralight'>Learning</p>
                                <p className='font-bold text-xl'>everyday</p>
                            </div>
                        </div>
                    </div>

                        <div className='border-[1.5px] border-[#7B4AE21A] bg-[#7B4AE21A] rounded-2xl p-6 flex flex-1 justify-center items-center mb-8 md:h-[150px]'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={Project} width={100} height={100} alt='Building real projects' className='md:h-[50px]'/>
                            <div className='text-center'>
                                <p className='font-extralight'>Building</p>
                                <p className='font-bold text-xl'>real projects</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mx-40 rounded-2xl bg-[#7B4AE21A] p-6 hidden md:flex justify-between'>
                    <div className='flex-1 flex flex-col items-center justify-center '>
                        <p className='text-[#7B4AE2]'>Front-end</p>
                        <p className='text-2xl font-bold text-[#7B4AE2]'>Developer</p>
                    </div>

                    <div className='flex-1 flex flex-col items-center justify-center '>
                        <p className='text-[#7B4AE2]'>Dozens of</p>
                        <p className='text-2xl font-bold text-[#7B4AE2]'>Projects</p>
                    </div>

                    <div className='flex-1 flex flex-col items-center justify-center '>
                        <p className='text-[#7B4AE2]'>Problem</p>
                        <p className='text-2xl font-bold text-[#7B4AE2]'>Solver</p>
                    </div>
                </section>
            </section>

            {/****************************ABOUT*****************************************/}
            <section className='select-none' id='about'>

                <hr className='border-0.5 w-full text-[#4B2D8A] md:block hidden mt-25' />
                <section className='flex flex-col md:flex-row justify-between w-full px-6 md:px-15 mt-15 md:items-center' id='team'>
                    <div className='flex-1 flex w-full justify-center mb-5'>
                        <Image src={MyPicture} width={250} height={300} alt='My picture' className='rounded-full shadow-[0_0_20px_#7B4AE280]' />
                    </div>
                    <div className='flex-1'>
                        <div className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold mb-3'>✌️About Me</div>
                        <p className='font-extrabold text-2xl mb-3'>Sam-Ashimi Aderinsola</p>
                        <div className='text-xs text-neutral-500'>
                            <p className='mb-2'>👋 My name is Sam-Ashimi Aderinsola, but you can just call me Derin. Nice to meet you!</p>
                            <p className='mb-2'>👨‍💻 I&apos;ve been developing and programming websites with JavaScript, React JS, Next.js and TypeScript for over 2 years.  </p>
                            <p className='mb-2'>🎓 I&apos;m currently pursuing a degree in Computer Science from Bells University of Technology</p>
                            <p className='mb-2'>💡 Advanced in Front-end development with React, NextJS, Git, Vercel and Firebase.</p>
                            <p className='mb-2'> 🚀 Trying to be a little better than yesterday every single day.</p>
                        </div>
                    </div>
                </section>
            </section>


            {/***************************PORTFOLIO**************************************/}

            <section className=' select-none ' id='portfolio'>
                <section className='w-full px-6 md:px-15 mt-20'>
                    <div className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold mb-3'>🔗Portfolio</div>
                    <p className='font-bold text-2xl mb-10'>My Projects</p>


                    <section className='md:grid md:grid-cols-3 flex flex-row-1 md:overflow-hidden scrollbar overflow-auto gap-10'>
                        <div className='border-1 border-[#4B2D8A] p-3 rounded-md md:min-w-[200px] min-w-[300px]'>
                            <p className='text-white font-bold text-md mb-3'>Netflix-inspired movie website</p>
                            <p className='text-neutral-500 text-sm'>Developed a fully responsive movie website with a dynamic movie grid and webpage routing.</p>
                            <div className='mt-10 flex flex-wrap gap-1'>
                                <p className='bg-[#4AE2901A] text-[#4AE290] rounded-md w-fit px-2 font-semibold text-sm mb-2'>Online</p>
                                <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'> TypeScript</p>
                                <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>Next.js</p>
                                <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>Tailwind</p>
                            </div>
                            <Link href={'https://netflix-senior.vercel.app/'}>
                                <Image src={Netflix} width={300} height={200} alt='A picture of the movie website' className='rounded-md cursor-pointer' />
                            </Link>
                        </div>

                        <div className='border-1 border-[#4B2D8A1A] bg-[#4B2D8A1A] p-3 rounded-md md:min-w-[200px] min-w-[300px] relative'>
                            <p className='text-white font-bold text-md mb-3'>Bloom & Root plant shop website</p>
                            <p className='text-neutral-500 text-sm '>Designed and developed a plant-shop website with a responsive design and fast loading with SEO-optimization.</p>
                            <div className='absolute bottom-2 pr-3'>
                                <div className='mt-10 flex flex-wrap gap-1'>
                                    <p className='bg-[#4AE2901A] text-[#4AE290] rounded-md w-fit px-2 font-semibold text-sm mb-2'>Online</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'> TypeScript</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>Next.js</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>Tailwind</p>
                                </div>
                                <Link href={'https://bloomroot.vercel.app/'}>
                                    <Image src={Plant} width={300} height={200} alt='A picture of the movie website' className='rounded-md cursor-pointer ' />
                                </Link>
                            </div>
                        </div>

                        <div className='border-1 border-[#4B2D8A] p-3 rounded-md md:min-w-[200px] min-w-[300px] relative'>
                            <p className='text-white font-bold text-md mb-3'>To-do List website</p>
                            <p className='text-neutral-500 text-sm '>Designed and built a dynamic to-do list website with a clean user interface and features such as task addition and local storage for data persistence.</p>
                            <div className='absolute bottom-2 pr-3'>
                                <div className='mt-10 flex flex-wrap gap-1'>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'> TypeScript</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>Next.js</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>Tailwind</p>
                                </div>
                                <Link href={''}>
                                    <Image src={Todo} width={300} height={200} alt='A picture of the plant website' className='rounded-md cursor-pointer' />
                                </Link>
                            </div>
                        </div>


                        <div className='border-1 border-[#4B2D8A1A] bg-[#4B2D8A1A] p-3 rounded-md md:min-w-[200px] min-w-[300px] relative'>
                            <p className='text-white font-bold text-md mb-3'>Math game website</p>
                            <p className='text-neutral-500 text-sm '> Developed an interactive math game web app where users solve problems by selecting the correct answer from multiple choices. Included scoring logic, dynamic question generation, and responsive design.</p>
                            <div className='absolute bottom-2 pr-3'>
                                <div className='mt-10 flex flex-wrap gap-1'>
                                    <p className='bg-[#4AE2901A] text-[#4AE290] rounded-md w-fit px-2 font-semibold text-sm mb-2'>Online</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'> HTML</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>CSS</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>JavaScript</p>
                                </div>
                                <Link href={'https://derin-09.github.io/maths-game/'}>
                                    <Image src={Game} width={300} height={200} alt='A picture of the movie website' className='rounded-md cursor-pointer' />
                                </Link>
                            </div>
                        </div>

                        <div className='border-1 border-[#4B2D8A] p-3 rounded-md md:min-w-[200px] min-w-[300px] relative'>
                            <p className='text-white font-bold text-md mb-3'>Rock, Paper, Scissors Game</p>
                            <p className='text-neutral-500 text-sm '>Designed and developed a Rock, Paper, Scissors Game that lets users play against the computer with real-time feedback, score tracking, and clean UI using JavaScript.</p>
                            <div className='absolute bottom-2 pr-3'>
                                <div className='mt-10 flex flex-wrap gap-1'>
                                    <p className='bg-[#4AE2901A] text-[#4AE290] rounded-md w-fit px-2 font-semibold text-sm mb-2'>Online</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>HTML </p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>CSS</p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>JavaScript</p>
                                </div>
                                <Link href={'https://derin-09.github.io/rockpaperscissorsjs/'}>
                                    <Image src={Rock} width={300} height={200} alt='A picture of the rock paper scissors website' className='rounded-md cursor-pointer ' />
                                </Link>
                            </div>
                        </div>


                        <div className='border-1 border-[#4B2D8A1A] bg-[#4B2D8A1A] p-3 rounded-md md:min-w-[200px] min-w-[300px] relative pb-40'>
                            <p className='text-white font-bold text-md mb-3 z-0'>Youtube-inspired website</p>
                            <p className='text-neutral-500 text-sm z-0'>Designed a fully responsive video platform interface using HTML and CSS, mimicking YouTube&#39;s layout and user experience. Implemented a structured grid system, video thumbnails, and sidebar navigation. Ensured cross-browser compatibility and mobile-first responsiveness.</p>
                            <div className='absolute bottom-2 z-0 pr-3'>
                                <div className='mt-10 flex flex-wrap gap-1'>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>HTML </p>
                                    <p className='bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold text-sm mb-2'>CSS</p>
                                </div>
                                <Link href={''}>
                                    <Image src={Youtube} width={300} height={200} alt='A picture of the rock paper scissors website' className='rounded-md cursor-pointer ' />
                                </Link>
                            </div>
                        </div>
                    </section>
                </section>
            </section>


            {/***************************SKILLS*****************************************/}
            <section className="flex md:justify-center md:items-center mt-25 mb-15 md:text-center pl-6" id='skills'>
                <section className="flex flex-col md:items-center">
                    <div className="bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold mb-6">
                        👩‍💻Skills · Experience
                    </div>
                    <p className="font-bold text-2xl mb-5 md:mb-10">Technologies and Skills</p>
                    <p className='text-neutral-500 mb-3'>Tech stack I work with</p>
                    <Image
                        src={DailyTech}
                        width={500}
                        height={300}
                        alt="react, typescript, JavaScript, nextjs, html, figma, github and git"
                        className='mb-8'
                    />
                </section>
            </section>


            {/***************************CAREER*****************************************/}
            <section>
                <section className="flex flex-col pl-6 md:items-center mb-25 select-none" id='career'>
                    <div className="bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold mb-6">
                        💼Career
                    </div>
                    <p className="font-bold text-3xl mb-10">Part of my journey so far</p>
                    <section className='flex md:flex-row flex-col justify-between md:items-stretch pr-6 md:mx-15 gap-10 md:gap-30'>
                        <div className='flex flex-col justify-center md:items-center flex-1'>
                            <p className='text-white text-lg font-extrabold mb-1'>Professional Area</p>
                            <p className='text-neutral-500 mb-7'>2025 · Currently</p>
                            <div className='rounded-md bg-[#4B2D8A1A] p-4'>
                                <p className='text-white text-md mb-3 font-bold'>Front-end Developer at Inventors Community</p>
                                <p className='text-neutral-500 text-sm mb-10'>Utilize tech stack to create visually appealing and responsive web pages that meet client requirements.</p>
                                <p className='font-bold text-sm text-[#4B2D8A]'>January 2025 - present</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center md:items-center flex-1'>
                            <p className='text-white text-lg font-extrabold mb-1 mt-0'>Education</p>
                            <p className='text-neutral-500 mb-7'>2022 · Currently</p>
                            <div className='rounded-md border-1 border-[#4B2D8A] p-4'>
                                <p className='text-white text-md mb-3 font-bold'>Bachelor of Science · Computer Science </p>
                                <p className='text-neutral-500 text-sm mb-10'>
                                    Bells University of Technology <br />
                                    Relevant Coursework: Data Structures, Digital Logic Design, Discrete Mathematics
                                </p>
                                <p className='font-bold text-sm text-[#4B2D8A]'>September 2023 - present</p>
                            </div>
                        </div>
                    </section>
                </section>
            </section>


            {/**************************CONTACT*****************************************/}
            <section>
                <section className="flex flex-col md:items-center pl-6 md:pl-0  mb-8" id='contact'>
                    <div className="bg-[#7B4AE21A] text-[#7B4AE2] rounded-md w-fit px-2 font-bold mb-3 select-none">
                        📱Contact Me
                    </div>
                    <p className='font-bold text-2xl mb-5 md:mb-10 flex-1 select-none'>Open for Collaboration</p>
                    <div className='flex md:flex-row flex-col flex-1 mb-12 gap-6 text-sm'>
                        <div className='flex flex-col select-none float-right text-[#4B2D8A] text-sm md:items-center justify-center'>
                            <a
                                href="https://wa.me/2348147374245"
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className='flex gap-1'>
                                    <p className='select-none'>Let&apos;s Talk</p>
                                    <Image src={WhatsApp} width={20} height={20} alt='WhatsApp logo' />
                                </div>
                            </a>
                            <a
                                href="https://wa.me/2348147374245"
                                target="_blank"
                                rel="noopener noreferrer">
                                <p className='text-neutral-500 text-sm select-none'>Send a message on WhatsApp</p>
                            </a>
                        </div>
                        <div className='flex flex-col  float-right text-[#4B2D8A] text-sm md:items-center justify-center'>
                            <a
                                href="mailto:aderinsolasamashimi@gmail.com">
                                <div className='flex gap-1'>
                                    <p className='select-none'>Email:</p>
                                    <Image src={Paperplane} width={20} height={20} alt='Send an email' />
                                </div></a>
                            <a
                                href="mailto:aderinsolasamashimi@gmail.com">
                                <p className='text-neutral-500 text-sm '>aderinsolasamashimi@gmail.com</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-1'>
                        <button onClick={scrollToTop} className='text-[#4B2D8A] '>Back to the top</button>
                        <button onClick={scrollToTop}>
                            <Image src={ArrowUp} width={20} height={20} alt='copy' />
                        </button>
                    </div>
                </section>
            </section>


            {/***************************FOOTER*****************************************/}
            <section className="bg-[#7B4AE21A] select-none">
                <section className="px-15 py-3 w-full flex md:flex-row flex-col justify-between items-center h-full md:gap-0 gap-2">
                    <div className="flex-1 text-xs text-neutral-500 order-2 md:order-1">Copyright Sam-Ashimi Aderinsola · 2025</div>
                    <div className="flex flex-1 justify-center order-1 md:order-2">
                        <Image src={Socials} width={80} height={50} alt="linkedin, github" />
                    </div>
                    <div className="text-[#7B4AE21A] flex-1 text-right order-3 md:order-3 hidden md:block">Goodbye!</div>
                </section>
            </section>

        </main>
    )
}

export default Everything