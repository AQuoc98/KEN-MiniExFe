// Bài 01: Tính tổng các số chẵn từ 0 tới n bằng cách sử dụng vòng lặp while trong javascript
function sum(n) {
  var sum = 0;
  var index = 0;
  while (index <= n) {
    if (index % 2 == 0) {
      sum += index;
    }
    index++;
  }
  console.log(sum);
}

sum(1000);
