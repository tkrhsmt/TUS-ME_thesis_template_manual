---
title: 添削してもらうときの注意点
description: 添削者への配慮とlatexdiff・latexdiff-vcの使い方
sidebar:
  order: 7
---

先生や先輩に学位論文を添削してもらう際は，貴重な時間を割いて見てもらっているので添削者への配慮が大事です． 特にこのマニュアルの第 LaTeXの基本 章から第 BibTeXによる参考文献一覧の出力 章にかけての内容をよく読んで，研究内容と関係の無い些末なミスばかり指摘されることのないように気をつけましょう． 学位論文執筆時に参考になる自己チェックリストは [こちら](https://github.com/ryo-ARAKI/thesis_template_ou_es/blob/master/self_checklist.md)． また，学位論文の PDF ファイルには本文だけでなく，これから書き足す予定の内容や添削者に対する相談・メモなども併せて書いておくといいでしょう． `tcolorbox` パッケージの「枠」を使うと，一目見て本文とは別のメモ書きであるとわかるのでオススメです． このテンプレートのマニュアルでも `tcolorbox` を活用しています． `tcolorbox` の使い方の例：

<div class="tcolorbox">

枠にタイトルを入れる場合．

        \begin{tcolorbox}[title={ここにタイトルを入れる}]
            枠にタイトルを入れる場合．
        \end{tcolorbox}

</div>

<div class="tcolorbox">

枠にタイトルを入れない場合．

        \begin{tcolorbox}
            枠にタイトルを入れない場合．
        \end{tcolorbox}

</div>

添削者が iPad 等のタブレットを持っていれば添削は比較的楽にできますが，人によっては指摘点を文章に書き起こす人もいるでしょう． `main.tex` のプリアンブルに書いてある `\linenumbers` は行番号を PDF ファイルに出力する命令です． 添削時は行番号を表示したものを渡すとよいでしょう． ただし，<span style="color: red">最終提出時は `\linenumbers` をコメントアウトして行番号を消すのを忘れないように</span>．

また，`tex` ファイルの差分は Git を使えば確認できますが，添削者が読む PDF ファイルを見てもどこが変わったか簡単にはわかりません． `latexdiff` や `latexdiff-vc` という機能を使えば `tex` ファイルの差分を PDF ファイルに反映できます． 先生や先輩からの添削・指摘を受け，文章のどこがどのように変わったかを確認する際に便利です． Git を利用していない人は [`latexdiff`](#sec:latexdiff) を，Git を利用している人は [`latexdiff-vc`](#sec:latexdiff-vc) を使いましょう．

## `latexdiff`

ここでは `latexdiff` を用いた差分ファイルの作成方法を説明します． 修正前のファイル名を `old.tex`，修正後のファイル名を `new.tex` とすると，

<div class="tcolorbox">

    $ latexdiff -e utf8 -t CFONT --flatten old.tex new.tex > diff.tex
    $ latexmk diff.tex

</div>

のようにすれば差分ファイル `diff.tex` から `diff.pdf` ファイルを生成できます． 変更前の消した箇所が<span style="color: red">小さい赤字</span>で，変更後の新しく入れた箇所が<span style="color: blue">通常サイズの青字</span>で表示されます． ただし，修正があまりにも大きい場合はうまくタイプセットできないことがあるので気をつけましょう． `--flatten` オプションを使用することで，`\input{}` の部分を実際に読み込むファイルに置き換えてくれます． しかし，`\input{}` で読み込むファイル名を変えておかないと古い内容と新しい内容を比較できません． そのため，差分を取る基準となる時点で `chapter/` を `chapter-old/` などの名称でコピーを作成し，`old.tex` 内で

    \input{chapter-old/introduction.tex}

    \input{chapter-old/method.tex}

    \input{chapter-old/result.tex}

    \input{chapter-old/discussion.tex}

    \input{chapter-old/conclusion.tex}

    \input{chapter-old/acknowledgement.tex}

のようにすることで章ごとの変更を正しく反映できます． このとき，`new.tex` の中身は `\input{chapter/introduction.tex}` のままで大丈夫です．

## `latexdiff-vc`

`latexdiff` は `tex` ファイルの差分を PDF ファイルに書き起こせる便利なツールですが，ファイル名を変更するなどの作業はやはり面倒です． `latexdiff-vc` を使えば Git で管理している任意のコミットとの差分を取ることができ大変便利です． Git ユーザーは `latexdiff-vc` を使いましょう． 例えば現在の `main.tex` と一つ前のコミットとの差分を見たいときは，

<div class="tcolorbox">

    $ latexdiff-vc -e utf8 -t CFONT --flatten --git --force -r HEAD~ main.tex

</div>

とすることで差分ファイルを生成できます． 指定するコミットを変える際は `HEAD~` を置き換えてください． 任意のコミットのハッシュ値を指定することもできます． 生成される差分 `tex` ファイルの名前は指定したコミットによって異なります．

また，`latexdiff-vc` を Windows で使用する際に実行できない不具合を確認しています． これに関してはデバッグしたファイルを [`latexdiff-vc_windows`](https://github.com/Yuki-MATSUKAWA/latexdiff-vc_windows) で公開しているので，Windows ユーザーは `latexdiff-vc` を使用する前に [`README`](https://github.com/Yuki-MATSUKAWA/latexdiff-vc_windows?tab=readme-ov-file#readme) をよく読んで，`latexdiff-vc.pl` を TeX Live 標準のものから置き換えてください． 指定するコミットに対応して出力されるファイル名も異なるので注意してください．

<div class="tcolorbox">

- [GitHub: `thesis_template_ou_es`](https://github.com/ryo-ARAKI/thesis_template_ou_es)

- [Overleaf: How to use latexdiff on Overleaf](https://www.overleaf.com/learn/latex/Articles/How_to_use_latexdiff_on_Overleaf)

- [Gitで管理しているLaTeXのdiffをpdfで見る(TeXLive2015版)](https://nekketsuuu.github.io/entries/2017/01/27/latexdiff-vc.html)

- [latexdiff](https://abenori.blogspot.com/2016/06/latexdiff.html)

- [GitHub: `latexdiff-vc_windows`](https://github.com/Yuki-MATSUKAWA/latexdiff-vc_windows)

</div>
