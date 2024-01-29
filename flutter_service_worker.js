'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "f0e6b61d1f76e946704469fb339f76e4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1d0b9b9d0de811f402e764f19e18a994",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d5de3668e3aa1db5e5d826922290a60e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29571841f1e5f194cf230d0eca3c5d02",
".git/logs/refs/heads/main": "43782402bdbec439ee0307a33fbfa80b",
".git/logs/refs/remotes/origin/main": "bb38d6d41e1bb2d0155df156aa440da1",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/602a89561910200f09027a8075d8bc62d24f8d": "92fcbabae0fe7eab7fd8fabc68216351",
".git/objects/07/95996762cafa9a88daa13517ec34f754dcf767": "6a4cbd4445278f56988d412bfc590887",
".git/objects/0b/fec257cc4a81a06c7cb8af44d87ffed23d94eb": "621aad7b64f6826eab113198d8891c6f",
".git/objects/0d/7017d0648f76af33706a1c33baaf68ca72957e": "c6f09cf079b8a6c542f44585de8a626b",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/cca0a461b6b9695eba079dbc1e64fdd9de02a2": "a6b07415120f5d4ed9b055e656b9765c",
".git/objects/12/d0b0940f7d4a741d1e61b6f491e5017e3ebc6f": "f87d6f9ddf8e2991e4bdf565140a814e",
".git/objects/1f/36ac5134bd07041b00bb2236d26c0bc321a673": "ae9bde4e14719151936ab8e71c4406cc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/9ad103945ce0352655d876ee93a82e03013931": "317b5726fad5926ee7b534698459d507",
".git/objects/24/0c8576299feda19a2ad412c1e4fda00c0421dd": "6d2400df2e99b2e3404cb8671a1c2f79",
".git/objects/24/2ecf89877978939e34280f71522a74376cefec": "2c164f5575af40ce245cd75f449d1ce6",
".git/objects/28/9ef32c4c155212e4ef4d025c477b71edc0ef41": "c022ad95af26907550558264877994ba",
".git/objects/29/6062419c072474197e323d2a242775adc66c94": "d181d5d6f348ed6e36a1f64f1a0a77b5",
".git/objects/2b/68174aee9765ad5d708d707d2e1335b14b7bbf": "17c3e3f979f4577db55e7a906b36da57",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/e2ad165218976ae46583d57955d48e1ad313a1": "e26d676a3ac0bfad5707eb0b56752346",
".git/objects/2f/f6edfa729c96eef082056c9960181975d75755": "a0199cd88c392788c764713259b4be75",
".git/objects/30/2fc965afb2462bd358b1cde2583ed889148923": "fe9d8508781158218f953928f6d0564c",
".git/objects/34/7ddefa4ea2afd94c383c17314aa7d854674d4c": "d291b6afeb1725180c00fc96aa821aa6",
".git/objects/38/6b5b851be672f3cd9925a650f41936f60f53a7": "68070f8c6b1e2d909acafbc6aa542ae7",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/d67774fd65e0e3f173e673778439901f40d353": "735db76ee50f6118c338ece9b685097a",
".git/objects/3a/dbe29d92c96db984ef79f4062614569f3861a3": "81db07fde79acf8193178f8376cf9445",
".git/objects/3a/f4d2d10a85204c53935873627ac1af75d24337": "f89e141ba75af412e354a4957aef7219",
".git/objects/41/47d12e83c7d08c1e2a60b23c09d3691d9df06a": "fde055b1e002e70e081f51637995baff",
".git/objects/43/243ac725831e5d4d8e863c40ae31405da62642": "dd176e5b4cbdcb3b4754c3235bd42ab6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/13eea14031eb247c37f68e0608ef616e23cb08": "9690fb236eba3d3e107ea592abc5044f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/3c150e0bc17e892acb7f4b7b27c1b8e8d66e7f": "de655d3d0ddc9c423efd0a8e858fc0fd",
".git/objects/4c/e571dd5d3c18274eb187c4272a030705e2530b": "8c57f893e7a6aa4219f11bf8675fc5f1",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/cca16af1b4b8e09f19b1dfb2a6c6ac47e9db97": "4f49efa958781c17e77c5f9e5d07e19a",
".git/objects/5a/2836172a7c830466f496ebc1e5d445e2a5de75": "46731bc9b798cc07437a94783e1d8f1f",
".git/objects/5a/b9011e4db315b190f3aa21c249675fa77d8972": "7b357a5e94f391383ff8a14dfbe1aaf0",
".git/objects/5c/7ced803fd9c44ac03d48f4b72873aec26d6442": "a8b625b572b99c3050570b50b37c83d6",
".git/objects/61/58cfd4dfdc39393fe2d9f4036e3969e8e13fea": "05d91b8087db065d32b87a1a30839622",
".git/objects/63/f5c0a012103896598e86523df8ab2f4bded477": "15236996fe47753a527da8acf49386d6",
".git/objects/64/0e3ee21fda8e41a3b1040dabc4e0451b1620e4": "7a187b1838a89a3f611f74e4dec8f16b",
".git/objects/64/55767b1f48d1af7420991a822d82fc2dca610d": "d79fca9afdf5c5eb937ec552a0502de1",
".git/objects/68/fb9e7347e71ef9c69a1bff294cbb59fb525e31": "192389fd46c8cf999961e152dac23efc",
".git/objects/6b/c9ca528869869f3f53b58584e8ede2ce123fc7": "66b633ab99a604a7e18959dffbbfbe7a",
".git/objects/6d/e854aaa1b8adc15a355c5fd5c70f71d3d028e3": "f32e04f62785b1b0bd7ce2d35efef3f8",
".git/objects/6e/66d514907e6b9de70e10a1ac54eaeb1f6dff5e": "e1d23c5493312db889de475c0b267081",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/72/e94b807b427eae97949e88606858c501780cda": "4c9de10519583c70004980dbb9aface2",
".git/objects/75/c6902a2526c7d9037d8cb487b8f1da00423946": "8c8f12117d0f36820203fe1ba3439897",
".git/objects/76/e6c164752c38225611d9c03ad934c9d7813ef9": "6d319c62630c91804d402257a7f527d5",
".git/objects/7c/3083b4bd94fa7dde818ada8dbb88ec14db63ed": "6eb266737a1db5542b4a9cbc714574e3",
".git/objects/7e/91ccc16001b9667195e32fc824912b4c4a7a05": "ffe0810b6f653a3547e4434b767bf0e5",
".git/objects/7f/1c9d84ec6a8d574906be730189dc285959163c": "4ad10d5fbf8fd53be7494bb92c01bebc",
".git/objects/81/b90161539301a825bff77b071a0aee656898ed": "32d13b7e4e087834ad4b88e7ddf37695",
".git/objects/86/6465ecb8db815f9769bb1c6c2df74ba630aa3c": "0017e55e6e604687b61f6bdf8367f49f",
".git/objects/8a/6c1feba1de0f4c198313fe144bc28c0361c387": "efac3c3d4ea396b0c5146b90cc3f1423",
".git/objects/8a/9f90a0dafde940b0ffc1da3137d771e8fed8a9": "5ac197c7d8b3d22aa935b2bb75f358f2",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8a/ef6848b5fdd027aac7f61d3fa475faea254c47": "7ed5ff2f9db008a287d91a6aed1a72ca",
".git/objects/8f/5a9a77b6827596302142d6e99cb0f170c71d79": "9e602126ea18d2c97b604c2b8efe03d1",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/32928702fa3ed7c023d3f864d9ee940c2101a6": "d5002f102b955acdce7e41187e21e919",
".git/objects/97/57e0a56e2a6ca9ebe5972d1f09e87032be0084": "e38a8e07448fc49aa5449318a06e4f64",
".git/objects/9b/d1637ed9e2cb72973aca1ef3992f9ccf6c0c3c": "fc67af7b25cc3ebcaf98d2b7394ff33c",
".git/objects/9e/73d271d0029ba6a94db92b40e39eb22342f61f": "366cf7982819adee1ddb8c77a7056dd3",
".git/objects/9e/820cdb7e5ddfe3494a3d14bb4ae844eb322f91": "d52796360a7e966c33871a55acc8bfdf",
".git/objects/a0/6b8d00ed7ce3b70ca83ab154c895bdc7cbc590": "9333691b9c3a68769838ff9187cb29b8",
".git/objects/a3/a1d24ba2e7c743128baf6a23f2e71171ab2f4b": "b57a748b3c99aa405d01fbda646b6865",
".git/objects/ab/f729fb37d9857ec66f66def761056d94a39d50": "90564f932137664b74f29e01b5a71d0f",
".git/objects/ac/fc8176610d38f9046c9f68bc4a23dff7ea0fcc": "be58f17ec2d5b38901ce0057b6b7e007",
".git/objects/ae/a5ffe7af08b9db605baffcf05b4f138f556caf": "90bb99e3dc97308f62053cd740a20d41",
".git/objects/af/047133447d9073491b9eaf42f5d615aef9a8af": "4beb5498c7fae6f76948ce7b6296d35a",
".git/objects/af/c8864500e56ab256dc0ed359b1149564bd6e72": "9f8ea8df3be43f95099435aaa6bcc04c",
".git/objects/b4/d01223e2a88417cdec4c69df1cb6b4803868ac": "c4291ab613be4c7d9978318d3bbf97ab",
".git/objects/b7/706ed2646a7f6d2e281ad4fd86db3f3739ad2e": "482ab491db522e9656d96c7e11cd41a9",
".git/objects/b9/78e05812258f983603960bd52831f89f3e83ef": "7556d66e4a34f3998fed292956f55868",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/1f4e5137cd8bbe10d668a691d1f1f0168a5fbe": "220cbf9578df5d4cb4a29c504cedfc10",
".git/objects/c4/172cbdbb8b919f6ad19a3233b15e7dde15a8fe": "8d4099fb7b6ae0f4ca47ed185b00ff95",
".git/objects/c4/9be021b0d08c22a17e39184bae3f38d6cc9d4f": "ef64e91dad9011b985dfc1ec00c6fd67",
".git/objects/c8/c21ef50ad13ed2983fa663552828324b4d935a": "19310c81eec3e8d241943745f36041f5",
".git/objects/cb/89dfb865d1b5ecf36e266bdba7d8fb55f01c62": "4dddba1d576d12b7231ff4e3f0bc145f",
".git/objects/cc/d5a7b44e22ac5b1566d84abec91058814f3ba8": "0b1472198499b55ec277fda2739e1d2d",
".git/objects/d6/bbdb539e100ef76583353ce0e86204e901ff09": "da9bce9e68eac95a6261f0148570817e",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/8bd152c51c3bd4a927a402fec423b33020dbf6": "a5e1c991cd344ea3f9e4d6dd35885401",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f2/0a0b811885b4f176ea2a6ce2ddf32349d8d4b6": "dd1a47d0c20d641b4e8b8b4519388d01",
".git/objects/f6/29fac458c9c40ac91a41bf686a3030fa359cd1": "49e9b94e2949a7a75b0134a683ef3267",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/3d7e9ce5b60eebef9d250e0e84809f7d0c2e05": "80ff8b7994fcd90bffef75516d252b2a",
".git/objects/fc/1ffd38d2c477123d8be34b63ed473c9e6f704b": "fd93145a38337f14668408126202aac9",
".git/objects/fd/1eeb89b27d87956b8757e6a5d9fc08f917445a": "e2c43248fd08739d7471d3c69507238d",
".git/ORIG_HEAD": "05e458a2f2aca6d87c72a59169a91042",
".git/refs/heads/main": "05e458a2f2aca6d87c72a59169a91042",
".git/refs/remotes/origin/main": "05e458a2f2aca6d87c72a59169a91042",
"assets/AssetManifest.bin": "cb92114ead183b93fc077125e1752c8f",
"assets/AssetManifest.bin.json": "c6b6d37a0dc341a40a928af175b77856",
"assets/AssetManifest.json": "ca45e2ead5a61a1b10093aa597fb42e1",
"assets/assets/animations/intro_animation.riv": "a61dfb298b1099ae5160671ef3cf7249",
"assets/assets/audio/starting_tune.mp3": "e95fac72b416e63aef2e82f2cd765b7b",
"assets/assets/fonts/Preahvihear-Regular.ttf": "b728ff1cdead5239b67535d2073baf70",
"assets/assets/icons/aws.svg": "71a20edd4b10d155a634d7efc6827532",
"assets/assets/icons/dart.png": "80e0cfaf4e39a2700665ae5762d76645",
"assets/assets/icons/docker.svg": "8fd5c2c8ba202e03937af0ee5bceac6a",
"assets/assets/icons/firebase.svg": "ab7d48c559d630e419778d14e228988b",
"assets/assets/icons/flutter.svg": "9df4f9d9c9a790e3d95e72f1584e2187",
"assets/assets/icons/git.png": "91e38c1fb4b2410c06d56542d09086d0",
"assets/assets/icons/github.svg": "b8aeb451034beeaf0148cfbd7d9d8226",
"assets/assets/icons/go.png": "4121d0e7d0eabfd18efc3cc2c49744b9",
"assets/assets/icons/insta.svg": "97bbc4283f38a1eb007226e05da1d86b",
"assets/assets/icons/java.png": "58f4dffa784c8124e48cbb2fc3e4d12f",
"assets/assets/icons/java.svg": "f38ea1ca804e6d9374e00139eb1c28b4",
"assets/assets/icons/k8.svg": "92f74c5387269bc2c41d44935990fb75",
"assets/assets/icons/linkedin.svg": "681c4fa9689d5e3c0a36270793d71244",
"assets/assets/icons/linux.png": "e1e82f42a889005f38806051f50b58c9",
"assets/assets/icons/logo-web.png": "052b9897bee68eb67ab7b314d9f685e8",
"assets/assets/icons/mongo.svg": "5929aeee3ce5495b9475613e2fae694f",
"assets/assets/icons/mysql.svg": "a0417e913833052ec18152478e1e5f78",
"assets/assets/icons/node.svg": "805c64b7e3dcac55f50a38d7d13c6621",
"assets/assets/icons/postman.svg": "2ba02454eff8b96a660cab7864d5a2e6",
"assets/assets/icons/python.svg": "0b948ab5dd3f9e988cd9130da860408f",
"assets/assets/icons/spring.png": "1b48ce7730949e46142a7fd49ca511b8",
"assets/assets/images/bird.jpeg": "4f392a354778b632701201e7d78432ee",
"assets/assets/images/bookmark_image.png": "37c960601041899f682a60d84e4587c7",
"assets/assets/images/bulb_image.png": "3a63566961962814a4655345b630457e",
"assets/assets/images/controller.png": "f259dba83590e4bb3411ac5b308b4b5f",
"assets/assets/images/cup_image.png": "ec0c90ea4804d05bf8855c3164ad5825",
"assets/assets/images/dp.jpg": "8308b49c6977a9816a07f37427e57197",
"assets/assets/images/game.png": "43508e9e88c1c449db9aa6b31f7eeb72",
"assets/assets/images/picker_image.png": "a4a5d9191de6dfd8776bee2968f95ba4",
"assets/assets/images/project1.png": "25530360a64910013b5d200cbdbeb6b4",
"assets/assets/images/project2.png": "17c298abac62e5655079d9d882c95184",
"assets/assets/images/project3.png": "3f4e43dd8903f68fdb0323fbd1fc22a0",
"assets/assets/images/self.jpg": "1bebea56be628d61ccd82d483b6e2a96",
"assets/assets/images/snake.jpeg": "88804bdf7108f6b9f6f9092a50bcc533",
"assets/FontManifest.json": "91a3b378b34fa885f5a6700f6894d35b",
"assets/fonts/MaterialIcons-Regular.otf": "1a4e9807be9f1fb9e2ccb8fc859931b1",
"assets/NOTICES": "68f6c770dd72a08f7c1426961aff55fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "1252049f3a7bee9896929b2b849a0569",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "d1c55eb8f5fc73114578070e1b4a87ec",
"icons/Icon-512.png": "9f6f3125a88b13308b2c9fe57d9481a5",
"icons/Icon-maskable-192.png": "d1c55eb8f5fc73114578070e1b4a87ec",
"icons/Icon-maskable-512.png": "9f6f3125a88b13308b2c9fe57d9481a5",
"index.html": "2f49f9ea0e1003eec41d461faf499bca",
"/": "2f49f9ea0e1003eec41d461faf499bca",
"main.dart.js": "ed873a26e25bfd9a093d656ece38d574",
"manifest.json": "0e77b2a553ac3a8977f10f3c371e9c67",
"version.json": "3c890bb1c3d01fa79b07933a503576fc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
