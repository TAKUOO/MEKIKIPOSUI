# Foundations — デザイントークン & レイアウト

> カラー・タイポグラフィ・スペーシング・ボーダー・レイアウトの定義。  
> **デザインシステム準拠チェック**の一次参照先。新規画面・コンポーネントを作成する際は必ずここに定義されたトークンを使用すること。

---

## 1. カラー

### プライマリ・インタラクション

| トークン名 | HEX | 用途 |
|---|---|---|
| `color-primary` | `#095073` | プライマリCTAボタン背景 |
| `color-link` | `#0083e1` | リンクテキスト、アクティブナビ、アクティブタブ下線 |
| `color-checkbox-active` | `#1c64f2` | チェックボックス選択時 |

### テキスト

| トークン名 | HEX | 用途 |
|---|---|---|
| `color-text-primary` | `#272b2d` | ページタイトル、ナビテキスト |
| `color-text-body` | `#1a1918` | テーブル行・カード本文 |
| `color-text-table-value` | `#333` | テーブル数値（仕入額・売上額） |
| `color-text-secondary` | `#6d6c6a` | サブテキスト（住所・補足） |
| `color-text-muted` | `#7f7f7f` | テーブルヘッダーラベル |
| `color-text-caption` | `#888` | サマリーバーラベル |
| `color-text-placeholder` | `#9c9b99` | プレースホルダー、アイコンラベル |
| `color-text-timestamp` | `#959595` | ニュースのタイムスタンプ |
| `color-text-table-sub` | `rgba(51,51,51,0.6)` | テーブル補助テキスト（会社名・日付） |
| `color-text-news-body` | `rgba(28,28,28,0.7)` | ニューススレッド本文 |

### 背景・サーフェス

| トークン名 | HEX | 用途 |
|---|---|---|
| `color-bg-white` | `#FFFFFF` | メインコンテンツ背景、カード |
| `color-bg-sidebar` | `#efeff6` | サイドバー背景 |
| `color-bg-nav-active` | `#dbdbe8` | アクティブナビアイテム背景 |
| `color-bg-row-selected` | `#eef0f9` | テーブル選択行 / バルクアクションバー |
| `color-bg-status-neutral` | `#f2f2f2` | 「スタッフ」バッジ / チェックボックス未選択 |
| `color-bg-card-image` | `#e6e6e6` | ストアカード画像プレースホルダー |
| `color-bg-topic-popup` | `#f1f9ff` | 本日のトピックポップアップ背景 |
| `color-bg-toast-icon-success` | `#e8f5ed` | トーストアイコン背景（成功） |
| `color-bg-toast-icon-error` | `#fdecea` | トーストアイコン背景（エラー） |
| `color-bg-admin-badge` | `#c9ecdf` | 管理者バッジ背景 |

### セマンティックカラー

| トークン名 | HEX | 用途 |
|---|---|---|
| `color-positive` | `#14c784` | 粗利プラス表示 |
| `color-negative` | `#dc4749` | 粗利マイナス表示 |
| `color-danger` | `#dd5d37` | 削除ボタン（一括削除） |
| `color-grade` | `#c39251` | 品質程度ラベル（程度：N等） |
| `color-admin-text` | `#117c54` | 管理者バッジ文字・アクティブ文字 |
| `color-inactive-text` | `#a6a6a6` | 非アクティブ文字 |

### サービスタグ

| トークン名 | HEX | 用途 |
|---|---|---|
| `color-tag-kaitori` | `#3d8a5a` | 買取バッジ |
| `color-tag-shichi` | `#d89575` | 質バッジ |
| `color-tag-kouri` | `#6d6c6a` | 小売バッジ |
| `color-tag-private` | `#1a1a1a` | プライベートバッジ |

### ボーダー

| トークン名 | HEX / RGBA | 用途 |
|---|---|---|
| `color-border-table-header` | `#cbd8e5` | テーブルヘッダー下線 |
| `color-border-row` | `rgba(0,0,0,0.05)` | テーブル行区切り |
| `color-border-card` | `#f2f2f2` | ストアカード枠 |
| `color-border-toast-success` | `rgba(77,155,106,0.19)` | 成功トースト枠 |
| `color-border-toast-error` | `rgba(220,71,73,0.25)` | エラートースト枠 |
| `color-border-news` | `rgba(0,0,0,0.15)` | ニューススレッド区切り |
| `color-border-input` | `#e5e5e5` | 入力フィールド枠 |
| `color-border-sidebar` | `rgba(48,50,67,0.3)` | ポップアップ内区切り |

---

## 2. タイポグラフィ

### フォントファミリー

- 欧文: `Inter`（Regular / Medium / SemiBold / Bold）
- 和文: `Noto Sans JP`（Regular / Bold）
- 欧文と和文は同一テキスト要素内で組み合わせて使用する（例: `font-family: 'Inter', 'Noto Sans JP', sans-serif`）

### テキストスタイル定義

| スタイル名 | サイズ | ウェイト | 行間 | 用途 |
|---|---|---|---|---|
| `text-page-title` | 20px | Bold (700) | normal | ページタイトル |
| `text-brand-name` | 16px | Bold (700) | 1.5 | ブランド名（MEKIKI.co.ltd） |
| `text-nav-item` | 14px | Medium (500) | 1.5 | ナビゲーション項目 |
| `text-body-primary` | 14px | Medium (500) | normal | テーブル主テキスト、商品名 |
| `text-body-bold` | 14px | Bold (700) | normal | テーブル数値 |
| `text-body-secondary` | 14px | Regular (400) | normal | ストアカード本文 |
| `text-store-name` | 14.136px | SemiBold (600) | normal | ストアカード店舗名 |
| `text-summary-count` | 18px | SemiBold (600) | normal | サマリーバー件数 |
| `text-summary-value` | 14px | SemiBold (600) | normal | サマリーバー金額 |
| `text-summary-label` | 11px | Medium (500) | normal | サマリーバーラベル |
| `text-table-header` | 12px | Medium (500) | normal | テーブルヘッダー |
| `text-table-sub` | 12px | Medium (500) | normal | テーブル補助テキスト |
| `text-badge` | 12px | Medium (500) | normal | ステータスバッジ |
| `text-grade` | 12px | Bold (700) | normal | 品質程度（程度：N等） |
| `text-tag` | 8.638px | SemiBold (600) | normal | サービスタグ（買取・質・小売） |
| `text-product-code` | 12px | Medium (500) | normal | 商品コード |
| `text-caption` | 10px | Regular (400) | normal | ストアカード補足（住所・時間） |
| `text-caption-sm` | 10px | Medium (500) | normal | ストア在庫・売上ラベル |
| `text-timestamp` | 10px | Regular (400) | normal | ニュースタイムスタンプ |
| `text-news-category` | 13px | Regular (400) | 20px | ニュースカテゴリ名 |
| `text-news-body` | 14px | Regular (400) | 20px | ニュース本文 |
| `text-toast-title` | 14px | SemiBold (600) | normal | トーストタイトル |
| `text-toast-body` | 12px | Regular (400) | normal | トースト本文 |
| `text-btn-primary` | 14px | Medium (500) | normal | プライマリボタン |
| `text-bulk-selected` | 13px | SemiBold (600) | normal | バルクアクション選択件数 |
| `text-switch-label` | 12px | Medium (500) | normal | 切替えリンク |

---

## 3. スペーシング

| トークン名 | 値 | 用途 |
|---|---|---|
| `space-2` | 2px | バッジ上下padding |
| `space-4` | 4px | ナビアイコン-テキスト間、バッジ内gap |
| `space-6` | 6px | ストアカード内gap |
| `space-8` | 8px | CTAボタン上下padding、ストアカード詳細pt |
| `space-10` | 10px | ナビアイテム上下padding |
| `space-12` | 12px | テーブルヘッダー上下padding、トーストicon |
| `space-16` | 16px | テーブル行padding、サイドバー左右padding、gap |
| `space-20` | 20px | トースト左右padding |
| `space-24` | 24px | サイドバー上下padding、トピックpopup padding |
| `space-28` | 28px | モーダルタイトル上padding |
| `space-30` | 30px | コンテンツエリア内gap |
| `space-32` | 32px | モーダル左右内側padding |

---

## 4. ボーダー・角丸

| トークン名 | 値 | 用途 |
|---|---|---|
| `radius-sm` | 4px | 商品サムネイル角丸、チェックボックス |
| `radius-md` | 8px | CTAボタン、ナビアクティブ背景、ドロップダウン |
| `radius-badge` | 30px | ステータスバッジ（pill型） |
| `radius-card` | 12.565px | ストアカード（≒12px） |
| `radius-toast` | 12px | トースト通知 |
| `radius-popup` | 16px | 本日のトピックポップアップ |
| `radius-modal` | — | モーダルはシャドウで区切り（角丸なし） |
| `radius-tag` | 4.712px | サービスタグ |

**ボーダー幅**

| 用途 | 値 |
|---|---|
| テーブルヘッダー下線 | 1px solid `#cbd8e5` |
| テーブル行区切り | 0.5px solid `rgba(0,0,0,0.05)` |
| ストアカード枠 | 1px solid `#f2f2f2` |
| トースト枠（成功） | 1px solid `rgba(77,155,106,0.19)` |
| トースト枠（エラー） | 1px solid `rgba(220,71,73,0.25)` |
| ニュース区切り | 0.5px solid `rgba(0,0,0,0.15)` |
| アクティブタブ下線 | 2px solid `#0083e1` |

---

## 5. レイアウト

### キャンバスサイズ

| 項目 | 値 |
|---|---|
| 画面幅 | 1440px |
| 画面高さ | 1024px（基準） |

### グリッド構造

```
┌─────────────────────────────────────────────────────────┐
│ Sidebar (237px)  │  Content Area (1171px)               │
│  px-16 py-24     │  left: calc(16.67% + 13px)           │
│                  │  top: 16px                            │
└─────────────────────────────────────────────────────────┘
```

- **サイドバー幅**: 237px（固定）
- **コンテンツエリア開始位置**: `left: calc(16.67% + 13px)`（= 約250px）
- **コンテンツエリア幅**: 1171px
- **コンテンツエリア上マージン**: top: 16px
