import { ReactNode, useState } from 'react'
import { FunnelContext, FunnelContextType } from './FunnelContext'

interface FunnelProviderProps {
  children: ReactNode
  initialStep: string
}

export const FunnelProvider = ({
  children,
  initialStep,
}: FunnelProviderProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep)

  const value: FunnelContextType = {
    currentStep,
    setCurrentStep,
  }

  return (
    <FunnelContext.Provider value={value}>{children}</FunnelContext.Provider>
  )
}
