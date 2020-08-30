function kiemtrasnt(n) {
  // số nguyên tố là số lớn hơn 1 và chia hết cho 1 và chính nó
  var flag = true;

  if (n < 2) {
    flag = false;
  } else if (n == 2) {
    flag = true;
  } else if (n % 2 == 0) {
    flag = false;
  } else {
    for (var i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }

  if (flag == true) {
    console.log(n + " là số nguyên tố");
  } else {
    console.log(n + " không là số nguyên tố");
  }
}

kiemtrasnt(1);
kiemtrasnt(2);
kiemtrasnt(3);
kiemtrasnt(4);
kiemtrasnt(5);
