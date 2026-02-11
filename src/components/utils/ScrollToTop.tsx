import { useEffect } from 'react'
import { useLocation, useNavigationType, NavigationType } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname, hash } = useLocation()
    const navType = useNavigationType()

    useEffect(() => {
        // If the navigation is a "POP" (back/forward button), do NOT scroll to top.
        // This preserves the user's previous scroll position.
        if (navType === NavigationType.Pop) return

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
    }, [pathname, hash, navType])

    return null
}
