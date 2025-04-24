import { create } from 'zustand'
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
  setItem: (type: ItemType) => void
  reset: () => void
}

const initialState: DeliveryState = {
  deliveryType: null,
  destinationType: null,
  itemType: null,
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  ...initialState,
  setDeliveryType: (type) => set({ deliveryType: type }),
  setDestination: (type) => set({ destinationType: type }),
  setItem: (type) => set({ itemType: type }),
  reset: () => set(initialState),
}))
