import { CustomDrawer } from '@/components/custom-drawer'
import { Button } from '@hensley-ui/ui'

export const WeightPriceTable = [
  { weight: 500, price: 2000, description: '500g이하' },
  { weight: 1000, price: 2300, description: '500g초과~1kg' },
  { weight: 1500, price: 2700, description: '1kg초과~5kg' },
] as const

export type WeightPrice = (typeof WeightPriceTable)[number]

interface ItemWeightDrawerProps {
  open: boolean
  onSelect: (weightPrice: WeightPrice) => void
}

export const ItemWeightDrawer = ({ open, onSelect }: ItemWeightDrawerProps) => {
  const handleSelect = (weightPrice: WeightPrice) => onSelect(weightPrice)

  return (
    <CustomDrawer open={open}>
      <h4>물건의 무게를 알려주세요</h4>
      {WeightPriceTable.map((weightPrice) => (
        <Button
          variant={'ghost'}
          key={weightPrice.weight}
          onClick={() => handleSelect(weightPrice)}
        >
          {weightPrice.description} ${`${weightPrice.price}`.toLocaleString()}원
        </Button>
      ))}
    </CustomDrawer>
  )
}
