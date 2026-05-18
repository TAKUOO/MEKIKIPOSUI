# ニュースサイドパネル / 本日のトピック

---

## ニュースサイドパネル

**Figma**: [ホーム画面アサイドエリア](https://www.figma.com/design/rla6ZV5ACVzUqqWzuaDglx/Auction-App-Prototype?node-id=21625-196132&m=dev)

### レイアウト

- 右サイドに固定表示
- 背景: `#FFFFFF`
- 左ボーダー: 0.5px solid `rgba(0,0,0,0.15)`
- shadow: `0px 0px 12px 0px rgba(0,0,0,0.04)`
- 幅: 356px

### タブ（ヘッダー）

- 「タイムライン」| 「ニュース」
- 非アクティブ: 12px Medium、`rgba(0,0,0,0.6)`
- アクティブ: 12px Medium、`#0083e1`、border-bottom 2px solid `#0083e1`
- padding: 12px
- ヘッダー下線: 0.5px solid `rgba(0,0,0,0.15)`

### ニューススレッドアイテム

- padding: `px-16 py-12`
- border-b: 0.5px solid `rgba(0,0,0,0.15)`
- gap: 6px（内部）

**各アイテム構成**

```
[カテゴリ名 13px Regular] [スコープ・時間 10px #959595]
[本文テキスト 14px Regular rgba(28,28,28,0.7) ← underline（リンク）]
  ※ リンク付き本文: #0083e1
```

**カテゴリ種別**

| カテゴリ | 用途 |
|---|---|
| お知らせ | 一般的な告知・通知 |
| 盗難情報 | 盗難に関する注意情報 |

**スコープ**

| スコープ | 表示例 |
|---|---|
| 全体 | 全体 |
| 店舗間 | 店舗間 |
| 特定店舗 | （店舗名） |

**タイムスタンプ形式**

- 短縮: `10分前`、`1時間前`、`12時間前`
- 絶対: `YYYY/MM/DD HH:mm`

### 再現チェックリスト

- [ ] アクティブタブに `border-bottom: 2px solid #0083e1`
- [ ] 非アクティブタブのテキストが `rgba(0,0,0,0.6)`
- [ ] 本文テキストに `underline` が適用されている
- [ ] リンク付き本文の色が `#0083e1`
- [ ] アイテム間の区切りが `0.5px solid rgba(0,0,0,0.15)`
- [ ] タイムスタンプが `#959595`

---

## 本日のトピック（ポップアップ）

**Figma**: [本日のトピック](https://www.figma.com/design/rla6ZV5ACVzUqqWzuaDglx/Auction-App-Prototype?node-id=21625-197583&m=dev)

### 表示トリガー

- ホーム画面のサイドバーエリアに表示
- 「{店舗名}・{ユーザー名} YYYY/MM/DD HH:mm」形式のコンテキスト情報を直上に表示
- 「閉じる」ボタン押下で非表示

### レイアウト

| 項目 | 値 |
|---|---|
| 背景色 | `#f1f9ff` |
| 幅 | 322px |
| border-radius | 16px |
| shadow | `0px 0px 12px 0px rgba(116,116,116,0.52)` |
| 位置 | 画面右下（コンテンツ上に重なる絶対配置） |

### 構成

**ヘッダー**

- 「本日のトピック」: 16px Medium、`#272b2d`、中央配置
- 「閉じる」: 12px Medium、右寄せ
- 下線: 0.5px solid `rgba(48,50,67,0.3)`
- padding: `px-24 py-12`

**コンテンツエリア**

- padding: 24px、gap: 16px
- 各トピック: 14px Medium、`#03202f`、underline付きリンク
- 行間: 1.5

### 再現チェックリスト

- [ ] 背景色が `#f1f9ff`
- [ ] border-radiusが16px
- [ ] 「閉じる」押下でポップアップが非表示になる
- [ ] 各トピックがunderline付きリンク（`#03202f`）
