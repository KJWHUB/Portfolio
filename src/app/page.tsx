'use client'

import Controller from '@/components/Controller/Controller'
import Bg from '@/components/bg/ConceptBg'

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Bg />

      <Controller />
    </main>
  )
}
