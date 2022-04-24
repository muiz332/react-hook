// struktur project react 

/*


nah untuk menjalankannya kalian tulikan npm start
nanti akan diredirect ke server reactnya 

dimana didalam procject react
ada folder node_modules
public dan src

kemudian ada beberapa file npm dan gitignore

nah didalam package.json itu ada private
jika mau dipulis maka diubah valuenya menjadi false 


didalam node_module itu cuma ada module module
yang bisa kita gunakan pada saat melakukan development

ketika dipublis maka folder tersebut tidak ikut di
pulish 

kemudian ada folder public
karena yang akan kita bagun disini adalah single page aplication atau SPA
dan SPA ini tidak membutuhkan banyak file html

tapi cukup satu saja dan nantinya component atau user interfacenya
akan tampil secara dinmis akan berpindah pindah antar component
dengan memanfaatkan satu file html saja

nah itu bedanya dengan SPA dengan MPA 
untuk penjelasannya kalian klik saja link dibawah ini 

dan didalam file html ini ada tag

    <div id="root"></div>

dimana disini lah nanti element atau component akan kita munculkan 
tapi nantinya kita tidak akan banyak mengubah file index.html

dan selanjutnya ada directory src
dimana didalamnya adalah folder yang mungkin kita akan sering bermain main
didalam sini 

disini ada beberapa file seperti app.js
kemudian ada css

disini ada file utama namanya index.js  
dimana jika kalian lihat dia mengimport beberapa 
library seperti object react 

dia juga memanggil file css,file app dimana file ini 
mengarah pada file app.js 


dan terakhir ada proses render componentnya 
nah jika kalian ingat ada 

    <div id="root"></div>

didalam file index.html
artinya react akan merender componetnya yang ada didalam file
app.js

lalu dirender difile index.js menuju div dengan id root tadi
jadi semua component yang ada akan masuk kedalam file index.html 
dengan tag div yang idnya root tersebut

nah kalo kalian lihat hasilnya dibrowser 
itu ada icon ada tag ada ancor element

semua itu berasal dari file app.js
kalo kalian lihat didalam file app.js

dia mengimport logo
dan file app.css

lalu dia ada function app
yang mereturn tag html 

jadi itu akan tampil dibrowser tapi kita membuatnya 
didalam file javascript

untuk yang beru mengenal mengenai library atau framwork dari javascript
mungkin agak aneh
kok bisa kita menuliskan tag html didalam file javascript

nah ini lah yang disebut dengan component 
dan component itu dapat kita panggil berulang ulang 

nah component tersebut dipanggil kedalam file index.js
kemudian dirender 

dan hasil rendernya akan ditampilkan didalam tag div dengan id root

dan mungkin kalian bingung kenapa kita menuliskan tag html 
kedalam file js 

dan bagaimana kita tampilkan tag html ini yang ada didalam app.js 
kedalam file index.html

nah kita akan lanjutkan pembahasannya mengenai jsx


















*/