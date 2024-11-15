---
marp: true
paginate: true
theme: custom
------

<!-- _class: cover -->

<h1 class="logo">ART_OF_<b>CODE</b> #3</h1>
<p class="title">p5.js で学ぶ JavaScript #3</p>
<p class="author">&copy; 2023 Satoshi Soma</p>

---

## 前回のおさらい 1/4

### 変数とは
- **名前（ラベル）の付いた容れ物**。
- **どんな値（数, 文字列）でも一つだけ入れられる。**
- 入れた**値を後から変える**こともできる。
  - 値を増やす / 減らす
  - 別の値で上書きする、など

---

変数を使うには、先に **宣言** をする必要がある。

```js
let 変数名 = 初期値;
```

```js
var 変数名 = 初期値; // let の代わりに var でも可だが、非推奨。
```

変数名は *自由*（ただし半角英数）。**自分がわかりやすい名前**をつけよう。

```js
let color = 'blue'; // 色
let iro   = 'blue'; // ローマ字表記でも自分がわかれば OK
let iro1  = 'red';  // 数字をつけて区別するのも良い
let iro2  = 'pink';
```

---

変数の値を変えるには **代入文** を使う。

```js
変数名 = 値A; // 値:A を代入
変数名 = 値B; // 値:B で上書き
```

**`let`, `var` は宣言時のみ**に用い、代入文では使用しない。
また、宣言が必要なのは*最初の一回のみ*。
宣言をすることで容れ物が用意される、というイメージ。

---

変数に入れる値は、**数値** ならそのまま記述（ただし半角で）。

```js
number = 120;  // 変数:number に 120 を代入
number = 3.14; // 小数点を含む数も OK
```

数値ではなく **文字列** を入れる場合は
**`'`<small>（シングルクオート）</small> か `"`<small>（ダブルクオート）</small>で文字列を囲む**。

```js
text = 'ABC あいうえお 123'; // 変数:text に文字列を代入
text = "ABC あいうえお 123"; // ダブルクオートでも OK
```

*クオートは必ず半角*を用いること。

<hr>

`'` の入力方法: `Shift` + `7`
`"` の入力方法: `Shift` + `2`

---

## 前回のおさらい 2/4

### 四則演算
数値を用いて **足し算**, **引き算**, **掛け算**, **割り算** ができる。

```js
number = 1 + 2; // number = 3   (足し算)
number = 3 - 4; // number = -1  (引き算)
number = 5 * 6; // number = 30  (掛け算)
number = 8 / 4; // number = 2   (割り算)
```

*`()` の中の式は優先*して計算される。
```js
number = (1 + 2) * (3 - 4); // number = 3 * -1
                            // number = -3
```

---

**変数を計算式に含める**ことも可能。

```js
let x = 2;
let y = x + 1; // y = 2 + 1 = 3
let z = x * y; // z = 2 * 3 = 6
```

例: 一つの変数値を**相対的に増減**させる。

```js
let money = 1000;          // 所持金　　　　　　 = ¥1,000
money = money + 3000;      // お小遣い3000円 　 = ¥4,000
money = money - (70 * 2);  // ガリガリ君二本購入 = ¥3,860
```

---

**文字列**の場合は**足し算のみ**可能。
文字列を足し算すると、**連結されて一つの文字列になる**。

```js
let animal = '牛';
let number = 2;

let text = '君は';
text = text + animal + 'を' + number + '頭';
text = text + '持っている。'; // text = '君は牛を2頭持っている。';
```

---

## 前回のおさらい 3/4

### モノを動かすには
プログラムで物体が動いているように見せるには、
**物体の表示位置を、フレーム毎に少しづつ変化させればよい**。

<hr>

具体的には、まず**物体の表示位置に変数を指定する**。

```js
let x = 200;
let y = 200;

function draw() {
  circle(x, y, 10); // x, y 位置に円を描画
}
```

---

あとは、`draw()` 関数が*毎秒 60 回*実行されることを利用し、
**表示位置を担う変数を、動かしたい方向に増減**させればよい。

```js
function draw() {
  x = x + 2; // x を毎フレーム 2 づつ増やす
  y = y - 1; // y を毎フレーム 1 づつ減らす

  circle(x, y, 10); // x, y 位置に円を描画
}
```

増減させる幅を大きくすれば、物体の動きは速くなり、
小さくすれば遅くなる。

---

## 前回のおさらい 4/4

### 関数は働き者
- 関数とは、**好きな時に呼び出せて**、**特定の仕事をしてくれる** 使い走り。
- 関数はそれぞれ **名前** と **仕事** を持っていて、
  *名前を呼ぶ* ことでその仕事を実行させることができる。
- `alert()` や `circle()` などの命令も関数。

関数の呼び出し方:

```js
関数名();         // パラメタ無しの場合
関数名(パラメタ);   // パラメタ有りの場合
```

---

### 関数の引数
関数を呼び出す際、**引数（パラメタ）** を渡すと、
*渡した値<small>（数値や文字列）</small>によって仕事の結果が変わる*。

```js
alert('こんにちは。'); // "こんにちは。" と出力
alert('おはよう。');   // "おはよう。" と出力
```

*複数の引数* を渡す場合は **`,` 区切りで列挙** する。

```js
circle(200, 200, 12); // 座標:(200, 200)に直径:12の円を描画
```

---

### 関数の自作
用意された関数を使うだけではなく、
**オリジナルの関数を作る（定義する）** こともできる。

*関数の定義の仕方:*

```js
function 関数名(引数名) {
  // 仕事の内容（ここにコードを書く）
}
```

`関数名`, `引数名` は自由<small>（半角英数）</small>。引数は不要なら省いてもよい。
*`{ }` 内に書いたコードが関数の仕事の内容*となり、
**その関数を呼び出さない限り実行されることはない**。

よく使う処理を関数化しておき、必要に応じて呼び出すようにすれば、
**コード全体がすっきりして読みやすくなる**。

---

# p5.js 編集環境を整える

---

### p5.js にアカウントを作る
p5.js にユーザー登録することで、
編集中のスケッチをウェブ上に保存することができるようになる。

ログインさえできれば **どのPC** からでも編集作業を続きを行うことができるし、
スケッチの共有も容易になる。

---

### p5.js エディタ :: メニューの使い方
- スケッチを新規作成するには `File > New`
    - 新規作成されたスケッチには自動でランダムな名前が付く。
    - **鉛筆アイコン** をクリックすれば自分で名前を付けられる。
- 作ったスケッチを開くには `File > Open`
- `<` ボタンをクリックすると `Sketch Files` メニューが開く
    - `Sketch Files > Upload file` で画像などの素材をアップロードできる。

---

### p5.js エディタ :: ショートカットキー
| キー | 機能 | 備考 |
|:---|:---|:---|
| `⌘` + `Shift` + `F` | コードの自動整理 | コード全体のインデントやスペースなどを<br>自動で整えてくれる機能。 |
| `⌘` + `Enter` | スケッチの実行 |  |
| `⌘` + `Shift` + `Enter` | スケッチの停止 |  |
| `⌘` + `S` | スケッチの保存 | サーバーに保存される。 |

---

# 条件分岐

---

- *体力がゼロになったら*ゲームオーバーの画面を出す。
- *MP が足りないと*魔法が出ない。
- *経験値が一定以上になると*レベルアップ。
- *残高が足りないと*商品が購入できない。
- *パスワードが正しくないと*ログインできない。
- *文字数が多すぎると*投稿できない。

上に挙げた例のように、
**特定の条件によってプログラムの処理内容を変え**なければならない場面は多い。
これを **条件分岐** と呼ぶ。

---

## `if` 文
JS で条件分岐を行うには次のように書く。

```js
if (条件式) {
  // 処理内容（ここにコードを書く）
}
```

`()` 内に書かれた `条件式` が **正しい** なら `{ }` 内のコードが実行される。
逆に、`条件式` が **正しくない** のなら `{ }` 内は実行されない。

<hr>

条件式が「正しい」状態を **真 (True)** と呼ぶ。
逆に、「正しくない」状態は **偽 (False)** と呼ぶ。
そして、これら二つの状態をまとめて **真偽値 (Boolean)** と呼ぶ。

---

### 条件式の書き方
条件式は基本的に、**二つの値を比較する式** で成り立っている。
比較方法には様々なパターンが存在する。

以下に示すのは、**二つの変数 `x` と `y`** を様々な方法で比較した場合の
条件式の記述例である。

```js
if (x < y) {  }  // x が y よりも小さければ 真
```

```js
if (x > y) {  }  // x が y よりも大きければ 真
```

---

`=（イコール）` 記号を含む条件式:

```js
if (x == y) {  }  // x が y と等しければ 真
```

```js
if (x != y) {  }  // x が y と等しくなければ 真
```

```js
if (x <= y) {  }  // x が y 以下なら 真
```

```js
if (x >= y) {  }  // x が y 以上なら 真
```

<hr>

`x` と `y` の間にある記号は **比較演算子** と呼ぶ。

---

#### 演習:
`if` 文を活用したスケッチを描いてみよう。
（質問, アドバイス受け付けます。）

サンプルコード:
https://editor.p5js.org/amekusa/sketches/_ZkFbyn64

---

# ループ

---

### （突然ですが）線を一本引いてみよう。
線を引くには [`line`](https://p5js.org/reference/#/p5/line) 関数を使おう。

```js
function draw() {
  // 座標(200, 100) から (200, 300) へ線を引く
  line(200, 100, 200, 300);
}
```

---

### 線をもう一本引いてみよう。
今度は 10px 右にずらして。

```js
function draw() {
  line(200, 100, 200, 300); // 一本目
  line(210, 100, 210, 300); // 二本目
}
```

このように、一本目をコピペして、
パラメタを変えれば簡単に実現できるだろう。

---

### では「100 本の線を引け」と言われたらどうする？ :thinking:


---

## DRY の原則
`line()` 関数の呼び出しを 100 本分コピペすれば確かに要望は満たせるが、
そのような*単純作業の繰り返しはプログラマーの本分とは言えない。*
コンピューターに **仕事を命令する** のがプログラミングの本質だからだ。

> **“Don't Repeat Yourself.”**
> 「繰り返すのはあなた（プログラマー）ではない。」
>
> 参照: https://e-words.jp/w/DRY%E5%8E%9F%E5%89%87.html

---

## ループ構文
JS には、**同じような処理を複数回** 実行させたい時に
便利な構文がいくつか存在する。

---

## `for` ループ
**`for` ループ** は、特定の処理を **決められた回数だけ** 実行させたい際に有用な構文だ。

#### 書き方:
```js
for (let i = 0; i < ループ回数; i++) {
  // 実行したい処理
}
```

`ループ回数` に `100` と入れれば、`{ }` 内に書いたコードが 100 回実行される。

---

### `for` ループの中では何が起きている？
`for` の右の `( )` の中に注目してほしい。

```js
for (let i = 0; i < 100; i++) {
```

この `( )` の中身は `;`<small>（セミコロン）</small>を挟んで、以下の **3 つのパート** に分けられる。

```js
let i = 0  // 左
```

```js
i < 100    // 中央
```

```js
i++        // 右
```

---

プログラムが `for` の行に到達すると、*最初に左のパートが一回だけ実行*される。

```js
let i = 0  // 左: 変数 i の宣言
```

中央は *条件式* で、**ループを継続するか否かの条件判定** を行っている。

```js
i < 100    // 中央: i が 100 より小さければループ継続
```

右は **ループ毎に一回実行** される。

```js
i++        // 右: i を 1 増やす
```

---

変数 `i` は **ループ回数を数えるための変数** でループカウンターと呼ぶ。
ループを実行する度に `i` は 1 増えてゆき、
100<small>（ループ回数）</small>に到達した時、条件式が *偽 (False)* になるため、
そこでループは終了する。

---

まとめると、

| 実行順 | 内容 |
|:---:|:----|
| 1. | `for` の行に到達 |
| 2. | <small>左のパート:</small> ループカウンタの宣言 |
| 3. | <small>中央パート:</small> 条件判定（条件に合致しなければ `for` 文を終了する） |
| 4. | `{ }` 内の処理の実行 |
| 5. | <small>右のパート:</small> ループカウンタに +1 |
| 6. | 3. に戻る |

---

ちなみに、
ループカウンターの変数名が **`i`** である必要は**特にない**。
ただの変数名なので実は**何でもいい**。

とはいえ**慣習的**に `i` が使われることが多い。何故 `i` なのかというと、
**iterator（イテレーター, 反復子）** の頭文字に由来する。

---

### 演習:
`for` 文を使って、**縞模様** を描いてみよう。
（質問、アドバイス受け付けます。）

---

サンプルコード:
https://editor.p5js.org/amekusa/sketches/_CnF4qQTW

参考書籍内のサンプルコード:
http://www.bnn.co.jp/support/generativedesign_p5js/
