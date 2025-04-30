import { Button, Heading } from '@hensley-ui/ui'
import { ItemType } from '../../types'
import { ItemDrawer } from '../ItemDrawer'
import { useDeliveryStore } from '../../store/deliveryStore'
import { useEffect, useRef, useState } from 'react'
import { ItemAmountSection } from '../ItemAmountSection'
import { ItemWeightSection } from '../ItemWeightSection'
import { ItemWeightDrawer, WeightPrice } from '../ItemWeightDrawer'
import { ItemCategoryInput } from '../ItemCategoryInput'
import { DamageAgreementDrawer } from './DamageAgreementDrawer'

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
  const [damageAgreementDrawerOpen, setDamageAgreementDrawerOpen] =
    useState(false)
  // derived state
  const categoryConfirmed = !!itemType?.itemCategory
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
    setDamageAgreementDrawerOpen(true)
  }

  const firstMount = useRef(true)

  useEffect(() => {
    if (firstMount.current) {
      setCategoryDrawerOpen(true)
      firstMount.current = false
    }
  }, [categoryDrawerOpen])

  return (
    <>
      <Heading as="h2">보내는 물건의 정보를 알려주세요</Heading>
      <ItemWeightSection
        visible={amountConfirmed}
        onFocus={() => setWeightDrawerOpen(true)}
      />
      <ItemAmountSection
        amountRef={amountRef}
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
      <ItemWeightDrawer open={weightDrawerOpen} onSelect={handleWeightSelect} />
      <DamageAgreementDrawer open={damageAgreementDrawerOpen} />
    </>
  )
}
