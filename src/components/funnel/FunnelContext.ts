import { createContext } from 'react'

export interface FunnelContextType {
  currentStep: string
  setCurrentStep: (step: string) => void
}

export const FunnelContext = createContext<FunnelContextType | null>(null)
