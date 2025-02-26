import HeaderSection from '@/Components/HeaderSection'
import ProjectsSection from '@/Components/ProjectsSection'
import SkillSection from '@/Components/SkillSection'
import React from 'react'
import AboutMe from "@/Components/AboutMe"
import ContactForm from '@/Components/ContactMe'


const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-yellow-400 to-slate-100  py-8 px-4 sm:px-6 lg:px-8">
      <HeaderSection />

      <main className="  space-y-8 ">
        <AboutMe />
        <SkillSection />
        <ProjectsSection />
        <ContactForm />
      </main>
    </div>
  )
}

export default page