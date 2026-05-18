import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import ItemsPage from './components/ItemsPage'
import TransactionDetailPage from './components/TransactionDetailPage'
import CustomerMasterPage from './components/CustomerMasterPage'

export default function App() {
  const [activePage, setActivePage] = useState('ホーム')

  const renderPage = () => {
    switch (activePage) {
      case 'アイテム':     return <ItemsPage />
      case '顧客管理':     return <CustomerMasterPage />
      default:             return <TransactionDetailPage />
    }
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white" style={{ minWidth: '1200px' }}>
      <Sidebar activeItem={activePage} onNavClick={setActivePage} />
      <main
        className="flex-1 flex flex-col overflow-hidden p-4"
        style={{ marginLeft: '237px' }}
      >
        {renderPage()}
      </main>
    </div>
  )
}
