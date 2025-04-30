import { Button, Heading } from '@hensley-ui/ui'
import { ItemType } from '../../types'
import { ItemDrawer } from '../ItemDrawer'
import { useDeliveryStore } from '../../store/deliveryStore'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { ItemAmountSection } from './ItemAmountSection'
import { ItemWeightSection } from './ItemWeightSection'
import { ItemWeightDrawer, WeightPrice } from '../ItemWeightDrawer'
import { Input } from '@/components/ui/input'
//TODO: 물건카테고리를 포커스하면 다이얼로그가 열려야 한다.
//TODO : 아이템 선택 모달은 해당 컴포넌트에 처음 들어왔을 때만 열려야 한다.

interface SelectItemProps {
  onSelect: (type: ItemType) => void
}

export const SelectItem = ({ onSelect }: SelectItemProps) => {
  const { destinationType, itemType, setItem } = useDeliveryStore()
  const amountRef = useRef<HTMLInputElement>(null)
  const weightRef = useRef<HTMLInputElement>(null)
  const [categoryDrawerOpen, setCategoryDrawerOpen] = useState(false)
  const [weightDrawerOpen, setWeightDrawerOpen] = useState(false)
  const [amountConfirmed, setAmountConfirmed] = useState(false)
  // derived state
  const categoryConfirmed = !!itemType?.itemCategory
  const [inputValue, setInputValue] = useState('')
  if (!destinationType) {
    //제일 앞 페이지로 이동
    return
  }

  const handleItemCategorySelect = (itemCategory: ItemType['itemCategory']) => {
    setItem({ itemCategory })
    setCategoryDrawerOpen(false)
    //focus 처리
    amountRef.current?.focus()
  }
  const handleAmountConfirm = () => {
    console.log('amountConfirmed')
    setAmountConfirmed(true)
    setWeightDrawerOpen(true)
    //focus 처리
    weightRef.current?.focus()
  }
  const handleWeightSelect = (weightPrice: WeightPrice) => {
    setItem({
      itemWeight: weightPrice.weight,
      itemPrice: weightPrice.price,
      itemDescription: weightPrice.description,
    })
    setWeightDrawerOpen(false)
  }

  const isFirstMounted = useRef(true)

  useEffect(() => {
    if (isFirstMounted.current) {
      console.log('첫 마운트')
      setCategoryDrawerOpen(true)
      isFirstMounted.current = false
    }
  }, [categoryDrawerOpen])

  return (
    <>
      <div>
        <InputTest value={inputValue} onChange={setInputValue} />
        <Heading as="h2">보내는 물건의 정보를 알려주세요</Heading>
        <ItemWeightSection
          visible={amountConfirmed}
          onFocus={() => setWeightDrawerOpen(true)}
        />

        <ItemAmountSection
          visible={categoryConfirmed}
          onConfirm={handleAmountConfirm}
        />
        <ItemCategoryInput onFocus={() => setCategoryDrawerOpen(true)} />

        <Button
          onClick={() => console.log('다음 단계로 이동')}
          disabled={
            !itemType?.itemCategory ||
            !itemType?.itemAmount ||
            !itemType?.itemWeight
          }
        >
          다음
        </Button>

        <ItemDrawer
          open={
            categoryDrawerOpen
          } /** condition if first mounted, focus on input */
          destinationType={destinationType}
          onSelect={handleItemCategorySelect}
        />
        <ItemWeightDrawer
          open={weightDrawerOpen}
          onSelect={handleWeightSelect}
        />
      </div>
    </>
  )
}

export const ItemWeight = () => {
  const { itemType } = useDeliveryStore()
  return <div>{itemType?.itemWeight}</div>
}

export const ItemCategoryInput = ({ onFocus }: { onFocus: () => void }) => {
  const { itemType } = useDeliveryStore()

  return (
    <>
      <Input
        placeholder="카테고리 검색"
        value={itemType?.itemCategory}
        readOnly
        onFocus={onFocus}
      />
    </>
  )
}

export const InputTest = ({ value, onChange }: any) => {
  const [inputValue, setInputValue] = useState(value) // 버퍼 역할

  const handleChange = (e: any) => {
    setInputValue(e.target.value) // 입력 즉시 로컬에 저장 (부모에 반영 X)
  }

  const handleBlur = () => {
    onChange(inputValue) // 포커스 잃을 때만 부모에게 값 전달
  }
  return (
    <input value={inputValue} onChange={handleChange} onBlur={handleBlur} />
  )
}
