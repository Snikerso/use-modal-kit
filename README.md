# use-modal-kit

> useModalKit

[![NPM](https://img.shields.io/npm/v/use-modal-kit.svg)](https://www.npmjs.com/package/use-modal-kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-modal-kit
```

## Usage


### If you want to create own modal with an initialize button

```tsx
import React, { Component } from 'react'

import {useModalKit} from 'use-modal-kit'

export const CustomModal = () => {
  const { setIsOpen,Modal } = useModal()
  return (
  <>
    <button onClick={()=>setIsOpen(true)}>Open</button>
    <Modal Main={<div><button onClick={()=>setIsOpen(false)}>X</button></div> } Overlay={<div></div>}/>
  </>
  )
}
```

## License

MIT © [Snikerso](https://github.com/Snikerso)
