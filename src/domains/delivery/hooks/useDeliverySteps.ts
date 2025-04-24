import { useDeliveryStore } from '../store/deliveryStore'
import { useFunnel } from '@/components/funnel/useFunnel'
import { DeliveryType, DestinationType, ItemType } from '../types'

export const useDeliverySteps = () => {
  const { setCurrentStep } = useFunnel()
  const { setDeliveryType, setDestination, setItem } = useDeliveryStore()

  const createStepHandler = <
    T extends DeliveryType | DestinationType | ItemType,
  >(
    setState: (value: T) => void,
    currentStep: string,
  ) => {
    return (value: T) => {
      setState(value)
      setCurrentStep(String(Number(currentStep) + 1))
    }
  }

  return {
    handleDeliveryTypeSelect: createStepHandler<DeliveryType>(
      setDeliveryType,
      '1',
    ),
    handleDestinationSelect: createStepHandler<DestinationType>(
      setDestination,
      '2',
    ),
    handleItemSelect: createStepHandler<ItemType>(setItem, '3'),
  }
}
