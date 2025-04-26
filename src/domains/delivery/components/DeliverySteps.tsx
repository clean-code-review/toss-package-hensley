import { Funnel } from '@/components/funnel'
import { useDeliverySteps } from '@/domains/delivery/hooks/useDeliverySteps'
import { SelectDeliveryType } from './steps/SelectDeliveryType'
import { SelectDestination } from './steps/SelectDestination'
import { SelectItem } from './steps/SelectItem'

export const DeliverySteps = () => {
  const {
    handleDeliveryTypeSelect,
    handleDestinationSelect,
    handleItemSelect,
  } = useDeliverySteps()

  return (
    <Funnel>
      <Funnel.Step name="1">
        <SelectDeliveryType onSelect={handleDeliveryTypeSelect} />
      </Funnel.Step>

      <Funnel.Step name="2">
        <SelectDestination onSelect={handleDestinationSelect} />
      </Funnel.Step>

      <Funnel.Step name="3">
        <SelectItem onSelect={handleItemSelect} />
      </Funnel.Step>
    </Funnel>
  )
}
