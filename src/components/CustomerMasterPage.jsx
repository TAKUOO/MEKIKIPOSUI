import { useState } from 'react'

const TABS = ['基本情報', '本人確認', '身体特徴', '税務設定', '取引統計']

const MOCK = {
  code: '001234',
  startDate: '2020/03/15',
  name1: '奥野 裕太郎',
  name2: '',
  kana: 'オクノ ユウタロウ',
  gender: '男',
  dob: '1985/04/12',
  zip: '810-0041',
  address1: '福岡県福岡市中央区大名',
  address2: '2-1-1 大名ビル3F',
  tel1: '092-123-5678',
  tel2: '',
  email: 'okuno@example.com',
  occupation: '会社員',
  notification: 'する',
  notes: '店長買い取り分',
  memo: '',
  staffCode: 'S001',
  points: 7160,
  hidden: false,
  // identity
  idType: '運転免許証',
  idIssueDate: '2019/06/01',
  idExpiry: '2029/06/01',
  idNumber: '福岡第123456789000号',
  idIssuer: '福岡県公安委員会',
  idIssuerAddress: '福岡県福岡市博多区東公園7-7',
  // physical
  height: '175',
  build: '普通',
  faceShape: '卵型',
  complexion: '普通',
  eyes: '普通',
  hair: '短髪',
  glasses: 'なし',
  clothing: 'カジュアル',
  physicalOther: '',
  // tax
  taxType: '外税伝票',
  rounding: '四捨五入',
  // stats
  pawnCount: 0,
  pawnRate: '0.0',
  pawnLastVisit: '—',
  purchaseCount: 28,
  purchaseTotal: 716000,
  purchaseLastVisit: '2025/10/10',
  saleCount: 3,
  saleTotal: 85000,
  grossMargin: '62.4',
  cost: 32000,
  createdAt: '2020/03/15 14:32',
  updatedAt: '2025/10/10 11:05',
}

export default function CustomerMasterPage() {
  const [activeTab, setActiveTab] = useState('基本情報')
  const [data, setData] = useState(MOCK)
  const [showImgModal, setShowImgModal] = useState(false)

  const update = (key, val) => setData(d => ({ ...d, [key]: val }))

  return (
    <div className="flex flex-col h-full gap-4">

      {/* Page header */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <h1 className="flex-1 text-[20px] font-bold" style={{ color: '#272b2d' }}>顧客マスタ</h1>
        <span className="text-[12px] px-2 py-1 rounded" style={{ backgroundColor: '#c9ecdf', color: '#117c54' }}>
          コード：{data.code}
        </span>
        <button
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-[14px] font-medium text-white"
          style={{ backgroundColor: '#095073' }}
        >
          <span className="material-symbols-outlined text-[18px]">save</span>
          保存
        </button>
      </div>

      {/* Tabs */}
      <div className="flex-shrink-0 flex border-b" style={{ borderColor: 'rgba(0,0,0,0.15)' }}>
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-5 py-3 text-[13px] font-medium relative"
            style={{
              color: activeTab === tab ? '#0083e1' : 'rgba(0,0,0,0.6)',
              borderBottom: activeTab === tab ? '2px solid #0083e1' : '2px solid transparent',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-auto">

        {/* ── 基本情報 ─────────────────────── */}
        {activeTab === '基本情報' && (
          <div className="grid grid-cols-2 gap-x-10 gap-y-1 max-w-4xl">
            <Section title="顧客情報">
              <Row label="顧客コード">
                <span className="text-[14px] font-bold" style={{ color: '#272b2d' }}>{data.code}</span>
                <span className="text-[11px] ml-2" style={{ color: '#6d6c6a' }}>（自動採番）</span>
              </Row>
              <Row label="取引開始日">
                <Input value={data.startDate} onChange={v => update('startDate', v)} />
              </Row>
              <Row label="氏名（漢字）">
                <Input value={data.name1} onChange={v => update('name1', v)} wide />
              </Row>
              <Row label="氏名2">
                <Input value={data.name2} onChange={v => update('name2', v)} wide />
              </Row>
              <Row label="カナ氏名">
                <Input value={data.kana} onChange={v => update('kana', v)} wide />
              </Row>
              <Row label="性別">
                <Select
                  value={data.gender}
                  options={['男', '女', 'その他']}
                  onChange={v => update('gender', v)}
                />
              </Row>
              <Row label="生年月日">
                <Input value={data.dob} onChange={v => update('dob', v)} />
              </Row>
            </Section>

            <Section title="連絡先">
              <Row label="郵便番号">
                <Input value={data.zip} onChange={v => update('zip', v)} placeholder="000-0000" />
              </Row>
              <Row label="住所1">
                <Input value={data.address1} onChange={v => update('address1', v)} wide />
              </Row>
              <Row label="住所2">
                <Input value={data.address2} onChange={v => update('address2', v)} wide />
              </Row>
              <Row label="TEL1">
                <Input value={data.tel1} onChange={v => update('tel1', v)} placeholder="000-000-0000" />
              </Row>
              <Row label="TEL2">
                <Input value={data.tel2} onChange={v => update('tel2', v)} placeholder="000-000-0000" />
              </Row>
              <Row label="メール">
                <Input value={data.email} onChange={v => update('email', v)} wide />
              </Row>
              <Row label="職業">
                <Input value={data.occupation} onChange={v => update('occupation', v)} />
              </Row>
            </Section>

            <Section title="その他設定">
              <Row label="通知設定">
                <Select value={data.notification} options={['しない', 'する']} onChange={v => update('notification', v)} />
              </Row>
              <Row label="担当CD">
                <Input value={data.staffCode} onChange={v => update('staffCode', v)} placeholder="S001" />
              </Row>
              <Row label="ポイント残高">
                <span className="text-[14px] font-semibold" style={{ color: '#095073' }}>
                  {data.points.toLocaleString()} pt
                </span>
              </Row>
              <Row label="一覧非表示">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.hidden}
                    onChange={e => update('hidden', e.target.checked)}
                    className="w-4 h-4"
                    style={{ accentColor: '#095073' }}
                  />
                  <span className="text-[13px]" style={{ color: '#1a1918' }}>非表示にする</span>
                </label>
              </Row>
            </Section>

            <Section title="メモ・特記事項">
              <Row label="特記事項">
                <textarea
                  value={data.notes}
                  onChange={e => update('notes', e.target.value)}
                  rows={3}
                  className="w-full rounded-lg px-3 py-2 text-[13px] resize-none border"
                  style={{ borderColor: '#e5e5e5', color: '#1a1918' }}
                />
              </Row>
              <Row label="備考">
                <textarea
                  value={data.memo}
                  onChange={e => update('memo', e.target.value)}
                  rows={3}
                  className="w-full rounded-lg px-3 py-2 text-[13px] resize-none border"
                  style={{ borderColor: '#e5e5e5', color: '#1a1918' }}
                />
              </Row>
            </Section>
          </div>
        )}

        {/* ── 本人確認 ─────────────────────── */}
        {activeTab === '本人確認' && (
          <div className="max-w-3xl flex flex-col gap-6">
            <div
              className="flex items-start gap-2 p-3 rounded-lg text-[12px]"
              style={{ backgroundColor: '#fff8e1', color: '#795548', border: '1px solid #ffe082' }}
            >
              <span className="material-symbols-outlined text-[18px]">warning</span>
              個人情報・身分証データは暗号化保存が必須です。取扱いに注意してください。（古物営業法・個人情報保護法）
            </div>

            <Section title="証明書情報">
              <Row label="証明書種別">
                <Select
                  value={data.idType}
                  options={['運転免許証', 'マイナンバーカード', 'パスポート', '健康保険証', 'その他']}
                  onChange={v => update('idType', v)}
                />
              </Row>
              <Row label="証明書No.">
                <Input value={data.idNumber} onChange={v => update('idNumber', v)} wide />
              </Row>
              <Row label="発行日">
                <Input value={data.idIssueDate} onChange={v => update('idIssueDate', v)} placeholder="YYYY/MM/DD" />
              </Row>
              <Row label="有効期限">
                <Input value={data.idExpiry} onChange={v => update('idExpiry', v)} placeholder="YYYY/MM/DD" />
              </Row>
              <Row label="発行者">
                <Input value={data.idIssuer} onChange={v => update('idIssuer', v)} wide />
              </Row>
              <Row label="発行者住所">
                <Input value={data.idIssuerAddress} onChange={v => update('idIssuerAddress', v)} wide />
              </Row>
            </Section>

            <Section title="証明書画像">
              <div className="flex items-start gap-4">
                {/* Placeholder image area */}
                <div
                  className="w-48 h-32 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer border-2 border-dashed"
                  style={{ borderColor: '#cbd8e5', backgroundColor: '#f9fafb' }}
                  onClick={() => setShowImgModal(true)}
                >
                  <span className="material-symbols-outlined text-[32px]" style={{ color: '#7f7f7f' }}>
                    id_card
                  </span>
                  <span className="text-[11px]" style={{ color: '#7f7f7f' }}>タップして表示</span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium text-white"
                    style={{ backgroundColor: '#095073' }}
                  >
                    <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                    撮影・添付
                  </button>
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium border"
                    style={{ borderColor: '#d1d0cd', color: '#1a1918' }}
                  >
                    <span className="material-symbols-outlined text-[16px]">upload</span>
                    ファイルを選択
                  </button>
                  <span className="text-[11px]" style={{ color: '#6d6c6a' }}>
                    マイナンバーカードICチップ読取にも対応
                  </span>
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* ── 身体特徴 ─────────────────────── */}
        {activeTab === '身体特徴' && (
          <div className="max-w-2xl flex flex-col gap-4">
            <div
              className="flex items-start gap-2 p-3 rounded-lg text-[12px]"
              style={{ backgroundColor: '#fff3e0', color: '#e65100', border: '1px solid #ffcc80' }}
            >
              <span className="material-symbols-outlined text-[18px]">security</span>
              防犯・本人確認補助目的のみ使用。取扱いに注意してください。
            </div>
            <Section title="身体的特徴">
              <Row label="身長">
                <div className="flex items-center gap-2">
                  <Input value={data.height} onChange={v => update('height', v)} placeholder="170" />
                  <span className="text-[13px]" style={{ color: '#6d6c6a' }}>cm</span>
                </div>
              </Row>
              {[
                { key: 'build',      label: '体形',   opts: ['細め', '普通', '太め', 'がっしり'] },
                { key: 'faceShape',  label: '顔型',   opts: ['卵型', '丸型', '面長', '四角'] },
                { key: 'complexion', label: '顔色',   opts: ['普通', '色白', '浅黒い', '赤み'] },
                { key: 'eyes',       label: '目つき',  opts: ['普通', '細め', '大きめ', '鋭い'] },
                { key: 'hair',       label: '髪型',   opts: ['短髪', '中髪', '長髪', '坊主', 'その他'] },
                { key: 'glasses',    label: 'めがね',  opts: ['なし', 'あり', 'サングラス'] },
                { key: 'clothing',   label: '服装',   opts: ['カジュアル', 'スーツ', 'スポーツ', 'その他'] },
              ].map(({ key, label, opts }) => (
                <Row key={key} label={label}>
                  <Select value={data[key]} options={opts} onChange={v => update(key, v)} />
                </Row>
              ))}
              <Row label="その他">
                <Input value={data.physicalOther} onChange={v => update('physicalOther', v)} wide placeholder="特記事項" />
              </Row>
            </Section>
          </div>
        )}

        {/* ── 税務設定 ─────────────────────── */}
        {activeTab === '税務設定' && (
          <div className="max-w-xl">
            <Section title="税区分">
              <Row label="税区分">
                <div className="flex gap-3 flex-wrap">
                  {['外税伝票', '内税明細', '外税明細', '非課税'].map(opt => (
                    <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="taxType"
                        checked={data.taxType === opt}
                        onChange={() => update('taxType', opt)}
                        style={{ accentColor: '#095073' }}
                      />
                      <span className="text-[13px]" style={{ color: '#1a1918' }}>{opt}</span>
                    </label>
                  ))}
                </div>
              </Row>
              <Row label="端数処理">
                <div className="flex gap-3">
                  {['四捨五入', '切捨', '切上'].map(opt => (
                    <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="rounding"
                        checked={data.rounding === opt}
                        onChange={() => update('rounding', opt)}
                        style={{ accentColor: '#095073' }}
                      />
                      <span className="text-[13px]" style={{ color: '#1a1918' }}>{opt}</span>
                    </label>
                  ))}
                </div>
              </Row>
            </Section>
          </div>
        )}

        {/* ── 取引統計 ─────────────────────── */}
        {activeTab === '取引統計' && (
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
              <StatCard label="買取回数" value={`${data.purchaseCount}回`} />
              <StatCard label="買取累計" value={`¥${data.purchaseTotal.toLocaleString()}`} positive />
              <StatCard label="粗利率" value={`${data.grossMargin}%`} positive />
              <StatCard label="質入回数" value={`${data.pawnCount}回`} />
              <StatCard label="流率" value={`${data.pawnRate}%`} />
              <StatCard label="売上回数" value={`${data.saleCount}回`} />
            </div>

            <Section title="買取">
              <Row label="買取回数"><StatVal>{data.purchaseCount}回</StatVal></Row>
              <Row label="買取累計額"><StatVal positive>¥{data.purchaseTotal.toLocaleString()}</StatVal></Row>
              <Row label="買取最終訪問日"><StatVal>{data.purchaseLastVisit}</StatVal></Row>
            </Section>

            <Section title="質入">
              <Row label="質入回数"><StatVal>{data.pawnCount}回</StatVal></Row>
              <Row label="流率"><StatVal>{data.pawnRate}%</StatVal></Row>
              <Row label="質入最終訪問日"><StatVal>{data.pawnLastVisit}</StatVal></Row>
            </Section>

            <Section title="売上">
              <Row label="売上回数"><StatVal>{data.saleCount}回</StatVal></Row>
              <Row label="売上額"><StatVal>¥{data.saleTotal.toLocaleString()}</StatVal></Row>
              <Row label="粗利率"><StatVal positive>{data.grossMargin}%</StatVal></Row>
              <Row label="原価"><StatVal>¥{data.cost.toLocaleString()}</StatVal></Row>
            </Section>

            <Section title="レコード情報">
              <Row label="登録日時"><StatVal>{data.createdAt}</StatVal></Row>
              <Row label="最終更新"><StatVal>{data.updatedAt}</StatVal></Row>
            </Section>
          </div>
        )}
      </div>

      {/* ID image modal */}
      {showImgModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={() => setShowImgModal(false)}
        >
          <div
            className="bg-white rounded-xl p-6 flex flex-col gap-4 w-[480px]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-semibold" style={{ color: '#272b2d' }}>証明書画像</h3>
              <button onClick={() => setShowImgModal(false)}>
                <span className="material-symbols-outlined text-[20px]" style={{ color: '#6d6c6a' }}>close</span>
              </button>
            </div>
            <div
              className="w-full h-56 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#e6e6e6' }}
            >
              <span className="material-symbols-outlined text-[48px]" style={{ color: '#7f7f7f' }}>id_card</span>
            </div>
            <p className="text-[11px] text-center" style={{ color: '#6d6c6a' }}>
              ⚠️ 個人情報保護法に基づき暗号化保存されています
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Sub-components ──────────────────────────────────────────

function Section({ title, children }) {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <h3 className="text-[13px] font-semibold pb-1" style={{ color: '#095073', borderBottom: '1px solid #cbd8e5' }}>
        {title}
      </h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

function Row({ label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-[12px] font-medium w-28 flex-shrink-0 pt-1.5" style={{ color: '#7f7f7f' }}>
        {label}
      </span>
      <div className="flex-1">{children}</div>
    </div>
  )
}

function Input({ value, onChange, wide, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`rounded-lg px-3 py-1.5 text-[13px] border ${wide ? 'w-full' : 'w-48'}`}
      style={{ borderColor: '#e5e5e5', color: '#1a1918', outline: 'none' }}
    />
  )
}

function Select({ value, options, onChange }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="rounded-lg px-3 py-1.5 text-[13px] border w-48"
      style={{ borderColor: '#e5e5e5', color: '#1a1918', outline: 'none' }}
    >
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  )
}

function StatCard({ label, value, positive }) {
  return (
    <div
      className="rounded-lg p-4 flex flex-col gap-1"
      style={{ backgroundColor: '#efeff6' }}
    >
      <span className="text-[11px] font-medium" style={{ color: '#7f7f7f' }}>{label}</span>
      <span
        className="text-[18px] font-semibold"
        style={{ color: positive ? '#14c784' : '#272b2d' }}
      >
        {value}
      </span>
    </div>
  )
}

function StatVal({ children, positive }) {
  return (
    <span
      className="text-[14px] font-medium"
      style={{ color: positive ? '#14c784' : '#1a1918' }}
    >
      {children}
    </span>
  )
}
