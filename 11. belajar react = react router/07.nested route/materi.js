// nested route

/*

dimateri kali ini kita akan belajar mengenai nested route
nah didalam route detil itu akan kita buat lagi

ada route post dan product

untuk membuat nested route kita 
harus membuat tag pembuka dan penutup

jadi kita tidak bisa menuliskan seperti ini

<Route path='/:id' element={<Detil />} />

untuk membuat nested route dihalaman detil 
itu kita menuliskannya seperti ini

<Route path='/:id' element={<Detil />} >
    <Route path='post' element={<Post />} />
    <Route path='product' element={<0Product />} />
</Route>

nah kita harus menuliskannya seperti itu
jadi kita tidak langsung menutup tag route parentnya
tetapi kita harus membuat component pembuka dan penutupnya

lalu didalamnya adalah nested route berdasarkan parentnya


nah lalu gimana caranya untuk mengakses halaman Post yang ada didalam
route Detil

maka urlnya akan menjadi seperti ini

/1/post
/2/product

nah maka url post dan productnya akan bergantung
terhadap parent routenya


nah sekarang kita buat dulu nested component untuk 
detilnya

nah setelah kita buat 
kita pergi kehalaman app.js




























*/