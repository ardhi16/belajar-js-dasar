var angkotBeroperasi = 6;
var angkotLembur = 8;
var jmlAngkot = 10;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log('Angkot no.' + noAngkot + ' beroprasi dengan baik');
  } else if (noAngkot === angkotLembur || noAngkot === 10 || noAngkot === 5) {
    console.log('Angkot no ' + noAngkot + ' sedang lembur');
  } else {
    console.log('Angkot no ' + noAngkot + ' tidak baik-baik saja');
  }
}
