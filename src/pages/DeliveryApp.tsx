import { FunnelProvider } from '@/components/funnel'
import { DeliverySteps } from '@/domains/delivery/components/DeliverySteps'

export const DeliveryApp = () => {
  return (
    <FunnelProvider initialStep="1">
      <DeliverySteps />
    </FunnelProvider>
  )
}
