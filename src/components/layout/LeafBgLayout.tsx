'use client'

import Controller from '@/components/Controller/Controller'
import Bg from '@/components/bg/ConceptBg'

const LeafBgLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ position: 'relative' }}>
      <Bg />

      <Controller>{children}</Controller>
    </main>
  )
}

export default LeafBgLayout
