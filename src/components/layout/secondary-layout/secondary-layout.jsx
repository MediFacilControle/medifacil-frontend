import React from 'react'
import { LayoutBg, LayoutBgContainer } from './secondary-layout.style.ts'

export function SecondaryLayout({ children }) {
  return (
    <LayoutBg>
      <LayoutBgContainer>
        {children}
      </LayoutBgContainer>
    </LayoutBg>
  )
}
