import { useMemo } from "react"
import { type Variants } from "framer-motion"
import { useMediaQuery } from "./useMediaQuery"

export const useScrollReveal = () => {

  const isMobile = useMediaQuery("(max-width: 768px)")

  return useMemo(() => {
    const baseDuration = isMobile ? 0.45 : 0.6
    const baseStagger = isMobile ? 0.08 : 0.12
    const baseOffset = isMobile ? 20 : 30

    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: baseStagger
        }
      }
    }

    const itemVariants: Variants = {
      hidden: {
        opacity: 0,
        y: baseOffset
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: baseDuration,
          ease: [0.26, 1, 0.3, 1]
        }
      }
    }

    return {
      containerVariants,
      itemVariants,
      viewport: {
        once: false,
        margin: isMobile ? "0px 0px -20% 0px" : "0px 0px -30% 0px"
      }
    }
  }, [isMobile])
}
