import { useEffect, useRef } from 'react'

export function useOutsideClick(onOutsideClick: any) {
  const refOutsideClick = useRef<HTMLDivElement | null>(null)
  function handleClickOutside(event: any) {
    if (
      refOutsideClick.current &&
      !refOutsideClick.current.contains(event.target)
    ) {
      onOutsideClick()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refOutsideClick])
  return { refOutsideClick }
}
