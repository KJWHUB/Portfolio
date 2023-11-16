import GlassCard from '@/components/Card/GlassCard'
import SideBarRight from '@/components/SideBar/SideBarRight'
import './controller.scss'

const Controller = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="controller-wrap ">
      <GlassCard className="controller-glassCard animate__animated animate__delay-4s animate__fadeIn">
        {children}
        <SideBarRight />
      </GlassCard>
    </div>
  )
}

export default Controller
