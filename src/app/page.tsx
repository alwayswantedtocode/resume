import HeaderSection from '@/Components/HeaderSection'
import ProjectsSection from '@/Components/ProjectsSection'
import SkillSection from '@/Components/SkillSection'
import React from 'react'
import AboutMe from "@/Components/AboutMe"
import ContactForm from '@/Components/ContactMe'


const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <HeaderSection />

      <main className="  space-y-8">
        <SkillSection />
        <ProjectsSection />
        <AboutMe />
        <ContactForm />
      </main>
    </div>
  )
}

export default page