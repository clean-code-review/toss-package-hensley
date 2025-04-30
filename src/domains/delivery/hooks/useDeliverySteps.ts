import { useDeliveryStore } from '../store/deliveryStore'
import { useFunnel } from '@/components/funnel/useFunnel'
import { DeliveryType, DestinationType, ItemType } from '../types'

export const useDeliverySteps = () => {
  const { setDeliveryType, setDestination } = useDeliveryStore()
  const { setCurrentStep, currentStep: currentFunnel } = useFunnel()
  const createStepHandler = <
    T extends DeliveryType | DestinationType | ItemType,
  >(
    setState?: (value: T) => void,
    currentStep?: string,
  ) => {
    return (value: T) => {
      if (setState && typeof setState === 'function') {
        setState?.(value)
      }

      setCurrentStep(String(Number(currentStep ?? currentFunnel) + 1))
    }
  }

  return {
    handleDeliveryTypeSelect: createStepHandler<DeliveryType>(setDeliveryType),
    handleDestinationSelect: createStepHandler<DestinationType>(setDestination),
    handleItemSelect: createStepHandler<ItemType>(),
  }
}
