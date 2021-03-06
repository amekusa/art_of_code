// 変数の宣言
let posX = 200; // 位置 X
let posY = 200; // 位置 Y

let size = 100;           // サイズ
let sizeMax = size * 2;   // 最大値
let sizeMin = size * 0.5; // 最小値

let mode = 'inflate';     // モード

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 255, 255); // 背景:白

  // サイズが最大値付近になったら
  if (size > (sizeMax - 1)) {
    mode = 'deflate'; // しぼみモードに移行
  }

  // サイズが最小値付近になったら
  if (size < (sizeMin + 1)) {
    mode = 'inflate'; // ふくらみモードに移行
  }

  // ハートのサイズを更新
  size = newSize(size);

  // ハートを描画
  drawHeart(size + 100, 100, 100); // 引数は R, G, B
}

// ハートのサイズを計算し、結果を返す関数
function newSize(sizeNow) {
  // ふくらみ中
  if (mode == 'inflate') {
    return sizeNow + (sizeMax - sizeNow) * 0.1; // size 増やす
  }
  // しぼみ中
  if (mode == 'deflate') {
    return sizeNow - (sizeNow - sizeMin) * 0.2; // size 減らす
  }
}

// ハートを描画する関数
function drawHeart(red, green, blue) {
  fill(color(red, green, blue)); // 塗りの色設定
  noStroke();                    // アウトライン無し
  circle(posX, posY, size);      // 円を描画
}