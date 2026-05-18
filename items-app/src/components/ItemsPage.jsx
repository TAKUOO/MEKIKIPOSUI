import { useState } from 'react'

const MOCK_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: `912012345${i}`,
  name: 'Apple iPhone16pro MYMV3J/A',
  grade: 'N',
  category: '家電 > 携帯電話',
  status: '持出し(ソーティング)',
  store: '福岡店',
  purchasePrice: 10000,
  purchaseCompany: '株式会社monobank',
  salePrice: i % 4 === 1 ? null : 90000,
  saleCompany: 'MEKIKI',
  profit: i % 4 === 1 ? -10000 : i % 4 === 2 ? 80000 : 80000,
  profitRate: i % 4 === 1 ? -0.6 : 0.6,
  purchaseDate: '2025/10/10',
  saleDate: '2025/10/10',
}))

function ProfitCell({ profit, rate }) {
  const isPositive = profit > 0
  const isNegative = profit < 0
  const formatted = Math.abs(profit).toLocaleString()
  return (
    <td className="px-4 py-4 text-right">
      <div
        className="text-[14px] font-bold"
        style={{ color: isPositive ? '#14c784' : isNegative ? '#dc4749' : '#333' }}
      >
        {isPositive ? '+' : isNegative ? '-' : ''}{formatted}
      </div>
      <div className="text-[12px] font-medium" style={{ color: 'rgba(51,51,51,0.6)' }}>
        {Math.round(Math.abs(rate) * 100)}%
      </div>
    </td>
  )
}

function StatusChip({ label }) {
  return (
    <span
      className="inline-block text-[12px] font-medium rounded-full px-3 py-0.5"
      style={{ backgroundColor: '#f2f2f2', color: '#333' }}
    >
      {label}
    </span>
  )
}

export default function ItemsPage() {
  const [selectedRows, setSelectedRows] = useState(new Set())
  const [stockOnly, setStockOnly] = useState(false)

  const toggleRow = (id) => {
    setSelectedRows(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const toggleAll = () => {
    if (selectedRows.size === MOCK_ITEMS.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(MOCK_ITEMS.map(i => i.id)))
    }
  }

  const allSelected = selectedRows.size === MOCK_ITEMS.length

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Page header */}
      <div className="flex items-center gap-2 pb-4 flex-shrink-0">
        <h1 className="flex-1 text-[20px] font-bold" style={{ color: '#272b2d' }}>
          アイテム
        </h1>
        <label className="flex items-center gap-1 text-[12px] text-[#222] cursor-pointer">
          <input
            type="checkbox"
            checked={stockOnly}
            onChange={e => setStockOnly(e.target.checked)}
            className="w-4 h-4 rounded"
            style={{ accentColor: '#095073' }}
          />
          在庫のみ表示
        </label>
        <button className="flex items-center justify-center w-9 h-9">
          <span className="material-symbols-outlined text-[24px] text-[#272b2d]">search</span>
        </button>
        <button className="flex items-center justify-center w-9 h-9">
          <span className="material-symbols-outlined text-[24px] text-[#272b2d]">more_vert</span>
        </button>
        <button
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-[14px] font-medium text-white"
          style={{ backgroundColor: '#095073' }}
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          アイテムを追加
        </button>
      </div>

      {/* Summary bar */}
      <div className="flex items-center gap-3 pb-4 flex-shrink-0">
        <div className="flex items-baseline gap-1">
          <span className="text-[18px] font-semibold text-[#222]">50,000</span>
          <span className="text-[11px] font-medium text-[#888]">件</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[11px] font-medium text-[#888]">仕入合計</span>
          <span className="text-[14px] font-semibold text-[#222]">123,456,789</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[11px] font-medium text-[#888]">売上合計</span>
          <span className="text-[14px] font-semibold text-[#222]">123,456,789</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[11px] font-medium text-[#888]">粗利合計</span>
          <span className="text-[14px] font-semibold" style={{ color: '#14c784' }}>
            +123,456,789
          </span>
        </div>

        {/* Pagination */}
        <div className="ml-auto flex items-center gap-1 text-[14px]">
          <button className="px-1" style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
            <span className="material-symbols-outlined text-[24px]">chevron_left</span>
          </button>
          {[1, 2, 3, 4, 5].map(p => (
            <span key={p} className="px-[7px] text-[#222]">{p}</span>
          ))}
          <span className="px-1 text-[12px] text-[#888]">...</span>
          <span className="px-[7px] text-[#222]">10</span>
          <button className="px-1" style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
            <span className="material-symbols-outlined text-[24px]">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto relative">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ borderBottom: '1px solid #cbd8e5' }}>
              <th className="px-4 py-3 text-left w-4">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  className="w-4 h-4 rounded"
                  style={{ accentColor: '#1c64f2' }}
                />
              </th>
              <th className="px-4 py-3 text-left text-[12px] font-medium text-[#7f7f7f] w-[400px]">
                アイテム情報
              </th>
              <th className="px-4 py-3 text-center text-[12px] font-medium text-[#7f7f7f] w-[130px]">
                ステータス
              </th>
              <th className="px-4 py-3 text-right text-[12px] font-medium text-[#7f7f7f] w-[109px]">
                仕入額
              </th>
              <th className="px-4 py-3 text-right text-[12px] font-medium text-[#7f7f7f] w-[109px]">
                売上額
              </th>
              <th className="px-4 py-3 text-right text-[12px] font-medium text-[#7f7f7f] w-[109px]">
                粗利/利率
              </th>
              <th className="px-4 py-3 text-right text-[12px] font-medium text-[#7f7f7f] w-[109px]">
                日付
              </th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ITEMS.map((item) => {
              const selected = selectedRows.has(item.id)
              return (
                <tr
                  key={item.id}
                  className="cursor-pointer"
                  style={{
                    backgroundColor: selected ? '#eef0f9' : '#fff',
                    borderBottom: '0.5px solid rgba(0,0,0,0.05)',
                  }}
                  onClick={() => toggleRow(item.id)}
                >
                  {/* Checkbox */}
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => toggleRow(item.id)}
                      onClick={e => e.stopPropagation()}
                      className="w-4 h-4 rounded"
                      style={{ accentColor: '#1c64f2' }}
                    />
                  </td>

                  {/* Item info */}
                  <td className="px-4 py-4">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-14 h-14 flex-shrink-0 rounded-[4px] overflow-hidden"
                        style={{ backgroundColor: '#e6e6e6' }}
                      >
                        <img
                          src="https://placehold.co/56x56/e6e6e6/999?text=img"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-[12px] font-medium" style={{ color: 'rgba(51,51,51,0.6)' }}>
                          {item.id}
                        </span>
                        <a
                          href="#"
                          className="text-[14px] font-medium underline truncate"
                          style={{ color: '#0083e1' }}
                          onClick={e => e.stopPropagation()}
                        >
                          {item.name}
                        </a>
                        <div className="flex items-center gap-1">
                          <span className="text-[12px] font-bold" style={{ color: '#c39251' }}>
                            程度：{item.grade}
                          </span>
                          <span className="text-[12px] font-medium" style={{ color: 'rgba(51,51,51,0.6)' }}>
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <StatusChip label={item.status} />
                      <span className="text-[12px] font-medium" style={{ color: 'rgba(51,51,51,0.6)' }}>
                        {item.store}
                      </span>
                    </div>
                  </td>

                  {/* Purchase price */}
                  <td className="px-4 py-4 text-right">
                    <div className="text-[14px] font-bold text-[#333]">
                      {item.purchasePrice.toLocaleString()}
                    </div>
                    <div className="text-[12px] font-medium" style={{ color: 'rgba(51,51,51,0.6)' }}>
                      {item.purchaseCompany}
                    </div>
                  </td>

                  {/* Sale price */}
                  <td className="px-4 py-4 text-right">
                    {item.salePrice ? (
                      <>
                        <div className="text-[14px] font-bold text-[#333]">
                          {item.salePrice.toLocaleString()}
                        </div>
                        <div className="text-[12px] font-medium" style={{ color: 'rgba(51,51,51,0.6)' }}>
                          株式会社MEKIKI
                        </div>
                      </>
                    ) : (
                      <span className="text-[12px]" style={{ color: 'rgba(51,51,51,0.4)' }}>—</span>
                    )}
                  </td>

                  {/* Profit */}
                  <ProfitCell profit={item.profit} rate={item.profitRate} />

                  {/* Date */}
                  <td className="px-4 py-4 text-right">
                    <div className="text-[12px] font-medium" style={{ color: 'rgba(51,51,51,0.6)' }}>
                      仕入：{item.purchaseDate}
                    </div>
                    <div className="text-[12px] font-medium" style={{ color: 'rgba(51,51,51,0.6)' }}>
                      売却：{item.saleDate}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/* Bulk action bar */}
        {selectedRows.size > 0 && (
          <div
            className="sticky bottom-4 mx-auto flex items-center gap-3 px-4 py-[10px] rounded-[10px]"
            style={{
              backgroundColor: '#eef0f9',
              boxShadow: '0px 0px 4px 10px rgba(0,0,0,0.05)',
              width: 'fit-content',
            }}
          >
            <span className="text-[13px] font-semibold" style={{ color: '#0083e1' }}>
              {selectedRows.size}件選択中
            </span>
            <button
              className="text-[12px] font-medium"
              style={{ color: '#6d6c6a' }}
              onClick={() => setSelectedRows(new Set())}
            >
              選択解除
            </button>
            <button
              className="flex items-center gap-1 px-[14px] py-[7px] rounded-lg text-[14px] text-[#1a1918] border"
              style={{ borderColor: '#d1d0cd' }}
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              CSVエクスポート
            </button>
            <button
              className="flex items-center gap-1 px-[14px] py-[7px] rounded-lg text-[14px] border"
              style={{ color: '#dd5d37', borderColor: '#dd5d37' }}
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
              一括削除
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
