import { CustomDrawer } from '@/components/custom-drawer'

export const DamageAgreementDrawer = ({ open }: { open: boolean }) => {
  return (
    <CustomDrawer open={open}>
      <div>
        <h1>보내기전에 확인해주세요</h1>
      </div>
    </CustomDrawer>
  )
}
