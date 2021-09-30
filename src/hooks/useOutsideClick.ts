import { useEffect, useRef } from 'react'

export function useOutsideClick(onOutsideClick: any) {
  const refOutsideClick = useRef(null)
  function handleClickOutside() {
    if (refOutsideClick.current) {
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
