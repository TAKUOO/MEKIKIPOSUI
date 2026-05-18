const navItems = [
  { label: 'ホーム', icon: 'home' },
  { label: 'ストア管理', icon: 'storefront' },
  { label: 'アイテム', icon: 'checkroom' },
  { label: '売上管理', icon: 'monitoring' },
  { label: '従業員管理', icon: 'group' },
  { label: '顧客管理', icon: 'supervised_user_circle' },
  { label: '輸出サポート', icon: 'directions_boat' },
  { label: '地金価格', icon: 'currency_exchange' },
]

export default function Sidebar({ activeItem = 'アイテム' }) {
  return (
    <aside
      className="fixed top-0 left-0 h-screen w-[237px] flex flex-col px-4 pt-6 gap-6"
      style={{ backgroundColor: '#efeff6' }}
    >
      {/* Brand area */}
      <div className="flex flex-col gap-1">
        <span className="text-[20px] font-bold text-[#272b2d]">MEKIKI.co.ltd</span>
        <div className="flex items-center gap-1">
          <span className="text-[14px] font-medium text-[#7f7f7f]">福岡店 | 奥野</span>
          <button className="text-[12px] font-medium text-[#0083e1] ml-1">切替え</button>
        </div>
        <button className="flex items-center gap-1 px-2 py-[10px] text-[14px] font-medium text-[#272b2d] w-fit">
          <span className="material-symbols-outlined text-[24px]">logout</span>
          ログアウト
        </button>
      </div>

      {/* Nav list */}
      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, icon }) => {
          const isActive = label === activeItem
          return (
            <button
              key={label}
              className="flex items-center gap-2 px-2 py-[10px] text-[14px] font-medium rounded-lg text-left w-full"
              style={{
                backgroundColor: isActive ? '#dbdbe8' : 'transparent',
                color: isActive ? '#095073' : '#272b2d',
              }}
            >
              <span className="material-symbols-outlined text-[24px]">{icon}</span>
              {label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
