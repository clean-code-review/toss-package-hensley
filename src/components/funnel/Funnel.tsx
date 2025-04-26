import { ReactNode } from 'react'
import { useFunnel } from './useFunnel'

interface FunnelProps {
  children: ReactNode
}

interface StepProps {
  name: string
  children: ReactNode
}

export const Funnel = ({ children }: FunnelProps) => {
  return <>{children}</>
}

Funnel.Step = ({ name, children }: StepProps) => {
  const { currentStep } = useFunnel()
  return currentStep === name ? <>{children}</> : null
}
