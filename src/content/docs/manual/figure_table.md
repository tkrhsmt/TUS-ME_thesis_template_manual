---
title: 図表の配置
description: 図・サブ図・画像形式・表を正しく配置する方法
sidebar:
  order: 4
---

LaTeX で図や表を挿入するときのコマンドは初心者には覚えにくいです． また，インターネットで検索したものを継ぎ接ぎした結果，何が何だかよくわからないコードができあがるということがよく起きるのでこのファイルからコピーアンドペーストすれば問題ないようにしておきました． <span style="color: red">この章ではわかりやすくするために図表のキャプションを全て日本語で書いていますが，実際に学位論文を書く際は全て英語で書いてください．</span>

## 図の配置

### 図を1枚だけ配置する方法

ここでは図を1枚だけ配置する方法を紹介します． 図を配置するときは `figure` 環境で図を自動配置し，`\includegraphics` で図を挿入します（図 1.1のコードを参照）． `figure` のオプション `[]` の中にある文字は出力する場所を示します．

- `t`ページ上部（**t**op）に図を出力

- `b`ページ下部（**b**ottom）に図を出力

- `p`単独ページ（**p**age）に図を出力

- `h`できるだけその位置（**h**ere）に図を出力

- `H`必ずその位置（**H**ere）に図を出力（`float` パッケージを必要とする）

学位論文中の図は原則ページ上部に配置するのでこの `tex` ファイル中では `[tp]` に設定してあります． 皆さんはこのままコピーしてください[^1]． `\columnwidth` は現在のコラムのテキスト幅を指しており，`[width=0.5\columnwidth]` と設定することで，テキスト幅の半分の横幅で図を挿入できます． 図の大きさの指定に関してよく使うコマンドをテキストボックスにまとめてあります． `\textwidth`，`\columnwidth`，`\linewidth` はよく似たコマンドですが，二段組の論文の場合はそれぞれの段の列幅が `\columnwidth` になり，`\linewidth` はリストなどの環境下での行の長さで臨機応変に対応します． これらは文書内のある長さに対して相対的に図の大きさを決定する方法でしたが，`width=25mm` のように絶対的な長さも指定できます． `\centering` は図を中央寄せするコマンドです[^2]．

また，コードにもあるように `\label{}` コマンドを挿入することでラベルを設定できます． ここでは `\label{fig:one_figure}` としており，ラベル参照時に図であることがわかるよう `fig:` を入れています． ご自身の論文の内容に合わせてキャプションやラベルは変更してください． 文章中で引用する際は `図~\ref{fig:one_figure}` のように書きます． すると図 1.1のように出力されます． ハイパーリンクも埋め込まれているので該当する図が遠く離れた位置にあっても便利です． ここで「図」と番号の間にチルダ `~` を入れているのはここでの改行を防止を目的としています．

<div class="tcolorbox">

【指定するもの】  

| **コマンド** | **意味**       | **使用例**              |
|:-------------|:---------------|:------------------------|
| `width`      | 画像の幅       | `width=0.5\textwidth`   |
| `height`     | 画像の高さ     | `height=0.1\textheight` |
| `scale`      | 画像のスケール | `scale=0.5`             |

【長さに関するコマンド】  

| **コマンド**   | **意味**                 |
|:---------------|:-------------------------|
| `\textwidth`   | テキストエリアの幅       |
| `\textheight`  | テキストエリアの高さ     |
| `\columnwidth` | テキスト列の幅           |
| `\linewidth`   | 現在の環境内での行の長さ |

</div>

<figure id="fig:one_figure">
<img src="/TUS-ME_thesis_template_manual/manual/images/tiger.png" alt="虎のサンプル画像" />
<figcaption>1枚の図．</figcaption>
</figure>

<details>
<summary>1枚の図を配置するコード</summary>

```latex
\begin{figure}[tp]
    \centering
    \includegraphics[width=0.5\columnwidth]{figure/tiger.pdf}
    \caption{1枚の図．}
    \label{fig:one_figure}
\end{figure}
```

</details>

### 図を複数枚配置する方法

関連する図（ここではそれぞれの図を「サブ図」と呼称します）を複数枚配置するときは `subcaption` を使いましょう[^3]． このテンプレートでは `settings.sty` 内で読み込んでいます． 文章中では `subfigure` 環境に入れて並べます． 例えば 2 枚の図を横に並べて配置したいときは図 1.4のようになります． ここでは `\hfill` を使って図と図の間の空白を設定していますが，`\hspace{3mm}` のように設定しても構いません． `\hspace{3mm}` の場合，水平方向に$`\SI{3}{\milli\meter}`$の空白ができます． 3 枚のサブ図を横に並べたいときも同様で，図 1.8のようになります． 関連するサブ図を横だけでなく縦方向にも配置したいときは，図 1.13のように横並びの `\columnwidth` の合計が大きくなりすぎると自動的に縦に配列してくれます． ここでは縦方向のスペースを確保するために `\vspace{5mm}` を挿入しています．

<div class="tcolorbox">

| **入力** | **出力** |
|:---|:---|
| `\ref{fig:one_figure}` | 図全体の番号（例: 4.1） |
| `\ref{fig:two_figures}` | 図全体の番号（例: 4.2） |
| `\ref{subfig:two_figures_a}` | 図番号とサブ図番号（例: 4.2a） |
| `\ref{fig:two_figures}(\subref{subfig:two_figures_a})` | 4.2(a) |
| `(\subref{subfig:two_figures_a}, \subref{subfig:two_figures_b})` | (a, b) |
| `(\subref{subfig:four_figures_a}--\subref{subfig:four_figures_c})` | (a–c) |

</div>

また，`subfigure` 環境を使うことでそれぞれのサブ図にラベルを付けられます．`\ref{fig:two_figures}` は図全体の番号、`\subref{subfig:two_figures_a}` はサブ図番号だけ（例: `a`）を出力します。図 4.2(a) のようにする場合は `図~\ref{fig:two_figures}(\subref{subfig:two_figures_a})` とし、`\subref{}` 前後の括弧を忘れないでください。`\ref{subfig:two_figures_a}` なら図番号とサブ図番号が括弧なし（例: `4.2a`）で出ます。複数指定は `(\subref{...a}, \subref{...b})` → `(a, b)`、範囲指定は `(\subref{...a}--\subref{...c})` → `(a–c)` です。括弧をデフォルト出力に変える場合は `settings.sty` の `\renewcommand{\thesubfigure}{(\alph{subfigure})}` を有効にします．

<figure id="fig:two_figures">
<figure id="subfig:two_figures_a">
<div class="example-panel">A</div>
<figcaption>左の図．</figcaption>
</figure>
<figure id="subfig:two_figures_b">
<div class="example-panel">B</div>
<figcaption>右の図．</figcaption>
</figure>
<figcaption>左右の図．</figcaption>
</figure>

<details>
<summary>2枚を横並びにするコード</summary>

```latex
\begin{figure}[tp]
    \centering
    \begin{subfigure}{0.45\columnwidth}
        \centering
        \includegraphics[width=\columnwidth]{example-image-a}
        \caption{左の図．}
        \label{subfig:two_figures_a}
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\columnwidth}
        \centering
        \includegraphics[width=\columnwidth]{example-image-b}
        \caption{右の図．}
        \label{subfig:two_figures_b}
    \end{subfigure}
    \caption{左右の図．}
    \label{fig:two_figures}
\end{figure}
```

</details>

<figure id="fig:three_figures">
<figure id="subfig:three_figures_a">
<div class="example-panel">A</div>
<figcaption>左の図．</figcaption>
</figure>
<figure id="subfig:three_figures_b">
<div class="example-panel">B</div>
<figcaption>中央の図．</figcaption>
</figure>
<figure id="subfig:three_figures_c">
<div class="example-panel">C</div>
<figcaption>右の図．</figcaption>
</figure>
<figcaption>3枚の図．</figcaption>
</figure>

<details>
<summary>3枚を横並びにするコード</summary>

```latex
\begin{figure}[tp]
    \centering
    \begin{subfigure}{0.32\columnwidth}
        \centering
        \includegraphics[width=\columnwidth]{example-image-a}
        \caption{左の図．}
        \label{subfig:three_figures_a}
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.32\columnwidth}
        \centering
        \includegraphics[width=\columnwidth]{example-image-b}
        \caption{中央の図．}
        \label{subfig:three_figures_b}
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.32\columnwidth}
        \centering
        \includegraphics[width=\columnwidth]{example-image-c}
        \caption{右の図．}
        \label{subfig:three_figures_c}
    \end{subfigure}
    \caption{3枚の図．}
    \label{fig:three_figures}
\end{figure}
```

</details>

<figure id="fig:four_figures">
<figure id="subfig:four_figures_a">
<div class="example-panel">A</div>
<figcaption>左上の図．</figcaption>
</figure>
<figure id="subfig:four_figures_b">
<div class="example-panel">B</div>
<figcaption>右上の図．</figcaption>
</figure>
<figure id="subfig:four_figures_c">
<div class="example-panel">C</div>
<figcaption>左下の図．</figcaption>
</figure>
<figure id="subfig:four_figures_c2">
<div class="example-panel">C</div>
<figcaption>右下の図．</figcaption>
</figure>
<figcaption>上下左右に4つ配置した図．</figcaption>
</figure>

<details>
<summary>4枚を2行2列にするコード</summary>

```latex
\begin{figure}[tp]
    \centering
    \begin{subfigure}{0.45\columnwidth}
        \centering
        \includegraphics[width=\columnwidth]{example-image-a}
        \caption{左上の図．}
        \label{subfig:four_figures_a}
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\columnwidth}
        \centering
        \includegraphics[width=\columnwidth]{example-image-b}
        \caption{右上の図．}
        \label{subfig:four_figures_b}
    \end{subfigure}

    \vspace{5mm}
    \begin{subfigure}{0.45\columnwidth}
        \centering
        \includegraphics[width=\columnwidth]{example-image-c}
        \caption{左下の図．}
        \label{subfig:four_figures_c}
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\columnwidth}
        \centering
        \includegraphics[width=\columnwidth]{example-image-c}
        \caption{右下の図．}
        \label{subfig:four_figures_c2}
    \end{subfigure}
    \caption{上下左右に4つ配置した図．}
    \label{fig:four_figures}
\end{figure}
```

</details>

### 画像のファイル形式

画像形式は大きく分類するとラスター画像とベクター画像に分類できます． 結論から先に述べると，<span style="color: red">ラスター画像であれば JPEG か PNG，ベクター画像であれば PDF を使用してください</span>．

- ラスター画像：小さな正方形（ピクセル，画素）を大量に組み合わせて作り上げた画像．ラスター画像を拡大するとピクセルの存在を確認できる．ラスター画像の例は以下の通り．

  - GIF (Graphics Interchange Format)：拡張子は `.gif` で，256 色以下の画像を扱える可逆圧縮形式ファイル．使用できる色は少ないものの，アニメーションにも対応していることから現在でも使う機会が多い．

  - JPEG (Joint Photographic Experts Group)：拡張子は `.jpeg` や `.jpg` で，最大 24 ビット（約 1677 万色）の色に対応している非可逆圧縮形式ファイル．

  - PNG (Portable Network Graphics)：拡張子は `.png` で，JPEG と同様 24 ビットの色に対応している可逆圧縮形式ファイル．透過処理にも対応している．

- ベクター画像：円や直線などを数式的に処理することで作り上げた画像．どれだけ拡大しても明瞭なまま．ベクター画像の例は以下の通り，

  - PS (PostScript)：拡張子は `.ps` で，Adobe が 1984 年に開発したページ記述言語で組まれた画像形式．

  - EPS (Encapsulated PostScript)：拡張子は `.eps` で，PostScript の後継となる画像形式（カプセル化された PostScript）．バウンディングボックスを読み込むことで描画領域を確保する．

  - PDF (Portable Document Format)：拡張子は `.pdf` で，環境に左右されず，ほぼ同様の見た目で画像や文書を閲覧できる．一般的な用途では最も主流なベクター形式．

ラスター画像かベクター画像かという観点では，論文中の画像はできるだけベクター画像の方がいいです． これは上記説明にも書いたように，ベクター画像は内部で数式処理をしているためいくら拡大しても解像度が落ちず明瞭なままだからです． ただし，これは一般的なグラフや簡単なカラーマップ限定の話です． 複雑なカラーマップをベクター画像にするとファイルサイズが膨大になり，画像を開くだけでも一苦労です． このような場合には諦めてラスター画像にしましょう．

また，一昔前の LaTeX では画像の挿入と言えば EPS ファイルでした． しかし，現在の LaTeX 事情では EPS ファイルの使用は非推奨です． 本来 TeX エンジンは EPS ファイルを直接処理することができず，Ghostscript という PostScript 言語のインタープリターを経由しなければいけません． したがって，最初から PDF で挿入する方がよいというわけです． また，バウンディングボックスの調節がうまくいかず，EPS で挿入すると画像がずれるという問題が生じることがあります． 現代に生きる皆さんは EPS ではなく PDF を使いましょう． EPS ファイルを PDF ファイルに変換する Perl スクリプト `epstopdf` が TeX Live 標準で用意されているので必要な人は活用しましょう．

<figure id="fig:figure_comparison1">
<figure id="subfig:figcomp1_pdf">
<img src="/TUS-ME_thesis_template_manual/manual/images/comparison1-1.png" alt="文字抽出可能なPDFの例" />
<figcaption>PDF ファイル（文字抽出可）．</figcaption>
</figure>
<figure id="subfig:figcomp1_pdf2">
<img src="/TUS-ME_thesis_template_manual/manual/images/comparison1-2.png" alt="文字抽出できないPDFの例" />
<figcaption>PDF ファイル（文字抽出不可）．</figcaption>
</figure>
<figure id="subfig:figcomp1_eps">
<img src="/TUS-ME_thesis_template_manual/manual/images/comparison1-3.png" alt="EPS画像の例" />
<figcaption>EPS ファイル．</figcaption>
</figure>
<figure id="subfig:figcomp1_png">
<img src="/TUS-ME_thesis_template_manual/manual/images/comparison1-4.png" alt="PNG画像の例" />
<figcaption>PNG ファイル．</figcaption>
</figure>
<figcaption>画像形式ごとの比較．</figcaption>
</figure>

それでは実際に画像形式を比較します．上のパネル (a), (b) は PDF、(c) は EPS、(d) は PNG です。(a)–(c) はベクター画像なので拡大しても明瞭ですが、(d) はラスター画像なので拡大するとピクセルが見えます。(a) と (b) はどちらも PDF ですが、原版PDF上で `Ctrl`+`A` を押すと (a) は文字を抽出でき、(b) は抽出できません。論文では (a) のように文字抽出が可能な PDF が理想です．

<figure id="fig:figure_comparison2">
<figure id="subfig:figcomp2_pdf">
<img src="/TUS-ME_thesis_template_manual/manual/images/comparison2-1.png" alt="カラーマップをラスター、文字をベクターにしたPDF" />
<figcaption>PDF ファイル．</figcaption>
</figure>
<figure id="subfig:figcomp2_png">
<img src="/TUS-ME_thesis_template_manual/manual/images/comparison2-2.png" alt="全体をラスター化したPNG" />
<figcaption>PNG ファイル．</figcaption>
</figure>
<figcaption>ファイルサイズが大きい画像の比較．</figcaption>
</figure>

ただし，全ての画像をベクター画像にするのは難しい場合もあります．前の比較はファイルサイズの小さいカラーマップでしたが、複雑な模様をすべてベクター化するとファイルが非常に重くなります。上のパネル (a) はカラーマップだけをラスター、文字をベクターにした PDF なので文字抽出が可能です。(b) は全体をラスター化した PNG なので文字抽出できません。(a) の作成には少し技術を要するため、重い画像では (b) のようなラスター画像を使っても構いません．

### 画像の省略によるタイプセットの高速化

挿入する画像の枚数が増えると，その分タイプセットにかかる時間も増えていきます． 学位論文くらいの長さになるとタイプセットに 1, 2 分程度かかるのは覚悟しておきましょう． 先生や先輩に添削をお願いする際や提出時はもちろん全ての図が PDF ファイルに貼り付けてある状態でないといけませんが，自分で文章を書き進めている段階では図の配置さえわかっていれば問題ないことも多いです． メイン文書である `main.tex` の冒頭の `\documentclass` は文書の主要な構造とレイアウトを決定する命令です． このテンプレートを使用している皆さんが `\documentclass` を書き換える場面は基本的にありませんが，オプションの最終行にある `draft` に注目してください． この `draft` オプションを有効化する（コメントアウトを外す）と，出力する PDF ファイル中の画像が全て省略され，枠のみの表示となります． このように画像を省略することでタイプセットを高速化できます． 画像の挿入は省略しても，画像の配置やサイズ自体は表現できるのでレイアウトが崩れるといった心配もありません． 他人に見せる用ではなく，ただ文章を書き進めているだけの段階では `draft` を有効化することをおすすめします． ただし，添削時や提出時に `draft` をコメントアウトすることを忘れないようにしてください．

## 表の配置

次に表の作り方を説明します． 正直，LaTeX 環境での表作成は少々面倒です． 特に表のセルの数が多くなると行をいくつも増やさなければいけないのでかなりの労力がかかります． 簡単に LaTeX の表を作ってくれるツールとして，Tables Generator[^4] があります． また，[2023 年 9 月 27 日に Overleaf に入ったアップデート](https://www.overleaf.com/blog/major-feature-news-add-and-edit-tables-without-writing-code)で直感的な表の作成が可能になりました． Overleaf の表作成機能はかなり便利なので，ローカルで LaTeX 文書を書いているときに表作成時だけでも Overleaf を立ち上げるとストレス無く表を作れます．

ここでは `tabular` 環境を用いた表作成の方法と `tblr` 環境を用いた表作成の方法の両方を記載します． `tabular` 環境は古くから存在している表作成の方法ですが，カスタマイズ性が低く，非常に使いにくいです． しかし，`tabularray` パッケージ[^5]でサポートされている `tblr` 環境は非常にカスタマイズ性が高く，`tabular` 環境で非常に難しかったセル結合も容易に行えます． `tabluar` 環境は現在でも広く使われているためこのテンプレートでも説明しますが，皆さんが論文を書くときは是非 `tblr` 環境を使ってみてください．

### `tabular` 環境を用いた表

<div id="table:tabular">

| 学会名         |   会員種別   |                     年会費 |
|:---------------|:------------:|---------------------------:|
| 実在する学会   |              |                            |
| 日本機械学会   |    学生員    |                   4,800 円 |
| 日本流体力学会 |   学生会員   |                   5,000 円 |
| 日本伝熱学会   |   学生会員   |                   4,000 円 |
| 実在しない学会 |              |                            |
| 日本架空学会   |  小学生会員  |              $`-8,000`$ 円 |
|                |  中高生会員  |              $`-5,000`$ 円 |
|                |  大学生会員  |              $`-2,000`$ 円 |
|                | 名誉学生会員 | $`6.02 \times 10^{23}`$ 円 |

表のサンプル（`tabular` 環境を使用）．

</div>

<details>
<summary><code>tabular</code>環境の完全なコード</summary>

```latex
\begin{table}[tp]
    \centering
    \caption{表のサンプル（\texttt{tabular} 環境を使用）．}
    \label{table:tabular}
    \begin{tabular}{l|c|r} \hline\hline
        \multicolumn{1}{c|}{学会名} & 会員種別 & \multicolumn{1}{c}{年会費} \\ \hline
        \multicolumn{3}{c}{実在する学会} \\ \hline
        日本機械学会 & 学生員 & 4,800 円 \\ \hline
        日本流体力学会 & 学生会員 & 5,000 円 \\ \hline
        日本伝熱学会 & 学生会員 & 4,000 円 \\ \hline
        \multicolumn{3}{c}{実在しない学会} \\ \hline
        \multirow{4}{*}{日本架空学会} & 小学生会員 & $-8,000$ 円 \\ \cline{2-3}
        & 中高生会員 & $-5,000$ 円 \\ \cline{2-3}
        & 大学生会員 & $-2,000$ 円 \\ \cline{2-3}
        & 名誉学生会員 & $6.02 \times 10^{23}$ 円 \\ \hline
    \end{tabular}
\end{table}
```

</details>

日本機械学会が推奨する表形式を満たしたサンプルを表 1.1 に示します． 具体的なコードは `figure_table.tex` 内の表 1.1 の該当箇所を確認してください． 表を作成するときは `table` 環境の中に `tabular` 環境を作ります． `table` 環境は，表やキャプション，ラベルを全て含めた表全体の制御を行い，`tabular` 環境は表の各セルの制御を行います． `table` 環境では `figure` 環境と同様，`h`, `t`, `b`, `p`, `H` による位置制御を行います． 図の場合はキャプションを下に付けますが，表の場合はキャプションを上に付けます． `tabular` 環境内でセルの文字揃え位置制御は `lcr` で行います．

- `l`左揃え（**l**eft）

- `c`中央揃え（**c**enter）

- `r`右揃え（**r**ight）

表 1.1 の場合は `{l|c|r}` としています． この場合，左の列から左寄せ・中央寄せ・右寄せになります． 縦棒（バーティカルライン）``\| は表の縦罫線を入れる場所を示しています． この場合，1 列目と 2 列目の間，2 列目と 3 列目の間に縦罫線を入れます． 行の区切りは `\\`，列の区切りは `&` です． 横罫線を引くときは `\hline` を使います． 日本機械学会のテンプレートの表では一番上の横罫線は 2 本なので `\hline\hline` としています．

次に表のセル結合について説明します． 行方向のセル結合を行う際は `\multicolumn{結合する列数}{揃え位置}{セルの中身}` を使います（結合するセルは列）． 表 1.1 の 2 行目で使用している `\multicolumn{3}{c}{実在する学会}` は「横並びの 3 つのセルを結合し，『実在する学会』という文字列を中央揃えで配置する」命令です． 1 行 1 列目では `\multicolumn{1}{c|}{学会名}` としていますが，これは本来左揃えになっている 1 列目を，このセルだけ例外的に中央揃えにするために使用しています． 面白い使い方ですね． 列方向のセル結合を行う際は `\multirow{結合する行数}{幅}{セルの中身}` を使います（結合するセルは行）． 表 1.1 の 7 行 1 列目で使用している `\multirow{4}{*}{日本架空学会}` は「縦並びの 4 つのセルを結合し，『日本架空学会』という文字列を幅指定なしで配置する」命令です． 列方向のセル結合を行う際は横罫線を消す必要があります． `\cline{x-y}` という命令を使うと，x 列目から y 列目に横罫線を入れるコマンドです． `\hline` がその行全体に横罫線を入れるのに対して `\cline{}` はその行に部分的な横罫線を入れるコマンドです． 横罫線を消すことでセル結合したような出力を得られます．

<div class="tcolorbox">

|                                                    |                        |
|:---------------------------------------------------|:-----------------------|
| `\multicolumn{結合する列数}{揃え位置}{セルの中身}` | 列のセル結合           |
| `\multirow{結合する行数}{幅}{セルの中身}`          | 行のセル結合           |
| `\cline{start-end}`                                | 一部の横罫線のみを表示 |

</div>

また，表の中では数式を使用することも可能です． やりがちなミスとして，負の数をセルに入れるときに数式環境 `$$` に入れ忘れて，マイナスがハイフンとなって出力されているものがあります[^6]．

### `tblr` 環境を用いた表

| 学会名 | 会員種別 | 年会費 |
|---|:---:|---:|
| **実在する学会** |||
| 日本機械学会 | 学生員 | 4,800 円 |
| 日本流体力学会 | 学生会員 | 5,000 円 |
| 日本伝熱学会 | 学生会員 | 4,000 円 |
| **実在しない学会** |||
| 日本架空学会 | 小学生会員 | -8,000 円 |
|  | 中高生会員 | -5,000 円 |
|  | 大学生会員 | -2,000 円 |
|  | 名誉学生会員 | 6.02 × 10²³ 円 |

<details>
<summary><code>tblr</code>環境の完全なコード</summary>

```latex
\begin{table}[tp]
    \centering
    \caption{表のサンプル（\texttt{tblr} 環境を使用）．}
    \label{table:tblr}
    \begin{tblr}{
        colspec = {l|c|r},
        hlines,
        % vlines,
    } \hline
        \SetCell{c} 学会名 & 会員種別 & \SetCell{c} 年会費 \\
        \SetCell[c=3]{c} 実在する学会 & & \\
        日本機械学会 & 学生員 & 4,800 円 \\
        日本流体力学会 & 学生会員 & 5,000 円 \\
        日本伝熱学会 & 学生会員 & 4,000 円 \\
        \SetCell[c=3]{c} 実在しない学会 & & \\
        \SetCell[r=4]{l} 日本架空学会 & 小学生会員 & $-8,000$ 円 \\
        & 中高生会員 & $-5,000$ 円 \\
        & 大学生会員 & $-2,000$ 円 \\
        & 名誉学生会員 & $6.02 \times 10^{23}$ 円 \\
    \end{tblr}
\end{table}
```

</details>

表 tblrの表 は `tblr` 環境を用いた表のサンプルです． 見た目が表 1.1 と同じになるようにしています． 基本的な使い方は `tabular` 環境に準じています． 大きな違いは罫線の扱いです． `\begin{tblr}` の直後で `hlines` を入れると全ての横罫線が，`vlines` を入れると全ての縦罫線が表示されます． また，セル結合の方法も異なります． 表 tblrの表 の 2 行目の `\SetCell[c=3]{c} 実在する学会` は「横並びの 3 つのセルを結合し，『実在する学会』という文字列を中央揃えで配置する」命令です． 1 行 1 列目では `\SetCell{c} 学会名` とすることでこのセルだけ中央揃えに変えています． 7 行 1 列目の `\SetCell[r=4]{l} 日本架空学会` は「縦並びの 4 つのセルを結合し，『日本架空学会』という文字列を左揃えで配置する」命令です．

<div class="tcolorbox">

|                        |                               |
|:-----------------------|:------------------------------|
| `\SetCell{c}`          | そのセルだけ中央揃えに変更    |
| `\SetCell[r=3]{c}`     | 3 行をセル結合し中央揃え      |
| `\SetCell[c=3]{c}`     | 3 列をセル結合し中央揃え      |
| `\SetCell[r=2,c=3]{c}` | 2 行 3 列をセル結合し中央揃え |

</div>

<div class="tcolorbox">

- 奥村晴彦, 黒木裕介,［改訂第 9 版］LaTeX 美文書作成入門, 技術評論社 (2023), pp. 117–126, 135–149.

- 吉永徹美, LaTeX2ε 辞典 増補改訂版, 翔泳社 (2018), pp. 238–274.

</div>

[^1]: ただし，章の始まりのページ（たとえば今見ているこのページ）に図を配置する際は「第 n 章」の文字列の上に図があると不自然です．この場合に限り，図をページの下部または章題目の下に配置するのがよいでしょう．文章の間に図が入ることのないように注意．

[^2]: 図などを中央寄せする際に `\begin{center}` で始まる `center` 環境を使うのは非推奨です．

[^3]: `subfigure` や `subfig` は古いので非推奨です．

[^4]: Tables Generator, \<<https://www.tablesgenerator.com/>\>

[^5]: LaTeX3 を利用した新しいパッケージです．

[^6]: 例えば $`-100`$ と表示するには `$-100$` と入力する必要があります．`-100` だと -100 と表示されます．
