import { useState } from 'react'

const MOCK_CUSTOMER = {
  code: '001234',
  name: '奥野 裕太郎',
  kana: 'オクノ ユウタロウ',
  gender: '男性',
  dob: '1985/04/12',
  age: 40,
  tel4: '5678',
  notification: 'する',
  transactionCount: 28,
  profitRate: 62.4,
  address: '福岡県福岡市中央区大名2-1-1',
  notes: '店長買い取り分',
}

const MOCK_HISTORY = [
  {
    date: '2025/10/10', ledgerNo: 'K-20251010-001', category: '携帯電話',
    detail: 'Apple iPhone16pro MYMV3J/A', count: 1,
    purchaseAmount: 90000, earnedPoints: 900, issuedPoints: 900, staff: '奥野'
  },
  {
    date: '2025/08/22', ledgerNo: 'K-20250822-003', category: '時計',
    detail: 'ROLEX デイトジャスト 41mm', count: 1,
    purchaseAmount: 420000, earnedPoints: 4200, issuedPoints: 4200, staff: '田中'
  },
  {
    date: '2025/06/05', ledgerNo: 'K-20250605-002', category: 'バッグ',
    detail: 'Louis Vuitton モノグラム ネヴァーフル MM', count: 1,
    purchaseAmount: 68000, earnedPoints: 680, issuedPoints: 680, staff: '奥野'
  },
  {
    date: '2025/03/18', ledgerNo: 'K-20250318-007', category: '貴金属',
    detail: 'K18 ネックレス 18g', count: 1,
    purchaseAmount: 110000, earnedPoints: 1100, issuedPoints: 1100, staff: '山本'
  },
  {
    date: '2024/12/01', ledgerNo: 'K-20241201-005', category: '家電',
    detail: 'AirPods Pro 第2世代 MQD83J/A', count: 2,
    purchaseAmount: 28000, earnedPoints: 280, issuedPoints: 280, staff: '奥野'
  },
]

const totalPurchase = MOCK_HISTORY.reduce((s, r) => s + r.purchaseAmount, 0)

export default function TransactionDetailPage({ onNewTransaction }) {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <div className="flex flex-col h-full gap-4">

      {/* Page header */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <h1 className="flex-1 text-[20px] font-bold" style={{ color: '#272b2d' }}>
          取引明細入力（個人別）
        </h1>
        <span className="text-[12px] font-medium" style={{ color: '#6d6c6a' }}>
          2025/12/09
        </span>
      </div>

      {/* Customer info card */}
      <div
        className="flex-shrink-0 rounded-lg p-4"
        style={{ backgroundColor: '#efeff6' }}
      >
        <div className="flex items-start gap-6 flex-wrap">

          {/* Left: identity */}
          <div className="flex flex-col gap-1 min-w-[200px]">
            <div className="flex items-baseline gap-2">
              <span className="text-[12px] font-medium" style={{ color: '#7f7f7f' }}>顧客コード</span>
              <span className="text-[14px] font-bold" style={{ color: '#272b2d' }}>{MOCK_CUSTOMER.code}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[20px] font-bold" style={{ color: '#272b2d' }}>{MOCK_CUSTOMER.name}</span>
            </div>
            <div className="text-[12px] font-medium" style={{ color: '#6d6c6a' }}>{MOCK_CUSTOMER.kana}</div>
            <div className="text-[12px]" style={{ color: '#6d6c6a' }}>{MOCK_CUSTOMER.address}</div>
          </div>

          {/* Divider */}
          <div className="w-px self-stretch" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />

          {/* Center: attributes */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-[12px]">
            <InfoRow label="性別" value={MOCK_CUSTOMER.gender} />
            <InfoRow label="生年月日" value={`${MOCK_CUSTOMER.dob}（${MOCK_CUSTOMER.age}歳）`} />
            <InfoRow label="TEL（下4桁）" value={`****-${MOCK_CUSTOMER.tel4}`} />
            <InfoRow label="通知設定" value={MOCK_CUSTOMER.notification} />
          </div>

          {/* Divider */}
          <div className="w-px self-stretch" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />

          {/* Right: stats */}
          <div className="flex gap-6">
            <StatBox label="回数" value={`${MOCK_CUSTOMER.transactionCount}回`} />
            <StatBox label="相利" value={`${MOCK_CUSTOMER.profitRate}%`} positive />
          </div>

          {/* Divider */}
          <div className="w-px self-stretch" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />

          {/* Notes */}
          <div className="flex flex-col gap-1 flex-1 min-w-[160px]">
            <span className="text-[12px] font-medium" style={{ color: '#7f7f7f' }}>特記事項</span>
            <span className="text-[13px]" style={{ color: '#272b2d' }}>
              {MOCK_CUSTOMER.notes || '—'}
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={() => setShowDialog(true)}
            className="ml-auto self-center flex items-center gap-1 px-4 py-2 rounded-lg text-[14px] font-medium text-white flex-shrink-0"
            style={{ backgroundColor: '#095073' }}
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            新規取引
          </button>
        </div>
      </div>

      {/* Transaction history table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ borderBottom: '1px solid #cbd8e5' }}>
              {['日付', '台帳No.', '品目', '明細', '点数', '買取金額', '獲得P', '発行P', '担当者'].map(h => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-[12px] font-medium whitespace-nowrap"
                  style={{ color: '#7f7f7f' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_HISTORY.map((row, i) => (
              <tr
                key={i}
                style={{ borderBottom: '0.5px solid rgba(0,0,0,0.05)', backgroundColor: '#fff' }}
                className="hover:bg-[#eef0f9] transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 text-[12px] whitespace-nowrap" style={{ color: 'rgba(51,51,51,0.6)' }}>{row.date}</td>
                <td className="px-4 py-3 text-[12px] whitespace-nowrap">
                  <a href="#" className="underline" style={{ color: '#0083e1' }}>{row.ledgerNo}</a>
                </td>
                <td className="px-4 py-3 text-[12px]" style={{ color: '#1a1918' }}>{row.category}</td>
                <td className="px-4 py-3 text-[13px]" style={{ color: '#1a1918', maxWidth: '240px' }}>
                  <span className="line-clamp-1">{row.detail}</span>
                </td>
                <td className="px-4 py-3 text-[12px] text-right" style={{ color: '#333' }}>{row.count}</td>
                <td className="px-4 py-3 text-[14px] font-bold text-right" style={{ color: '#333' }}>
                  ¥{row.purchaseAmount.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-[12px] text-right" style={{ color: '#6d6c6a' }}>
                  {row.earnedPoints.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-[12px] text-right" style={{ color: '#6d6c6a' }}>
                  {row.issuedPoints.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-[12px]" style={{ color: '#6d6c6a' }}>{row.staff}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ borderTop: '1px solid #cbd8e5', backgroundColor: '#f9fafb' }}>
              <td colSpan={5} className="px-4 py-3 text-[12px] font-medium" style={{ color: '#7f7f7f' }}>
                合計 ({MOCK_HISTORY.length}件)
              </td>
              <td className="px-4 py-3 text-[14px] font-bold text-right" style={{ color: '#14c784' }}>
                ¥{totalPurchase.toLocaleString()}
              </td>
              <td colSpan={3} />
            </tr>
          </tfoot>
        </table>
      </div>

      {/* New transaction dialog */}
      {showDialog && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          onClick={() => setShowDialog(false)}
        >
          <div
            className="bg-white rounded-xl p-8 flex flex-col gap-6 w-[400px]"
            style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.18)' }}
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-[18px] font-bold text-center" style={{ color: '#272b2d' }}>
              新規登録種別を選択
            </h2>
            <p className="text-[13px] text-center" style={{ color: '#6d6c6a' }}>
              {MOCK_CUSTOMER.name} 様
            </p>
            <div className="flex gap-3">
              <button
                className="flex-1 flex flex-col items-center gap-2 py-5 rounded-lg border-2 font-medium text-[15px] transition-colors hover:bg-[#eef0f9]"
                style={{ borderColor: '#095073', color: '#095073' }}
                onClick={() => { setShowDialog(false); onNewTransaction?.('pawn') }}
              >
                <span className="material-symbols-outlined text-[28px]">archive</span>
                質
              </button>
              <button
                className="flex-1 flex flex-col items-center gap-2 py-5 rounded-lg text-white font-medium text-[15px] transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#095073' }}
                onClick={() => { setShowDialog(false); onNewTransaction?.('purchase') }}
              >
                <span className="material-symbols-outlined text-[28px]">shopping_bag</span>
                買取
              </button>
            </div>
            <button
              className="text-[13px] font-medium py-2"
              style={{ color: '#6d6c6a' }}
              onClick={() => setShowDialog(false)}
            >
              取消
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <>
      <span className="font-medium" style={{ color: '#7f7f7f' }}>{label}</span>
      <span style={{ color: '#272b2d' }}>{value}</span>
    </>
  )
}

function StatBox({ label, value, positive }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-[11px] font-medium" style={{ color: '#7f7f7f' }}>{label}</span>
      <span
        className="text-[20px] font-bold"
        style={{ color: positive ? '#14c784' : '#272b2d' }}
      >
        {value}
      </span>
    </div>
  )
}
