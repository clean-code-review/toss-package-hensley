import { Heading } from '@hensley-ui/ui'
import { ItemType } from '../../types'
import { Input } from '@/components/ui/input'
import { ItemDrawer } from '../ItemDrawer'
import { useDeliveryStore } from '../../store/deliveryStore'
import { useEffect, useRef, useState } from 'react'
//TODO: 물건카테고리를 포커스하면 다이얼로그가 열려야 한다.
interface SelectItemProps {
  onSelect: (type: ItemType) => void
}

export const SelectItem = ({ onSelect }: SelectItemProps) => {
  const { destinationType, itemType, setItem } = useDeliveryStore()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const amountRef = useRef<HTMLInputElement>(null)

  if (!destinationType) {
    //제일 앞 페이지로 이동
    return
  }

  const handleItemCategorySelect = (itemCategory: ItemType['itemCategory']) => {
    console.log('선택된 카테고리:', itemCategory)
    setItem({ itemCategory })
    setIsDrawerOpen(false)
  }

  useEffect(() => {
    if (amountRef.current && itemType?.itemCategory) {
      console.log('')
      amountRef.current.focus()
    }
  }, [itemType?.itemCategory])

  return (
    <>
      <div>
        <Heading as="h2">보내는 물건의 정보를 알려주세요</Heading>
        {itemType?.itemCategory && (
          <Input
            ref={amountRef}
            type="number"
            value={itemType.itemAmount ?? ''}
          />
        )}
        <Input
          placeholder="물건 정보"
          value={itemType?.itemCategory ?? ''}
          readOnly
          onFocus={() => setIsDrawerOpen(true)}
        />
      </div>
      {/*  주소/편의점 마다 아이템 카테고리가 다름 */}
      <ItemDrawer
        defaultOpen={isDrawerOpen}
        destinationType={destinationType}
        onClick={handleItemCategorySelect}
      />
    </>
  )
}
