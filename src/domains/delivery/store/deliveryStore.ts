import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  DeliveryState,
  DeliveryType,
  DestinationType,
  ItemType,
} from '../types'

//TODO : move to types.ts
interface DeliveryStore extends DeliveryState {
  setDeliveryType: (type: DeliveryType) => void
  setDestination: (type: DestinationType) => void
  setItem: (type: Partial<ItemType>) => void
  reset: () => void
}

const initialState: DeliveryState = {
  deliveryType: null,
  destinationType: null,
  itemType: null,
}

export const MobileContainer = () => {}
export const useDeliveryStore = create<DeliveryStore>()(
  devtools(
    (set) => ({
      ...initialState,
      setDeliveryType: (type) => set({ deliveryType: type }),
      setDestination: (type) => set({ destinationType: type }),
      setItem: (type) =>
        set((prev) => {
          console.log('prev', prev, type)
          return {
            ...prev,
            itemType: {
              ...prev.itemType,
              ...type,
            },
          }
        }),
      reset: () => set(initialState),
    }),
    { name: 'Delivery Store' },
  ),
)
