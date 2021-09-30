import React from 'react'
import ReactDOM from 'react-dom'
import { useOutsideClick } from '../../hooks/useOutsideClick'

const portalDiv: any | null =
  typeof document !== 'undefined' ? document.getElementById('portal') : null

export const ModalPortal = ({
  Main,
  isOpen,
  setIsOpen,
  Overlay
}: any): JSX.Element | null => {
  const { refOutsideClick } = useOutsideClick(setIsOpen)

  if (!isOpen) return null
  portalDiv.innerHTML = ''
  return portalDiv
    ? ReactDOM.createPortal(
        <div>
          <div>{Overlay}</div>
          <div ref={refOutsideClick}>{Main}</div>
        </div>,
        portalDiv
      )
    : null
}
