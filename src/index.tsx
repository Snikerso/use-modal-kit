import React, { useCallback, useState } from 'react'

import { ModalPortal } from './components/Modal'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const Modal = useCallback(
    ({ Overlay, Main }) => (
      <div>
        <ModalPortal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          Overlay={Overlay}
          Main={Main}
        />
      </div>
    ),
    [isOpen]
  )

  return { isOpen, setIsOpen, Modal }
}
