# Graduates-Object-Literal-
(1) Graduates (Object Literal)

RESTRICTION
Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for…of, Object.keys(), dll
HINTS
Nama function haruslah graduates dan tidak boleh diganti dengan nama function lainnya. Untuk detail fungsi akan mengacu kepada Directions yang disebutkan di bawah
Directions
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75. Masukkan name dan score dari student ke class yang dia ikuti. Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

<class>: [
  { name: <name>, score: <score> },
  ...
],
<class>: [
  { name: <name>, score: <score> },
  ...
],
<class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}