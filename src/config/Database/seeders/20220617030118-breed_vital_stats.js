'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('breed_vital_stats', [
      {
          life_span: '9 hingga 15 tahun',
          length: '12 hingga 16 inci',
          weight: '6 hingga 10 pon',
          origin: 'Asia Tenggara',
          description: 'Abyssinian atau abisinia adalah salah satu ras kucing domestik tertua yang lincah dan dapat berinteraksi baik dengan manusia. Abisinia menyerupai lukisan dan patung yang berasal dari zaman Mesir Kuno.\r\n\r\nAbisinia memiliki telinga dan moncong yang runcing, sehingga kepalanya berbentuk seperti segitiga. Matanya berbentuk seperti kacang almond, bulu kepalanya memiliki warna cenderung lebih hitam, dan moncong berwarna putih. Abisinia memiliki badan yang berotot dan panjang dengan tangan dan kaki yang panjang serta ramping. Rata-rata, abisinia memiliki ekor yang panjang dan runcing.\r\n\r\nAbisinia memiliki warna bulu yang unik dan menjadi ciri khususnya, yaitu warna kecoklatan. Abisinia memiliki bulu halus di atas dengan warna dasarnya kehitam-hitaman, sehingga mirip dengan warna kucing gurun. Bulunya akan terasa halus dan lembut pada saat di sentuh. Ciri khas pola warna bulu abisinia adalah agouti berbintik.',
          BreedCatId: 1
      },
      {
          life_span: '11 hingga 15 tahun',
          length: 'Sedang',
          weight: '8 hingga 13 pon',
          origin: 'Amerika Serikat dan Kanada',
          description: 'Kucing ekor bundel amerika adalah salah satu ras kucing domestik yang berasal dari Amerika Serikat.\r\n\r\nCiri utama ras ini adalah ekor yang tebal dan pendek, sekitar 1/3 panjang normal ekor kucing. Ekor yang pendek tersebut merupakan hasil mutasi genetik.\r\n\r\nAmerican Bobtail adalah kucing berukuran medium-besar dengan bentuk badan kekar. Badan cukup panjang, padat berisi, dan semi cobby. Kucing jenis ini memiliki semua warna kucing. Matanya besar hampir berukuran almond. dan warnanya bisa copper, gold, yellow, or green; blue in bi-color/van, colorpoint, lynxpoint, or oddeyed white',
          BreedCatId: 2
      },
      {
          life_span: '12 hingga 16 tahun',
          length: 'Sedang',
          weight: '5 hingga 10 pon',
          origin: 'California, AS',
          description: 'Kucing telinga ikal amerika adalah salah satu ras kucing akibat mutasi genetik alami yang berasal dari Lakewood, California, Amerika Serikat. Sesuai dengan namanya, kucing telinga ikal amerika memiliki ciri khas pada bentuk telinganya yang ikal atau melengkung.',
          BreedCatId: 3
      },
      {
          life_span: '15 hingga 20 tahun',
          length: '12 hingga 15 inci',
          weight: '7 hingga 12 pon',
          origin: 'Amerika Serikat',
          description: 'Kucing bulu pendek amerika adalah salah satu ras kucing dari Amerika Utara yang masih merupakan keturunan dari ras kucing bulu pendek eropa dan kucing bulu pendek britania raya.',
          BreedCatId: 4
      },
      {
          life_span: '14 hingga 18 tahun',
          length: 'Sedang hingga besar',
          weight: '8 hingga 15 pon',
          origin: 'Amerika Serikat',
          description: 'Kucing bulu dawai amerika adalah ras kucing domestik yang berasal dari bagian utara New York, Amerika Serikat. Ras kucing ini adalah ras kucing akibat mutasi genetik yang spontan. Salah satu ciri khasnya adalah bulunya yang berkerut.',
          BreedCatId: 5
      },
      {
          life_span: '9 hingga 15 tahun',
          length: 'Hingga 18 inci, tidak termasuk ekor',
          weight: '5 hingga 10 pon',
          origin: 'Amerika Serikat dan Thailand',
          description: 'Kucing bali adalah salah satu ras kucing alami akibat mutasi genetik pada ras siam. Perbedaan antara ras bali dengan ras siam terletak pada ukuran bulunya saja; kucing bali berbulu sedang, sedangkan kucing siam berbulu pendek. Ras ini adalah ras kucing oriental, yaitu memiliki tubuh yang panjang dan langsing.',
          BreedCatId: 6
      },
      {
          life_span: '10 hingga 16 tahun',
          length: '17 hingga 22 inci, tidak termasuk ekor',
          weight: '8 hingga 17 pon',
          origin: 'Amerika Serikat',
          description: 'Kucing ras bengal memiliki bentuk tubuh yang besar dan gagah. Hal tersebut dikarenakan ia mendapatkan ciri fisik dari leluluhurnya, yaitu kucing liar. Kucing betina dewasanya memiliki berat badan sekitar 4-5 kilogram, sedangkan berat badan kucing jantan dapat mencapai 10 kilogram. Kucing bengal dapat dibedakan dengan kucing lainnya melalui corak warna pada tubuhnya yang khas, yaitu didominasi dengan warna cokelat dan hitam.\n\nBentuk kepala kucing bengal berukuran besar dan agak panjang, namun terlihat lebih kecil jika dibandingkan dengan ukuran tubuhnya. Ia juga memiliki leher yang besar dan berotot yang seimbang dengan ukuran kepala. Hidungnya besar dan lebar, sedangkan kulit hidungnya berwarna merah dengan garis luar hitam. Telinga kucing bengal berbentuk runcing ke atas. Kucing bengal memiliki mata yang lebar dan buat yang berwarna hijau atau amber.\nPada bagian badan, kucing bengal memiliki badan yang atletis dan berukuran cukup panjang jika dibandingkan dengan kucing lain. Pada umumnya kucing bengal memiliki berat badan yang ideal dan memiliki ekor yang panjang.\nPola warna pada bulu kucing bengal sangat khas, yaitu berwarna coklat atau cinnamon dengan bintik kehitam-hitaman yang menyebar di seluruh bagian tubuh. Selain itu, terdapat garis horizontal berwarna hitam dibagian pundak, serta lingkaran berbentuk cincin pada ekor dengan ujung berwarna gelap.',
          BreedCatId: 7
      },
      {
          life_span: '12 hingga 16 tahun',
          length: '15 hingga 18 inci',
          weight: '6 hingga 12 pon',
          origin: 'Tidak diketahui',
          description: 'Birma adalah kucing berukuran sedang dengan berat badan 4–6 kg. Birma hanya mempunyai warna mata biru. Pola warna birma adalah titik warna, yaitu warna gelap pada telinga, wajah, ekor dan keempat kaki, kecuali keempat telapak kaki dan cakar yang berwarna putih. Warna yang paling sering ditemui pada birma adalah seal-point dan blue-point.\r\n\r\nBadannya berotot dan memiliki panjang menengah, dengan kaki yang kuat. Kepalanya lebar dan bulat, pada hidung terdapat sedikit lekukan, sedangkan mata hampir berbentuk bulat dan berwarna biru. Telinga berukuran sedang dengan ujung melengkung. Bulu leher dan ekor sangat tebal dan halus. Warna bulu badan lebih pucat dibandingkan warna point pada kedua telinga, muka, kaki dan ekor. Birma memiliki warna putih pada keempat jari-jari kakinya. Warna putih ini berbentuk simetris, tidak melebihi batas pergelangan kaki.',
          BreedCatId: 8
      },
      {
          life_span: '12 hingga 20 tahun',
          length: '13 hingga 20 inci',
          weight: '18 hingga 15 pon',
          origin: 'Kentucky, AS',
          description: 'Bombay adalah salah satu ras kucing domestik berwarna hitam utuh yang eksotis dengan mata tajamnya. Ras kucing satu ini sangatlah unik. Meski kucing berwarna hitam polos bisa dimiliki banyak ras kucing lainnya, Bombay adalah ras kucing yang seluruh keturunannya sudah pasti berwarna hitam polos.',
          BreedCatId: 9
      },
      {
          life_span: '12 hingga 17 tahun',
          length: '22 hingga 25 inci, tidak termasuk ekor',
          weight: '7 hingga 17 pon',
          origin: 'Inggris Raya',
          description: 'Kucing bulu pendek britania memiliki ukuran tubuh sedang sampai dengan cukup besar dengan berat badan sekitar 4–8 kg. Postur tubuhnya padat, kompak, kuat, berotot di dada, pendek, dengan pinggul dan bahu yang lebar. Kepalanya berbentuk bulat disertai dengan pipi yang berisi penuh. Hidungnya yang pesek namun lebar dan lurus tanpa ada tekukkan dan dagu kucing bulu pendek britania ini berbentuk bulat. Tubuh dari kucing jantan lebih besar dibanding dengan kucing betina. Kucing jantan memiliki berat rata–rata mencapai 5–10 kg, sedangkan pada betina hanya dapat mencapai 5–7 kg saja.\n\nTelinga kucing bulu pendek britania berukuran sedang, tetapi lebar di bagian bawahnya dengan bagian ujung telinganya melengkung. Memiliki jarak antara kedua telinganya dengan jarak sedang. Mata pada kucing bulu pendek britania adalah besar dan berbentuk bulat. Ras ini memiliki berbagai variasi warna, yaitu gold, copper, odd-eyes dan blue. Akan tetapi, meski memiliki berbagai warna bervariasi, warna emas adalah warna terbaik yang pernah ada.\n\nKucing bulu pendek britania memiliki ukuran kaki yang pendek namun memiliki tulang yang amat kuat dan juga berotot. Bentuk dari cakarnya sendiri membulat pada jari–jarinya. Ekornya tebal, padat, dan tidak terlalu berbulu namun indah dengan ujung ekornya yang tumpul. Panjangnya kurang lebih sekitar dari panjangnya, dengan tebal di bagian pangkal namun menipis di bagian ujungnya.',
          BreedCatId: 10
      },
      {
          life_span: '10 hingga 16 tahun',
          length: '15 hingga 18 inci',
          weight: '8 hingga 12 pon',
          origin: 'Birma dan Thailand',
          description: 'Burma adalah kucing berbadan sedang, berat, dan berotot, dengan berat badan sekitar 4-6 kg. Burma memiliki bentuk kepala yang bulat dan melengkung, serta ukuran telinga yang sedang, lebar, dan lancip. Matanya bulat dan lebar, dengan warna matanya kuning keemasan. Ekornya lurus dan panjangnya sedang. Bulunya pendek, halus, lembut, dan mengkilap.',
          BreedCatId: 11
      },
      {
          life_span: '10 hingga 15 tahun',
          length: 'Sedang',
          weight: '6.5 hingga 13 pon',
          origin: 'Inggris',
          description: 'Burmilla adalah salah satu ras kucing yang terbentuk dari persilangan antara kucing burma dengan chinchilla. Sebenarnya ada 2 jenis burmilla, yaitu kucing bulu panjang burmilla dan kucing bulu pendek burmilla.\n\nBurmilla adalah kucing berukuran sedang, dengan sifat-sifat fisik yang mirip dengan kucing burma. Mempunyai bulu pendek, padat dan lembut. Warna gelap seperti \'garis mata\' yang mengelilingi mata hijaunya merupakan salah satu ciri khas burmilla. Karena nenek moyang burmilla adalah ras chinchilla, kucing-kucing ras burmilla mempunyai gen bulu panjang. Beberapa anak burmilla mempunyai bulu panjang. Seperti halnya ras-ras lain yang mempunyai versi bulu panjang dan versi bulu pendek, versi bulu panjang dari burmilla adalah ras tersendiri yang bernama kucing bulu setengah panjang asia.\r\n\r\nRas burmilla mempunyai badan yang cukup berotot, muka sedikit membulat, dan moncong pendek. Berat dewasa ras ini berkisar antara 4-5 Kg. Burmilla mempunyai warna bermacam-macam seperti hitam, biru, sampanye, cokelat, krem, ungu, platina, dan merah. Bisa juga muncul warna tortie dengan kombinasi warna hitam, biru, cokelat, cokelat tua, dan ungu.',
          BreedCatId: 12
      },
      {
          life_span: '11 hingga 15 tahun',
          length: '15 hingga 18 inci',
          weight: '7 hingga 16 pon',
          origin: 'Perancis',
          description: 'Chartreux adalah salah satu ras kucing domestik yang berasal dari Prancis. Ras kucing ini sangat mirip dengan kucing bulu pendek britania raya.\n\nChartreux adalah kucing berbadan besar dan berotot dengan bulu yang pendek. Chartreux dikenal sebagai kucing dengan bulu pendek dua lapis yang berwarna biru. Bulunya ini tahan dengan air. Mata chartreux berbentuk oval dan berwarna tembaga. Chartreux wajahnya terlihat seperti tersenyum, karena chartreux memiliki struktur tengkorak dan rahang yang sedikit berbeda.\n\nBoth have thick dense coats; the British Blue is stockier than the Chartreux. but the main difference is the head; the British is round with small ears set into the line of the head; full chubby jowls, a broad deep muzzle. The Chartreux has larger upright ears with a flat forehead between the ears. Not as full across the cheeks so the eyes look much rounder, the muzzle is longer and narrower. They actually look quite different when you get good examples of both ',
          BreedCatId: 13
      },
      {
          life_span: '11 hingga 15 tahun',
          length: 'Kecil',
          weight: '6 hingga 10 pon',
          origin: 'Britania Raya',
          description: 'Rex cornish adalah salah satu ras kucing domestik berbulu pendek, bahkan sangat pendek, dan keriting, yang terjadi akibat adanya mutasi genetik pada nenek moyang mereka, yaitu seekor anak kucing yang terlahir sekitar tahun 1950-an di sebuah area pertanian di Cornwall, Inggris.',
          BreedCatId: 14
      },
      {
          life_span: '9 hingga 15 tahun',
          length: '15 hingga 18 inci',
          weight: '5 hingga 10 pon',
          origin: 'Devon, Inggris',
          description: 'Rex devon adalah salah satu ras kucing berbulu pendek dan keriting, tetapi sangat lembut. Karena jenis bulunya tersebut, kucing ini disebut-sebut sebagai salah satu jenis kucing yang paling aman bagi penderita alergi bulu.',
          BreedCatId: 15
      },
      {
          life_span: '12 hingga 18 tahun',
          length: '-',
          weight: '-',
          origin: '-',
          description: 'Kucing disebut juga kucing domestik atau kucing rumah adalah sejenis mamalia karnivora dari keluarga Felidae. Kata \'kucing\' biasanya merujuk kepada \'kucing\' yang telah dijinakkan, tetapi bisa juga merujuk kepada \'kucing besar\' seperti singa dan harimau. ',
          BreedCatId: 16
      },
      {
          life_span: '12 hingga 15 tahun',
          length: 'Sedang',
          weight: '6 hingga 14 pon',
          origin: 'Mesir',
          description: 'Mau mesir adalah salah satu ras kucing tertua yang pernah ada dan merupakan kucing ras alami. Ciri khas mau mesir adalah memiliki bulu dan kulit yang bercorak tutul. Ras ini dikenal sebagai kucing domestik yang dapat lari dengan cepat sekali, yaitu dengan kecepatan 36 mph',
          BreedCatId: 17
      },
      {
          life_span: '8 hingga 15 tahun',
          length: 'Sedang',
          weight: '7 hingga 12 pon',
          origin: 'Amerika Serikat',
          description: 'Kucing eksotis adalah salah satu ras kucing yang merupakan hasil persilangan antara ras persia dengan ras bulu pendek amerika.',
          BreedCatId: 18
      },
      {
          life_span: '10 hingga 15 tahun',
          length: '12 hingga 15 inci',
          weight: '6 hingga 10 pon',
          origin: 'Inggris',
          description: 'Kucing havana adalah salah satu ras kucing yang berasal dari Thailand. Ras ini pertama kali dikembangkan di Inggris. Havana dapat hidup dengan mencapai umur 12 tahun',
          BreedCatId: 19
      },
      {
          life_span: '9 hingga 15 tahun',
          length: '17 hingga 19 inci',
          weight: '7 hingga 12 pon',
          origin: 'Amerika Serikat',
          description: 'Kucing himalaya atau kucing persia himalaya adalah salah satu ras kucing domestik yang merupakan hasil persilangan antara kucing persia dengan kucing siam. Persilangan tersebut bertujuan untuk mendapatkan ras kucing dengan tipe badan yang sama seperti kucing persia, tetapi dengan pola warna seperti kucing siam.',
          BreedCatId: 20
      },
      {
          life_span: '9 hingga 15 tahun',
          length: 'Sedang',
          weight: '6 hingga 10 pon',
          origin: 'Cina dan Jepang',
          description: 'Kucing ekor bundel jepang adalah salah satu ras kucing alami yang berasal dari Jepang. Kucing ekor bundel jepang sudah ada sejak ribuan abad yang lalu. Nama ras ini banyak disebutkan dan digambarkan dalam berbagai dokumen-dokumen kuno Jepang. Kucing ini dipercayai sebagai wujud asli dari Maneki Neko.',
          BreedCatId: 21
      },
      {
          life_span: '10 hingga 12 tahun',
          length: '10 hingga 12 inci',
          weight: '8 hingga 10 pon',
          origin: 'Thailand',
          description: 'Khao manee, juga dikenal sebagai kucing mata berlian, adalah salah satu ras kucing langka yang berasal dari Bangkok, Thailand. Khao manee sangat terkenal di daerah asalnya. Kucing ini sudah ada sejak ratusan tahun yang lalu.',
          BreedCatId: 22
      },
      {
          life_span: '10 hingga 15 tahun',
          length: '15 hingga 18 inci',
          weight: '6 hingga 10 pon',
          origin: 'Thailand',
          description: 'Korat adalah salah satu ras kucing yang berasal dari Provinsi Nakhon Ratchasima di Thailand. Ras ini di Thailand telah dikenal sejak ratusan tahun yang lalu. Ras korat adalah kucing yang dihormati oleh penduduk lokal',
          BreedCatId: 23
      },
      {
          life_span: '10 hingga 15 tahun',
          length: 'Kecil hingga sedang',
          weight: '5 hingga 8 pon',
          origin: 'Oregon, Amerika Serikat',
          description: 'Laperm adalah salah satu ras kucing dari Amerika Serikat akibat mutasi genetik alami. Salah satu ciri khas laperm adalah bulunya yang keriting. Laperm sebenarnya adalah kucing yang termasuk jenis rex.',
          BreedCatId: 24
      },
      {
          life_span: 'Tidak diketahui',
          length: 'Pendek ke Sedang',
          weight: '4 hingga 7 pon',
          origin: 'Amerika Serikat',
          description: 'Lykoi adalah salah satu ras kucing terbaru yang penampilannya mirip dengan serigala. Kucing ini merupakan kucing yang mengalami mutasi genetik alami, sehingga kucing ini tidak memiliki rambut di sekitar mata, hidung, telinga dan moncongnya.',
          BreedCatId: 25
      },
      {
          life_span: '9 hingga 15 tahun',
          length: '30 hingga 40 inci',
          weight: '9 hingga 18 pon',
          origin: 'Maine, Amerika Serikat',
          description: 'Maine coon adalah salah satu ras kucing tertua dan alami yang berasal dari Maine, Amerika Serikat. Ras ini dipercayai nenek moyangnya berasal dari ras anggora dan kucing hutan norwegia.',
          BreedCatId: 26
      },
      {
          life_span: '8 hingga 14 tahun',
          length: '14 hingga 16 inci',
          weight: '8 hingga 12 pon',
          origin: 'Pulau Man, Inggris',
          description: 'Kucing manx atau biasa disebut Rumpy adalah salah satu ras kucing yang tidak memiliki ekor, atau kalaupun ada ekornya akan berukuran sangat pendek. Kucing ini berasal dari pulau kecil di Britania Raya yang bernama Isle of Man. Manx merupakan salah satu ras kucing tertua yang pernah terdaftar di CFA pada tahun 1908.',
          BreedCatId: 27
      },
      {
          life_span: '12 hingga 15 tahun',
          length: '5 hingga 7 inci',
          weight: '6 hingga 9 pon',
          origin: 'Amerika Serikat',
          description: 'Kucing munchkin adalah salah satu ras kucing berkaki pendek yang terbentuk karena mutasi genetik alami. Ras ini baru mulai dikembangbiakkan sekitar tahun 1980-an di Amerika Serikat, negara asalnya. Karena kakinya yang pendek, munchkin menjadi salah satu ras kucing terkecil di dunia.',
          BreedCatId: 28
      },
      {
          life_span: '12 hingga 16 tahun',
          length: '12 hingga 18 inci',
          weight: '13 hingga 22 pon',
          origin: 'Norwegia',
          description: 'Kucing hutan norwegia adalah salah satu ras kucing alami yang berasal dari daerah yang bernama Norwegia. Nenek moyang dari ras kucing ini diduga berasal dari hutan-hutan di daerah Norwegia dan Skandinavia. Keunikan dari kucing hutan norwegia adalah pada bulunya.',
          BreedCatId: 29
      },
      {
          life_span: '10 hingga 15 tahun',
          length: '9 hingga 11 inci',
          weight: '6 hingga 15 pon',
          origin: 'Amerika Serikat',
          description: 'Ocicat adalah salah satu ras kucing yang merupakan hasil persilangan dari beberapa ras kucing domestik dengan ras kucing domestik berpenampilan liar. Salah satu pola bulu ocicat adalah tutul, yang mirip dengan kucing liar.',
          BreedCatId: 30
      },
      {
          life_span: '10 hingga 15 tahun',
          length: '12 hingga 15 inci',
          weight: '5 hingga 10 pon',
          origin: 'Amerika Serikat, Thailand',
          description: 'Kucing bulu pendek oriental adalah ras kucing domestik hasil persilangan antara ras siam dengan beberapa ras lainnya. Ras kucing ini pertama kali dikembangkan di Inggris pada abad ke-20. Kucing bulu pendek oriental mirip dengan tipe tubuh kucing siam. Ras kucing ini datang dalam banyak variasi warna dan pola. ',
          BreedCatId: 31
      },
      {
          life_span: '10 hingga 15 tahun',
          length: '14 hingga 18 inci, tidak termasuk ekor',
          weight: '7 hingga 12 pon',
          origin: 'Persia (Iran)',
          description: 'Kucing persia adalah ras kucing domestik berbulu panjang dengan karakter wajah bulat dan moncong pendek. Namanya mengacu pada Persia, nama lama Iran, di mana kucing serupa ditemukan. Sejak akhir abad 19, kucing jenis ini dikembangkan di Britania Raya dan Amerika Serikat usai Perang Dunia II.',
          BreedCatId: 32
      },
      {
          life_span: '12 hingga 16 tahun',
          length: '12 hingga 18 inci',
          weight: '10 hingga 20 pon',
          origin: 'California, Amerika Serikat',
          description: 'Ragamuffin adalah salah satu ras kucing domestik yang masih merupakan varian ras Ragdoll. Ras Ragamuffin pertama kali ada pada tahun 1994, yang merupakan hasil persilangan dari ras Ragdoll dengan ras lain. Penampilan ras ini mirip dengan Ragdoll.',
          BreedCatId: 33
      },
      {
          life_span: '12 hingga 17 tahun',
          length: '17 hingga 21 inci, tidak termasuk ekor',
          weight: '10 hingga 20 pon',
          origin: 'California, Amerika Serikat',
          description: 'Ragdoll adalah salah satu ras kucing terbesar di dunia yang telah diakui oleh Guinness World Records. Ragdoll awalnya dikembangkan oleh Ann Baker dari Amerika Serikat.',
          BreedCatId: 34
      },
      {
          life_span: '10 hingga 15 tahun',
          length: '15 hingga 18 inci, tidak termasuk ekor',
          weight: '7 hingga 15 pon',
          origin: 'Rusia',
          description: 'Kucing biru rusia adalah salah satu ras kucing yang memiliki bulu berwarna perak biru. Kucing ini sangat cerdas dan lucu, tetapi cenderung pemalu di sekitar orang asing. Kucing biru rusia merupakan kucing yang memiliki ikatan yang erat dengan sahabatnya manusia.',
          BreedCatId: 35
      },
      {
          life_span: '11 hingga 14 tahun',
          length: '10 hingga 12 inci',
          weight: '6 hingga 13 pon',
          origin: 'Tayside, Skotlandia',
          description: 'Kucing telinga lipat skotlandia adalah salah satu ras kucing alami yang berasal dari Skotlandia. Ciri khas dan keunikannya adalah terdapat pada telingnya yang melipat, sehingga ras ini disebut dengan kucing berwajah burung hantu atau kucing coupari.',
          BreedCatId: 36
      },
      {
          life_span: '10 hingga 15 tahun',
          length: 'Sedang hingga besar',
          weight: '10 hingga 15 pon',
          origin: 'Montana, Amerika Serikat',
          description: 'Rex selkirk adalah salah satu ras kucing yang berasal dari Montana, Amerika Serikat. Rex selkirk merupakan kucing yang berbeda dari semua kucing jenis Rex lainnya. Kucing ras ini terbentuk karena mutasi genetik yang alami. Kucing jenis memiliki tubuh yang besar dan kokoh menyerupai kucing bulu pendek britania raya.',
          BreedCatId: 37
      },
      {
          life_span: '8 hingga 15 tahun',
          length: '15 hingga 20 inci',
          weight: '6 hingga 14 pon',
          origin: 'Thailand',
          description: 'Kucing siam adalah salah satu ras kucing pertama yang diakui jelas sebagai kucing berjenis oriental. Sesuai dengan namanya, kucing siam berasal dari negara Siam, sehingga ras kucing ini sangat mudah ditemukan di negara Thailand.',
          BreedCatId: 38
      },
      {
          life_span: '11 hingga 18 tahun',
          length: '17 hingga 25 inci',
          weight: '8 hingga 17 pon',
          origin: 'Rusia',
          description: 'Kucing siberia adalah salah satu ras kucing domestik alami yang berasal dari Siberia, Rusia. Kucing siberia memiliki nama lengkap kucing hutan siberia. Beberapa organisasi pendaftaran kucing menyebut kucing siberia titik warna dengan sebutan neva masquerade, termasuk Fédération Internationale Féline.',
          BreedCatId: 39
      },
      {
          life_span: '11 hingga 15 tahun',
          length: 'Kecil ',
          weight: '4 hingga 7 pon',
          origin: 'Singapura',
          description: 'Singapura adalah salah satu ras kucing terkecil, dan terkenal karena mata dan telinga yang besar, bulu berwarna cokelat bintik-bintik dan ekor tumpul. Dilaporkan bahwa ada tiga ekor \'kucing tiriskan\' yang diimpor dari Singapura pada tahun 1970.',
          BreedCatId: 40
      },
      {
          life_span: '14 hingga 19 tahun',
          length: 'Sedang hingga besar',
          weight: '7 hingga 12 pon',
          origin: 'Philadelphia, Amerika Serikat',
          description: 'Snowshoe adalah salah satu ras kucing langka yang berasal dari Amerika Serikat.\n\n memiliki empat kaki bewarna putih',
          BreedCatId: 41
      },
      {
          life_span: '11 hingga 16 tahun',
          length: '11 hingga 14 inci',
          weight: '6 hingga 10 pon',
          origin: 'Amerika Serikat',
          description: 'Somali adalah salah satu ras kucing yang terbentuk secara tidak sengaja. Somali merupakan versi bulu panjang dari ras Abyssinian.\n\nMirip rubah',
          BreedCatId: 42
      },
      {
          life_span: '8 hingga 14 tahun',
          length: '13 hingga 15 inci',
          weight: '6 hingga 12 pon',
          origin: 'Kanada',
          description: 'Kucing sphynx adalah salah satu ras kucing yang memiliki bulu sangat pendek dan sedikit sekali. Jika dilihat sekilas, kucing sphynx tampak tidak memiliki bulu sama sekali, tetapi jika diamati lebih .',
          BreedCatId: 43
      },
      {
          life_span: '10 hingga 16 tahun',
          length: '12 hingga 15 inci',
          weight: '6 hingga 12 pon',
          origin: 'Amerika Serikat, Thailand',
          description: 'Kucing tonkin adalah salah satu ras kucing yang berasal dari Kanada yang merupakan persilangan antara ras siam dengan ras burma.',
          BreedCatId: 44
      },
      {
          life_span: '10 hingga 15 tahun',
          length: 'Sedang',
          weight: '7 hingga 15 pon',
          origin: 'Amerika Serikat',
          description: 'Kucing ToyBob juga dikenal sebagai kucing ras Toy Bobtail ini awalnya dikembangkan di negara Rusia, merupakan kucing akibat mutasi genetik.',
          BreedCatId: 45
      },
      {
          life_span: '12 hingga 18 tahun',
          length: 'Sedang',
          weight: '5 hingga 9 pon',
          origin: 'Ankara, Turki',
          description: 'Anggora turki adalah salah satu ras kucing domestik alami tertua. Ras ini berasal dari Ankara, Turki. Kucing ini sangat populer dan terkenal di Indonesia. Secara sederhana, ras kucing ini juga dikenal sebagai anggora atau kucing ankara.',
          BreedCatId: 46
      },
      {
          life_span: '12 hingga 17 tahun',
          length: '14 hingga 17 inci',
          weight: '10 hingga 18 pon',
          origin: 'Lake Van, Turki',
          description: 'Kucing van adalah ras lokal kucing domestik yang ditemukan terutama di wilayah Danau Van di Turki timur. Kucing ini berbadan relatif besar, memiliki bulu berwarna putih kapur dengan warna kemerahan pada kepala dan bagian belakangnya, dan memiliki mata berwarna biru atau kuning atau bermata aneh.',
          BreedCatId: 47
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('breed_vital_stats', null, {});
  }
};
