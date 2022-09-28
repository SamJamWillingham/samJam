import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export const PortfolioCard:FC<Props>= ({children}) => {
  return (
    <div className="block text-left p-10">{children}</div>
  )
}
