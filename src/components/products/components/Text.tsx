import React, { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <p className="pb-8 pt-2" style={{ textIndent: '2em' }}>
      {children}
    </p>
  )
}

export default Text
