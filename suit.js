var p = prompt('pilih: gunting, kertas, batu');

var com = Math.random();

if (com < 0.34) {
  com = 'gunting';
} else if (com > 0.35 && com < 0.64) {
  com = 'kertas';
} else {
  com = 'batu';
}

if (p == com) {
  alert('Seri ges');
} else if (p == 'gunting') {
  if (com == 'kertas') {
    alert('Menang');
  } else {
    alert('Kalah');
  }
} else if (p == 'kertas') {
  if (com == 'batu') {
    alert('Menang');
  } else {
    alert('Kalah');
  }
} else if (p == 'batu') {
  if (com == 'gunting') {
    alert('Menang');
  } else {
    alert('kalah');
  }
} else {
  alert('gak tertulis');
}
