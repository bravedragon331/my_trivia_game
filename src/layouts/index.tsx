import * as React from 'react'
import { StateProvider } from "../StateContext"

export default ({ children }) => {
  return (
    <StateProvider>
      {children}
    </StateProvider>
  )
}