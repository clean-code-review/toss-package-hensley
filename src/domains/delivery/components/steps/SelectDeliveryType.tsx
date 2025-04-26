import { Button } from '@/components/ui/button'
import { DeliveryType } from '../../types'
import { DELIVERY_TEXTS } from '../../constants/texts'
import { Heading } from '@hensley-ui/ui'

interface SelectDeliveryProps {
  onSelect: (type: DeliveryType) => void
}

export const SelectDeliveryType = ({ onSelect }: SelectDeliveryProps) => {
  return (
    <>
      <Heading as="h2">{DELIVERY_TEXTS.DELIVERY_TYPE.TITLE}</Heading>
      <div className="space-y-2">
        <Button onClick={() => onSelect('GS25')}>
          {DELIVERY_TEXTS.DELIVERY_TYPE.GS25}
        </Button>
        <Button onClick={() => onSelect('CU')}>
          {DELIVERY_TEXTS.DELIVERY_TYPE.CU}
        </Button>
      </div>
    </>
  )
}
