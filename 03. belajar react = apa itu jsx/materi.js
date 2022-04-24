// apa itu JSX

/*

dimateri kali ini kita akan belajar mengenai apa itu jsx
nah tampilan awal react itu ditulis dalam tag html yang
ada dalam file app.js

tapi ditulis didalam file js
nah ini lah yang disebut js 

dimana jsx ini dibuat oleh team react sendiri 
jadi dia mengubah tag yang direturn oleh function menjadi tag html  


jadi apa itu JSX?
JSX adalah singkatan dari Javascrip XML

jsx memungkinkan kita dapat menuliskan html didalam react
jsx itu memudahkan kita menulis element html didalam javascript dan
meletakkannya didalam  DOM tanpa createElement() atau appendChild dan metode apapun

aturan penulisan JSX

- expressi JSX
    untuk menuliskan expresi didalam jsx kita menggunakan kurung kurawal buka dan tutup
    expresi dapat berupa variable operasi dan mengembalikkan hasilnya

- banyak baris html
    untuk menuliskan banyak baris html letakkan html didalam kurung
    contoh

    const myelement = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    );

- parent element
    nah ketika kalian menuliskan banyak tag html
    bungkus tags html tersebut kedalam satu tag utama
    contoh

    const myelement = (
        <div>
            <p>I am a paragraph.</p>
            <p>I am a paragraph too.</p>
        </div>
    );

    atau kalian dapat menggunakan tag kosong <></>
    jika tidka ingin dibungkus dalam satu tag

    const myelement = (
        <>
            <p>I am a paragraph.</p>
            <p>I am a paragraph too.</p>
        </>
    );

    ReactDOM.render(myelement,
    document.getElementById('root')
    );

- tag html harus ditutup
    nah jika ada single tag html maka harus ditutup 
    contoh 

    const myelement = <input type="text" />;

    tinggal tambahka tanda / saja diakhir


- klass atribut
    Atribut class dalah atribut yang banyak digunakan dalam HTML, tetapi karena JSX dirender sebagai JavaScript, dan class adalah kata yang dipakai dalam JavaScript, kalian tidak diperbolehkan menggunakannya di BEJ.

    JSX memecahkan ini dengan menggunakan className sebagai gantinya. Ketika JSX dirender, itu menerjemahkan className atribut menjadi class atribut.

    const myelement = <h1 className="myclass">Hello World</h1>;

    




























*/