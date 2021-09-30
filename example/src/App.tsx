import React from 'react'

import { useModal } from 'use-modal-kit'

const App = () => {
  const { setIsOpen,Modal } = useModal()
  return (
    <>
      <button onClick={()=>setIsOpen(true)}>Open</button>
      <Modal Main={<div style={{width:'300px', height:"300px", backgroundColor:"red"}}><button onClick={()=>setIsOpen(false)}>X</button></div> } Overlay={<div></div>}/>
    </>
  )
}

export default App
