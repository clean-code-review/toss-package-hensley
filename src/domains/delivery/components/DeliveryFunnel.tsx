import { FC } from 'react'
import { Funnel } from '@/components/funnel'
import { useDeliverySteps } from '../hooks/useDeliverySteps'
import { SelectDeliveryType } from './SelectDeliveryType'

export const DeliveryFunnel: FC = () => {
  const { handleDeliveryTypeSelect } = useDeliverySteps()

  return (
    <Funnel>
      <Funnel.Step name="1">
        <SelectDeliveryType onSelect={handleDeliveryTypeSelect} />
      </Funnel.Step>
    </Funnel>
  )
}
