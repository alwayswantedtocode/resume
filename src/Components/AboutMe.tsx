"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from 'next/image';

const AboutMe = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    return (
        <motion.header
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-2 border-red-500"
        >
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
                About Me
            </motion.h2>
            <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 border-2 border-blue-700">
                {/* Header Section */}
                <div className="w-[66%]">
               
                    <div className="space-y-6">

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8 }}
                            className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                        >
                            An enthusiastic self-taught junior frontend developer with a strong foundation in
                            TypeScript, JavaScript and its libraries like React.js, Next.js, and Redux Toolkit.
                            Proficient at building scalable, user-centric web applications through hands-on
                            experience developing solo projects. Eager to contribute technical expertise in a
                            collaborative tech environment.
                        </motion.p>
                    </div>
                </div>
                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="hidden md:block w-[400px] h-[400px] relative rounded-full overflow-hidden border-8 border-white shadow-2xl"
                >
                    <Image
                        src="/USE FOR CV.jpg"
                        alt="Osetohamhen Ebhohon"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        priority
                    />
                </motion.div>
            </div>
        </motion.header>
    )
}

export default AboutMe