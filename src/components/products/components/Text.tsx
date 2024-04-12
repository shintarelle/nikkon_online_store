import React, { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <p className="py-8" style={{ textIndent: '2em' }}>
      {children}
    </p>
  )
}

export default Text
