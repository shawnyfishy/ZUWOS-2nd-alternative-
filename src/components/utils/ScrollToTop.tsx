import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // Use a small timeout to ensure the DOM has updated and path change is processed
        const timeoutId = setTimeout(() => {
            if (hash) {
                const element = document.getElementById(hash.replace('#', ''))
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            } else {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'instant' as any // Force jump to top
                })
            }
        }, 10)

        return () => clearTimeout(timeoutId)
    }, [pathname, hash])

    return null
}
