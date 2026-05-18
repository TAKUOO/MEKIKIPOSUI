# MEKIKIPOSUI — DESIGN.md

> **目的**  
> エンジニアがFigmaデザインを実装する際の唯一の参照先。  
> 以下の2点を特に重視して記述しています：
> 1. **Figmaデザインの再現チェック** — 各画面・コンポーネントの仕様を定義
> 2. **デザインシステムへの準拠チェック** — 新規画面作成時のルールと検証基準

---

## ドキュメント構成

| ファイル | 内容 | 主な用途 |
|---|---|---|
| [design/foundations.md](design/foundations.md) | カラー・タイポグラフィ・スペーシング・レイアウト | デザインシステム準拠チェック |
| [design/components.md](design/components.md) | ボタン・バッジ・トースト等の共通コンポーネント | 再現チェック・準拠チェック |
| [design/screens/items.md](design/screens/items.md) | アイテム一覧・条件検索モーダル | Figma再現チェック |
| [design/screens/stores.md](design/screens/stores.md) | ストア管理・店舗作成ドロワー | Figma再現チェック |
| [design/screens/employees.md](design/screens/employees.md) | 従業員管理 | Figma再現チェック |
| [design/screens/news.md](design/screens/news.md) | ニュースサイドパネル・本日のトピック | Figma再現チェック |

---

## 1. Figmaデザイン再現チェックリスト

実装後、各画面ファイルのチェックリストと合わせて確認してください。

### 共通レイアウト

- [ ] サイドバー幅が237pxで固定されている
- [ ] サイドバー背景色が `#efeff6`
- [ ] コンテンツエリアが `left: calc(16.67% + 13px)` から始まっている
- [ ] アクティブなナビアイテムの背景が `#dbdbe8`、テキストが `#095073`
- [ ] アクティブなナビアイテムに `border-radius: 8px`
- [ ] ナビアイコンが24×24pxのGoogle Material Icons

### アイテム一覧 → [詳細](design/screens/items.md)

- [ ] テーブルヘッダー下線が `1px solid #cbd8e5`
- [ ] 通常行の区切りが `border-b rgba(0,0,0,0.05)`
- [ ] 選択行の背景が `#eef0f9`
- [ ] 商品名がリンク（`#0083e1`、underline付き）
- [ ] 程度ラベルが `#c39251` Bold
- [ ] 粗利プラスが `#14c784`（`+` 記号付き）
- [ ] 粗利マイナスが `#dc4749`（`-` 記号付き）
- [ ] バルクアクションバーが `bg-[#eef0f9]`、`border-radius: 10px`
- [ ] 「一括削除」ボタンのボーダーと文字色が `#dd5d37`

### ストア管理 → [詳細](design/screens/stores.md)

- [ ] ストアカードの `border-radius` が12px（12.565px）
- [ ] カード枠が `1px solid #f2f2f2`
- [ ] 画像プレースホルダーが `bg-[#e6e6e6]`
- [ ] サービスタグが正しい背景色（買取:`#3d8a5a`、質:`#d89575`、小売:`#6d6c6a`）
- [ ] プライベートバッジが `bg-[#1a1a1a]` に鍵アイコン付き

### 条件検索モーダル → [詳細](design/screens/items.md#条件検索モーダル)

- [ ] モーダル幅が800px
- [ ] 2列グリッドレイアウト（ラベル80px + フィールド264px）
- [ ] 店舗ドロップダウンがチェックボックスリスト形式
- [ ] 「この条件で検索」がプライマリボタン（`#095073`）

### 従業員管理 → [詳細](design/screens/employees.md)

- [ ] 管理者バッジが `bg-[#c9ecdf]`、`text-[#117c54]`
- [ ] スタッフバッジが `bg-[#f2f2f2]`、`text-[#1a1918]`
- [ ] アクティブの丸インジケーターが `#117c54`、8×8px
- [ ] 非アクティブの丸インジケーターが `#a6a6a6`、8×8px

### ニュースサイドパネル → [詳細](design/screens/news.md)

- [ ] アクティブタブに `border-bottom: 2px solid #0083e1`
- [ ] 本文テキストに `underline` が適用されている
- [ ] リンク付き本文の色が `#0083e1`
- [ ] アイテム間の区切りが `0.5px solid rgba(0,0,0,0.15)`

### トースト通知 → [詳細](design/components.md#c8-トースト通知)

- [ ] 成功トーストのボーダーが `rgba(77,155,106,0.19)`
- [ ] 成功アイコン背景が `#e8f5ed`（40×40px 丸）
- [ ] エラートーストのボーダーが `rgba(220,71,73,0.25)`
- [ ] エラーアイコン背景が `#fdecea`（40×40px 丸）、アイコン色が `#dc4749`
- [ ] タイトルが14px SemiBold、`#1a1918`
- [ ] 本文が12px Regular、`#6d6c6a`
- [ ] トースト幅が480px、border-radiusが12px

---

## 2. 新規画面デザインシステム準拠チェックリスト

新たに画面・コンポーネントを作成した際は、以下のルールへの準拠を確認してください。  
各トークン・コンポーネントの詳細は → [foundations.md](design/foundations.md) / [components.md](design/components.md)

### カラー

- [ ] [foundations.md カラートークン](design/foundations.md#1-カラー)に定義されていない新しい色を使っていない
- [ ] テキストカラーが用途に対応するトークンから選択されている
- [ ] ポジティブな値には `#14c784`、ネガティブには `#dc4749`
- [ ] 危険な操作（削除等）には `#dd5d37`
- [ ] プライマリCTAボタンは必ず `#095073` 背景

### タイポグラフィ

- [ ] 欧文フォントに `Inter`、和文に `Noto Sans JP` を使用している
- [ ] テキストスタイルが[定義済みスタイル](design/foundations.md#2-タイポグラフィ)の中から選択されている
- [ ] ページタイトルは20px Bold（`#272b2d`）
- [ ] テーブルヘッダーラベルは12px Medium（`#7f7f7f`）
- [ ] 新しいフォントサイズ・ウェイトを独自追加していない

### スペーシング

- [ ] padding / margin が[スペーシングトークン](design/foundations.md#3-スペーシング)の倍数（4の倍数）を基本としている
- [ ] テーブル行のpaddingは `p-16`（16px全方向）
- [ ] ナビアイテムのpaddingは `px-8 py-10`

### コンポーネント

- [ ] ボタンは[C4 / C5](design/components.md#c4-プライマリボタン)の定義に従っている（新バリエーション追加禁止）
- [ ] バッジ・ステータス表示は[C6](design/components.md#c6-ステータスバッジ)の定義に従っている
- [ ] トースト通知は[C8](design/components.md#c8-トースト通知)の仕様のみ使用（独自スタイル禁止）
- [ ] 新規モーダルのレイアウト幅は800px以内に収める

### レイアウト

- [ ] 新規画面のキャンバスは1440×1024pxを基準としている
- [ ] サイドバーは共通コンポーネントをそのまま使用している（独自変更禁止）
- [ ] コンテンツエリアはサイドバー（237px）の右から始まっている

### アイコン

- [ ] すべてのアイコンにGoogle Material Iconsを使用している
- [ ] サイズはナビ用24×24px、小アイコン用13〜15px、ボタン用11.667px（±1px許容）
- [ ] 独自SVGアイコンを勝手に追加していない

### インタラクション・状態

- [ ] ホバー・選択状態のテーブル行は `bg-[#eef0f9]`
- [ ] 非活性状態のテキストは `#a6a6a6`
- [ ] リンクテキストは `#0083e1`（underline付き）

---

## Figmaファイルリンク

| 画面名 | Figma URL |
|---|---|
| アイテム一覧 | https://www.figma.com/design/rla6ZV5ACVzUqqWzuaDglx/Auction-App-Prototype?node-id=21222-246827&m=dev |
| ストア管理（一覧） | https://www.figma.com/design/rla6ZV5ACVzUqqWzuaDglx/Auction-App-Prototype?node-id=22351-206426&m=dev |
| 店舗作成（ドロワー） | https://www.figma.com/design/rla6ZV5ACVzUqqWzuaDglx/Auction-App-Prototype?node-id=22351-206955&m=dev |
| 条件検索モーダル | https://www.figma.com/design/rla6ZV5ACVzUqqWzuaDglx/Auction-App-Prototype?node-id=22635-323281&m=dev |
| 本日のトピック | https://www.figma.com/design/rla6ZV5ACVzUqqWzuaDglx/Auction-App-Prototype?node-id=21625-197583&m=dev |
| ニュースサイドパネル | https://www.figma.com/design/rla6ZV5ACVzUqqWzuaDglx/Auction-App-Prototype?node-id=21625-196132&m=dev |
| 従業員管理 | https://www.figma.com/design/rla6ZV5ACVzUqqWzuaDglx/Auction-App-Prototype?node-id=22360-306153&m=dev |
