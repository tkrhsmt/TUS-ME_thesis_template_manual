---
title: 表記に関するあれこれ
description: 書体、記号、引用符、Unicode文字の扱い
sidebar:
  order: 5
---

## 書体

LaTeX では文書中で書体を変える命令が豊富に用意されています． ここで，通常の文章中で書体を変える命令と数式環境中で書体を変える命令は異なるという点に注意してください． よく LaTeX 初心者が混同して使用しているケースを見かけるので気をつけましょう． また，この節で述べる書体変更の命令は全体のごく一部を抜粋したものです． 実際にはもっと多くの命令がありますが，機械系学生にとって使用頻度が高いものを選んで載せています．

### 通常の文章中で書体を変える方法

通常の文章中で書体を変える方法の一部を下に示します． 何もしなければ本文は直立体で表示されます． 強調する場合は **Boldface** 体や *Italic* 体に変更します． これらは本来欧文書体に対して適用する命令です． 和文書体に関してはここでは **ゴシック** 体を紹介します． ただし，普通に学位論文を書いている分には文章中で書体を変える場面はあまりないと思います．

<div class="tcolorbox">

| **書体クラス** | **コマンド** | **出力** |
|:---|:---|:---|
| 直立（roman, upright） | `\textrm{Roman}` | <span class="roman">Roman</span> |
| ボールド（boldface） | `\textbf{Boldface}` | **Boldface** |
| イタリック（italic） | `\textit{Italic}` | *Italic* |
| サンセリフ（sans-serif） | `\textsf{Sans-serif}` | <span class="sans-serif">Sans-serif</span> |
| タイプライター（typewriter） | `\texttt{Typewriter}` | `Typewriter` |
| ゴシック（gothic） | `\textbf{ゴシック}` | **ゴシック** |

</div>

### 数式環境中で書体を変える方法

次に数式環境中で書体を変える方法の一部を下に示します． 普通に学位論文を書いている場合であっても数式環境中で書体を変える場面はそれなりにあるはずです． カリグラフィーは Hamiltonian $`\mathcal{H}`$（`\mathcal{H}`）や Lagrangian $`\mathcal{L}`$（`\mathcal{L}`）で使います． 黒板太文字は実数全体の集合 $`\mathbb{R}`$（`\mathbb{R}`）や整数全体の集合 $`\mathbb{Z}`$（`\mathbb{Z}`）を表す際に使用します． また，ベクトルをボールドイタリック体で表記することがありますが，LaTeX 標準ではボールドイタリック体がサポートされていません． そのため，レガシー LaTeX では `bm` パッケージという外部のパッケージをわざわざ読み込んで `\bm{abcABC123}` とする必要がありました． この学位論文テンプレートではモダン LaTeX で使われる `unicode-math` を使用しており，`unicode-math` では従来の `\math..` というコマンド以外に `\sym..` というコマンドが用意されています． ボールドイタリック体は `unicode-math` に標準で存在し，`\symbfit{}` コマンドを使用すると出力できます． ただし，`unicode-math` に対応していない LaTeX テンプレートはまだまだ多く存在しているので，そのようなテンプレートを使用する際は自分で `bm` パッケージを読み込む必要があります．

<div class="tcolorbox">

| **書体クラス** | **コマンド** | **出力** |
|:---|:---|:---|
| 直立（roman, upright） | `\mathrm{abcABC123}` | $`\mathrm{abcABC123}`$ |
|  | `\symup{abcABC123}` | $`\symup{abcABC123}`$ |
| ボールド（boldface） | `\mathbf{abcABC123}` | $`\mathbf{abcABC123}`$ |
|  | `\symbfup{abcABC123}` | $`\symbfup{abcABC123}`$ |
| イタリック（italic） | `\mathit{abcABC123}` | $`\mathit{abcABC123}`$ |
|  | `\symit{abcABC123}` | $`\symit{abcABC123}`$ |
| カリグラフィー（calligraphy） | `\mathcal{ABCDEFG}` | $`\mathcal{ABCDEFG}`$ |
|  | `\symcal{abcABC123}` | $`\symcal{ABCDEFG}`$ |
| 黒板太文字（blackboard bold） | `\mathbb{abcABC123}` | $`\mathbb{abcABC123}`$ |
|  | `\symbb{abcABC123}` | $`\symbb{abcABC123}`$ |
| ボールドイタリック（bold italic） | `\symbfit{abcABC123}` | $`\symbfit{abcABC123}`$ |

</div>

基本的に数式環境中のアルファベットは *Italic* 体で，数字は直立体で表示されます． 日本機械学会の規定では無次元数を含め物理量は全て *Italic* 体で記述するように決められているので，物理量自体を直立体にすることはありません． ただし，添え字などで直立体にすることは考えられます． 飽和温度を $`T_\mathrm{sat}`$ と表記する場合には `$T_\mathrm{sat}$` と入力します．

それでは，数式中のアルファベットは *Italic* 体なのになぜ `\mathit{}` コマンドが用意されているのでしょうか．

<div class="tcolorbox">

<table>
<thead>
<tr>
<th style="text-align: left;"><strong>コマンド</strong></th>
<th style="text-align: left;"><strong>出力</strong></th>
<th style="text-align: left;"><strong>コマンド</strong></th>
<th style="text-align: left;"><strong>出力</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><code>$diff$</code></td>
<td style="text-align: left;"><p><span class="math inline"><em>d</em><em>i</em><em>f</em><em>f</em></span></p>
<hr /></td>
<td style="text-align: left;"><code>$\mathit{diff}$</code></td>
<td style="text-align: left;"><span class="math inline"><em>d</em><em>i</em><em>f</em><em>f</em></span></td>
</tr>
<tr>
<td style="text-align: left;"><code>$II$</code></td>
<td style="text-align: left;"><span class="math inline"><em>I</em><em>I</em></span></td>
<td style="text-align: left;"><code>$\mathit{II}$</code></td>
<td style="text-align: left;"><span class="math inline"><em>I</em><em>I</em></span></td>
</tr>
</tbody>
</table>

</div>

このように，`$diff$` とするとそれぞれの文字が別の変数として扱われてしまいます． `$II$` の場合も同様です． そのため，複数文字から成る変数は `\mathit{}` で全て指定してあげるのが理想です． 新しいコマンドとして `sty` ファイル内に `\newcommand{\diff}{\mathit{diff}}` のように定義してあげると `\diff` と打てばいいだけなので楽です．

また，数式中で
```latex
\odv{x}{t} < 0 \quad \text{for all} \quad t > 0
```
のように，数式中に単語を挿入したい場合は `\text{}` コマンドを使用して

        \odv{x}{t} < 0 \quad \text{for all} \quad t > 0

とすることで表現できます． ここで `\mathrm{for all}` のようにすると
```latex
\odv{x}{t} < 0 \quad \mathrm{for all} \quad t > 0
```
となり，for と all の間にスペースが入りません．

## 記号の用法

記号を適切に使用していない学位論文をよく見かけるので，学術論文等での使用が想定される各種記号の使用方法を記載します． 使い方は研究分野やその人の思想，入力環境などにも依存するので明確な規則はありませんが，大まかな目安として考えてください．

### 横棒

- ハイフン（hyphen, -）

  - Unicode: U+002D（厳密にはハイフンマイナス）

  - LaTeX での入力：`-`

  - 一般的な JIS キーボードであれば「ほ」や「=」があるキーを押すと出てくる．

  - 英語などで見られる複合的な単語（例：large-scale structure）．

  - 大小関係の無い数字の接続（例：郵便番号など，278-8510）．

  - 厳密にはハイフン（hyphen, U+2010）ではなくハイフンマイナス（hyphen-minus）．一般的なキーボードから入力できるものはハイフンとマイナスの両方に用いられることがあるハイフンマイナスである．

- en ダッシュ（en dash, –）

  - Unicode: U+2013

  - LaTeX での入力：`--`（ハイフン二つ）

  - 複数の人物等を繋ぐ場合（例：Navier–Stokes equation）．

  - 大小関係のある数字を繋ぐ場合（例：Figs. 2–4, $`\Re = 150`$–$`180`$）．日本語の文章では「～」の使用（Figs. 2～4, $`\Re = 150`$～$`180`$）をよく見るが，科学的な文章では不適切．en ダッシュを使うように．また，数式環境中で `$--$` と入力するとマイナスが二つ出力されてしまう（$`--`$）ので，一度数式環境を抜けて `$150$--$180$` とするか `$150\text{--}180$` とすること．

  - 図の軸ラベルどうし（$`x`$–$`y`$ 平面）．`$x-y$` としている例をよく見るがこれはマイナスとして処理されるので見た目が $`x-y`$ となってしまう．

- em ダッシュ（em dash, —）

  - Unicode: U+2014

  - LaTeX での入力：`---`（ハイフン三つ）

  - 欧文中で文の区切りなどに用いる．理科系の文章ではあまり使用しない．

  - 欧文中で説明や副題を設ける場合に使用．

- 水平バー（horizontal bar, ―）

  - Unicode: U+2015

  - LaTeX での入力：`―`（直接入力する場合），`\symbol{"2015}`（Unicode で指定して入力する場合）

  - 和文中で説明や副題を設ける場合に二つ並べ，倍角ダッシュとして使用する．環境によっては間に空白が入ってしまうので工夫が必要（例：「〇〇に関する研究 ―△△の観点から―」）．このテンプレートでは `\――` で空白を作らずに出力できる．

- マイナス（minus, $`-`$）

  - Unicode: U+2212

  - LaTeX での入力：`$-$`

  - 数式で減算・差を表す際に使用．数式環境に入れ忘れてハイフンで出力されているケースをよく見るので注意．

### 引用符

例えば次のような文を出力したい場合どのように入力すればいいでしょうか．

> “I’m a student!” ‘I’m a student!’

正解は

> ``` ``I'm a student!'' ``` `` `I'm a student!' ``

です． 引用や強調の際に使用する引用符を LaTeX で出力する際は，左引用符を `` ` `` で[^1]，右引用符を `'` で囲います[^2]． 単一引用符 `` `' `` の場合も二重引用符 ``` ``'' ``` の場合も同様です． キーボードにデフォルトで搭載されている二重引用符 `"` で囲って `"I'm a student!"` のようにはしないので注意してください． 仮に

> `"I'm a student!"` `'I'm a student!'`

と入力したらどのように出力されるでしょうか．

> "I’m a student!" ’I’m a student!’

このようになりました． 明らかに変ですよね． 気をつけましょう． また，日本機械学会の規定では文献リストの各文献タイトルを引用符で括ることはしないので問題ありませんが，海外ジャーナルなどでは文献タイトルを二重引用符で括るのはよく使われる方法なので覚えておきましょう．

## 特殊な文字を含む固有名詞などを出力する方法

本節の内容は特に謝辞や文献リストの作成など，人名を多く書く際に役立つと思います． 例えば「あれ，Schrödinger ってどうやって出せばいいんだ？」みたいな経験をされた方は多いのではないでしょうか． また，日本人の人名にはさまざまな漢字が使われており，中には通常の変換機能ではなかなか出せない漢字を使用している人もいます．

このテンプレートでは LuaLaTeX を採用しているため，デフォルトで UTF-8 がサポートされています． したがって，特殊な文字を直接 `tex` ファイルに入力してもエラーにならずにそのまま出力できます． 例えば先程の Schrödinger の場合は，どこか別のところから文字だけコピーしてきて直接 `Schrödinger` と打てばそのまま出力できます． コピーしてくる先が無い場合は pLaTeX などレガシー LaTeX で使用するコマンドで `Schr\"{o}dinger` とすることで出力できます． 欧文で使用するアクセント類は LaTeX の入門書には大抵記載があるので詳細はそちらを読んでください．

日本語の場合でも同様で，Unicode でサポートされている文字であればそのまま出力できます． 例えば，いわゆる梯子高の「髙橋」さんや「飛驒山脈」などは問題無く出力できます． 「髙」や「驒」は環境によっては文字化けの原因になるので，これは UTF-8 がサポートされている大きなメリットですね． ただ，こちらもコピーしてくる先があればいいのですが，無い場合は困ります． その際は Unicode を指定して文字を出力するようにしましょう[^3]． 例えば「飛驒山脈」の場合は「`飛\symbol{"9A52}山脈`」とすれば出力できます． 「驒」の Unicode は U+9A52 です． Unicode の U+ 以降の文字列を `\symbol{"xxxx}` の `xxxx` の箇所に入れれば大丈夫です． ただし，同じ「葛」でも字体が異なる字など、一部では別の字体に同じ Unicode が割り当てられています。その際は OpenType の CID 番号を使い、`\CID{1481}` と `\CID{7652}` のように書き分けます[^4]．

<div class="tcolorbox">

- 奥村晴彦, 黒木裕介,［改訂第 9 版］LaTeX 美文書作成入門, 技術評論社 (2023), pp. 41–44, 92–95, 248–253.

- [グリフウィキ](https://glyphwiki.org/wiki/)

</div>

[^1]: `‘` は普段あまり使用しないキーなのでどこにあるのか探し回る人が多いです．一般的な JIS キーボードであればアットマーク @ のキーにあります．`Shift + @` で出力されます．

[^2]: I’m のアポストロフィと同じです．一般的な JIS キーボードであれば数字の 7 のキーにあります．`Shift + 7` で出力されます．

[^3]: 異体字などの Unicode を調べるには [グリフウィキ](https://glyphwiki.org/wiki/) を使用すると便利です．

[^4]: ここで例にした字体の異なる2つの「葛」は、どちらも U+845B です．CID 番号をグリフウィキで調べる際は aj1-01481 など，aj1 を目印に探してください．aj1 は Adobe-Japan1 の略称です．
