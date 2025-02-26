"use client"
import { useRef } from "react"

const useMenuNavigate = () => {
    const homeRef = useRef(null)
    const stackRef = useRef(null)
    const projectRef = useRef(null)
    const aboutRef = useRef(null)

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }
    return {
        homeRef,
        stackRef,
        projectRef,
        aboutRef,
        scrollToSection
    }
}

export default useMenuNavigate