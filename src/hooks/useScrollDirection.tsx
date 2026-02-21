import { useEffect, useState } from "react"

export function useScrollDirection() {
  const [scrollingDown, setScrollingDown] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      if (scrollY > lastScrollY + 10) {
        setScrollingDown(true)
      } else if (scrollY < lastScrollY - 10) {
        setScrollingDown(false)
      }

      lastScrollY = scrollY
    }

    window.addEventListener('scroll', updateScrollDirection)

    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [])

  return scrollingDown
}