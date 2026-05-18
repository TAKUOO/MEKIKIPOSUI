import './index.css'
import Sidebar from './components/Sidebar'
import ItemsPage from './components/ItemsPage'

export default function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white" style={{ minWidth: '1440px' }}>
      <Sidebar activeItem="アイテム" />
      <main
        className="flex-1 flex flex-col overflow-hidden p-4"
        style={{ marginLeft: '237px' }}
      >
        <ItemsPage />
      </main>
    </div>
  )
}
