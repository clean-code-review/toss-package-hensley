import { useContext } from 'react'
import { FunnelContext } from './FunnelContext'

export const useFunnel = () => {
  const context = useContext(FunnelContext)
  if (!context) {
    throw new Error('useFunnel must be used within a FunnelProvider')
  }
  return context
}
