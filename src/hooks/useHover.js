import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)

        return function() {
            ref.current && ref.current.removeEventListener("mouseenter", enter)
            ref.current && ref.current.removeEventListener("mouseleave", leave)
        }

    }, [hovered])

    return [hovered, ref]
}

export default useHover