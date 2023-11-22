import './leafBgLayout.scss'

import Controller from '@/components/Controller/Controller'
import Bg from '@/components/bg/ConceptBg'

const LeafBgLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="leaf-bg-layout"
      style={{ width: '100vw', height: '100vh' }}
    >
      <Bg />

      <Controller>{children}</Controller>
    </main>
  )
}

export default LeafBgLayout
