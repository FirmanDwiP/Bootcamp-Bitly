###### FROM : https://gist.github.com/mprambadi/c403afcdf24ea31dbafbf8748bec7a36
###### MENTOR : https://github.com/abdur-rohman2883/express
---
attention : This code did't use mysql and jwt tokens, only uses the exspress and connected with mongodb

#### Cara RUN
```sh
npm run mulai
```
Tambahkan URL
![alt text](https://github.com/FirmanDwiP/bitly/blob/master/1.png "Langkah 1")
Klick Button
![alt text](https://github.com/FirmanDwiP/bitly/blob/master/2.png "Langkah 2")
Ketika hover ke url pendek maka muncul :
![alt text](https://github.com/FirmanDwiP/bitly/blob/master/2a.png "Langkah 2a")
Url pendek ketika di klik
![alt text](https://github.com/FirmanDwiP/bitly/blob/master/3.png "Langkah 3")
Kembali ke localhost:5000 lalu refresh
![alt text](https://github.com/FirmanDwiP/bitly/blob/master/4.png "Langkah 4")

HOW TO USE (untuk pertama kali)
```sh
npm init
npm i express mongoose ejs
npm i --save-dev nodemon
```
# MATERI
## NodeJs
Node JS ini pelengkap dari javascript kalau sebelumnya javascript itu cuma menangani logic dari sisi browsernya saja dengan adanya Node JS ini javascript bisa menangani logic dari sisi server juga.
pastikan nodejs sudah terinstall dengan jalankan command berikut di terminal
```sh
node -v
v12.16.1
npm -v
v6.13.4
```
oiya sekedar catatan, dari README yang saat ini saya buat, NPM sudah resmi diakuisisi oleh MICROSOFT GITHUB
#### ExpressJS
Nah Express JS ini merupakan framework dari Node JS, Express JS ini ada agar para developer lebih mudah karena fitur yang diberikan Express JS sangatlah mempermudah backend engineer dalam membuat REST API
```sh
npm i express
```

#### Setup Other Library
Setup beberapa package yang akan membantu kita dalam membangun server, contoh:
- body-parser
- nodemon
- dotenv (create file dengan nama .env dan isikan `PORT = 8080`)
- ejs

#### JSON
JSON (JavaScript Object Notation) adalah sebuah format data yang digunakan untuk pertukaran dan penyimpanan data
JSON merupakan bagian (subset) dari Javascript. JSON bisa dibaca dengan berbagai macam bahasa pemrograman seperti C, C++, C#, Java, Javascript Perl, Python, dan banyak lagi.
Hal ini membuat JSON menjadi bahasa yang ideal untuk perturakan data antar aplikasi.
JSON bahkan mendominasi pendahulunya si XML (eXtensible Markup Language)…
Kalau dibandingkan dengan XML, JSON lebih sederhana dan mudah dibaca.

#### RESTful
RESTful adalah prosedur pada pembuatan REST dengan menerapkan semua atau sebagian metode HTTP dalam sebuah route.
semua endpoint tidak menggunakan kata kerja, sebagai contoh:
salah:
getUser	-> GET
addUser -> POST
benar:
user 	-> GET
user	-> POST

#### Middleware
Middleware adalah sebuah layer yang dieksekusi sebelum ke main system atau middleware selanjutnya, middleware juga dipergunakan untuk melakukan validasi terhadap request dari user dan mengubah object request atau response.

#### Logging
Logging merupakan pencatatan pada setiap request yang dilakukan oleh client.
Melakukan logging bisa dengan menggunakan banyak cara bisa berupa console.log, namun hal tersebut tidak bisa terlihat ketika sudah masuk production.

#### Winston
Winston adalah salah satu library untuk mencatat semua log yang ada pada express.
setup winston : 
```sh
npm i winston
```

#### Routing
Routing mengacu pada letak akhir dari sebuah endpoint yang direquest oleh client.
Base url: https//www.app.com
Endpoint: /api/users (GET, POST)
Endpoint: /api/users/:id (GET, PUT, PATCH and DELETE)

#### Authentication and Authorization
Authentication merupakan suatu proses pengenalan identitas suatu user, dalam konteks ini berupa persamaan username dan password.
Authorization merupakan suatu proses pengecekan terhadap user mengenai akses pada suatu layanan, sebagai contoh user dengan role user tidak dapat mengakses layanan pada user dengan role admin.
Install jsonwebtoken pada project: 
```sh
npm i jsonwebtoken
```
