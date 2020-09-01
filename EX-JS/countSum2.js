// Tính tổng các số lẻ trong mảng
var mang = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

// Have return
function tong_so_le(mang) {
  var sum = 0;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] % 2 !== 0) {
      sum += mang[i];
    }
  }
  return sum;
}

console.log(tong_so_le(mang));

// Dont have return
function tong_so_le(mang) {
  // Biến lưu trữ tổng
  var tong = 0;

  // Lặp qua mảng và cộng thêm tổng nếu là số lẻ
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] % 2 != 0) {
      tong += mang[i];
    }
  }

  console.log("Tổng số lẻ là: " + tong);
}
tong_so_le(mang);
