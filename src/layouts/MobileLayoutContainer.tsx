import { ReactNode } from 'react'

export const MobileLayoutContainer = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-white">
      {children}
    </div>
  )
}
