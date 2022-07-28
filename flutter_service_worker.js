'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "f85ecdd0cada6c989de01a8edc213a75",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c7d6c7dcbd6e5ffb147ba75b09153366",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1e78ecbe1691153285772161eae0298",
".git/logs/refs/heads/main": "6f10de3281cf173694a59eae667a12e1",
".git/logs/refs/remotes/origin/main": "49a7a8934ac97f76ecfb55211b5cde24",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/04/23a24510e9be02fb49fbbc61e8a1806a5e5a65": "84dffe0455dac6806c82934fd19326b3",
".git/objects/07/8da1bc90d986125bb06dc104ce0a559659ae1c": "513df55d6ee40969eb6a1675262a89dd",
".git/objects/08/e6169b51e371540d77a4077a23fbf600288b92": "d19cedb276960c167e092c2d210769db",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/bf67d992b0c7dcc0969902462dda2a121a4cf3": "4c8ff1c8e60c3442999e0081ad78440f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/8179b48db98bf7ce25d316c814b4a6f177f07c": "dd05a25984144ad54fcdbf356560a9d0",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/1a/445e9dfb864656addb11391eacbe171a54e446": "73397d232acc69874c5a5846d21d9e62",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/22/68ae64243bb21243e33f14afc71f647d3ae080": "56701023f43492228b1b9b6542066483",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/1836d13dffd2289fbbbeb1db6f1895e4b5fac1": "7e14fedf0d633dfa4d4d04d75fb36e5c",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/ea787cd2eca2f637d8345a8ac3d745c0d1f334": "ec07627bee2c1c57f6ec1a7338729f41",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/35/9a39b160ca071d7fffd6a093db697e57fd6cfb": "da2041fae4bfc9c2c85b172d293d27b3",
".git/objects/35/b639000b5a6ae8c987aaadc8217f03167fb1f2": "00d9d882fc8572f9a4d00f2bd0b696d8",
".git/objects/38/c5d771117c2b569599141b2c90ae3d55400ee7": "096e23b0ff34a8f153b7ccea0d6d34a5",
".git/objects/3c/88e6994c4f4aba6b2f81ad15c9baf963ca462a": "0e4f9ea84b1bf16760788a8d6b6f3e1d",
".git/objects/3e/e864498b946a01527839f72a170d8d38cc67d1": "6f4e9b91de2e436df3c2f9c2adf97778",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4c/5b17875e46040d2873e2487418f500926ea687": "8540da66fd6303054aca06094b55ecab",
".git/objects/4c/71e0bdfd93e7f0f67f048e529bb8fef8109c26": "ed0560e25089f429dc8563e858d79d01",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/24c98d52404330a3f7510bc7235413726e4677": "5519a6ccdbf02c5d132009a50a86869f",
".git/objects/61/c48e931b47b9f9b936cdfad9f78f7edd1d98d3": "4af01e4fec0abc987a0302b3cef359b8",
".git/objects/62/d379240dddd89fc38963ff52af1cdcc0bf5cc3": "8ed0a30c97b217abba7209e8b1d87740",
".git/objects/64/33785d92780340d8e1aa0f230f0afba9bec076": "63bed3a193421a6b3db149d4cb7dcf1c",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/6a/66215918b547480197be157b2794b4f6fb9e61": "907e5694009a1b91cc2db2abad0fd5ca",
".git/objects/6b/b7f93418198963e6c06366ae8f2c2970629371": "6fbc46eb844fc46222a828c81ea41726",
".git/objects/6e/eac7e95187757b69816924bbfc018faadea58b": "a080fdf261835d563a7273adef31ede0",
".git/objects/72/657dbefe25340e46fca7807eddab236fe63951": "7b5ca88c216c414fc4a7c12eba198ae1",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/75/da2b54ace25bea05ab7bfa43fe51b49a929c34": "042ae35400e458b3d2b20e40de52947d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/11ff800a8d203740bc738b7e3b6b1afa062751": "16f7149a232a22f987356174baa24b4e",
".git/objects/83/7e442708834d4863087ddb8d8bcad12d8fcb96": "66e5709f5b3eeb76e6dda5a2673abe48",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8c/ea5eb4e1b5ce560ddb205945dbe43a089252d2": "f8ed95f56bcf6da9d34ec714cf322628",
".git/objects/8e/74e697ba3cac82ceccf090efde8aff2df704c4": "f62a2b4a3d87f6f1052a90bd66644e1b",
".git/objects/90/b9b4950d78c7af405948d136ff24e681e801a3": "984b5660d2a742c7450e6f855b949b2f",
".git/objects/94/19a7bc5ec0fbd4325663642cc4ddf4eb9f3f85": "d4a4bc5592d9cd78ceea84d51e0ea4a4",
".git/objects/97/5558f3855bf17c0b4f2ed8d280d300fa2f3182": "971d7f9c0b7cee3c5d41148dfe285147",
".git/objects/98/b905cdf6be1bb2c7cd03a8dbdb9b4733f32d6c": "bdc9c8f57627da31b30d03b48d874d3e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/7e4de1ac0ced7e91251d638cffd85c00ab2998": "3c857f6c5ea00f3033c723e91fc52eef",
".git/objects/a9/c644a882a2fd8c8a1029223cd8c18a79cc2733": "98c549796f4642494e0866fe0f3f99b6",
".git/objects/aa/f534a54b2f447c58f105e5981071a449514c4f": "91b9e8cd067b920d563c4892b480b1bd",
".git/objects/ab/da03b95c5fd2c8f4071fbc7c292c273cb79b44": "157dfe48408f59c53ad5268675229fbd",
".git/objects/b3/b22926b2ef1e33bd4251eef68e7fa56e83db63": "67569c7d60bdb24b25234c1ded0fa53e",
".git/objects/b4/2c2616abba25c4e3ee59fe3d2d0a138ff61f71": "a6a2a65f8b1f825ac4f4e92f66efc572",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c92195013cc7c3664930a1865748b79d0040f1": "9a24a6bfc0035a116dee7f7a24590bb1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/7d3ebd7a5a9a55f242b0dea2ba2070a99dcacd": "3a0a3dba4c68bdb1a067cd90fc6d2520",
".git/objects/bd/f5f19f00198deaeef31559a08accc08d1e0c37": "ccfdc44ea63cbbb54cd7e507cafecb43",
".git/objects/c0/918b1a23b320a9c631daa323aa219fbada1d33": "3ba5a248a3b883d74abd2b5b93ce2b3a",
".git/objects/c1/d174000ceb96d112bfb6f0185fb86ec1bd8f06": "f07da7aeea88c2a189db7d2e14137c81",
".git/objects/c6/c6ef7095d1d6f4b44f120f1feb6f1dbb837f1e": "ad6df9049768831b8c08bd98c097c00d",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/8292abc58722e563f692b985e7f23f4b0eab52": "6748117e4ac62dfd51311f48e54bbb2c",
".git/objects/d3/26e35ce5242560a2df29b7cdd7eda9d86f2605": "17a3ba391060087368e0e374fb7416c3",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d5/0641fbdada04add905b60eedf2a6c72827e837": "e54a87a902fb1b95b633e525566f74ca",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/e6d366ff13d89c5d8ee6f0d7fddee1f09d898a": "1c9b442476ea1edda3990e098536c533",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/69948b7f99f3f8c7c6e7ab55068dc92fae29d0": "4434a06005c1c83c654d2624a9d09fe4",
".git/objects/e9/bc249f1d9cdfcaed15a1c3a16f02a6cd743f74": "2a68450d558f1e0220f4239e9fa897d4",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cd10dc4b990c5afbb0b8caae79c0135a54face": "ba14fb7bbcf250e53a71722e6c2005a8",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/f3/372d356742c119aa50ff4173a754a5be6d2cf2": "a07d37f032222d1e30061840c59b913e",
".git/objects/fb/727a8c89a1052388b891c423e3cd7c6ae9e277": "8087cd908ae24240f985f71c73fbc0d8",
".git/objects/ff/0815cd8c64b0a245ec780eb8d21867509155b5": "ceece04122f357c0586f02c120ac8ba5",
".git/objects/ff/b126cb3f77f39cf0df6762fa970ac1ec647721": "4687bb9dc62b5377df1139b638cfe90e",
".git/refs/heads/main": "ff78123819f5b6b015a4bb4c6d7e5860",
".git/refs/remotes/origin/main": "ff78123819f5b6b015a4bb4c6d7e5860",
"assets/AssetManifest.json": "1e0ad4b6e53a12532a79abd90c8961a3",
"assets/assets/cashier.png": "00a7a84a181d5938eb65f5caa118c0b9",
"assets/assets/cashier_receipt.png": "8ee4bfab91a0a1e5a9ce412e1e207561",
"assets/assets/clients.png": "428c6f05ec447f654195bfbf044dabcd",
"assets/assets/collection_document.png": "c7489f4dd26dd035dabefb665691b69a",
"assets/assets/expenses.png": "42d7103a65823ea8a71c3a3b7531f973",
"assets/assets/expenses_document.png": "133dfe2d4d0bd33f4887f351d727a838",
"assets/assets/expenses_seizure.png": "f0a2d7da6167b371678b72367474cd61",
"assets/assets/gard.png": "a1cc4994a3c050cf0695ee6cd1c969ac",
"assets/assets/group.png": "675cb0497bbdd97543b5edff4c7236fb",
"assets/assets/home_background3.png": "7b3934da6d1a40edde987395630e889f",
"assets/assets/kinds.png": "5242c03b52e973aecbfeceae0d2c9e85",
"assets/assets/mow.png": "92f544bc67cddec5d2a3e063f504164b",
"assets/assets/mow_payment.png": "b8ba990a7597a1f85a4b06472c2ddbb6",
"assets/assets/mow_seizure.png": "6138081b53811d96548fe61c32caf18c",
"assets/assets/new_rec.png": "36a76f511e331596582c327acb55beb9",
"assets/assets/operations.png": "25796bdfe547268083c43418d7811678",
"assets/assets/order.png": "5465dd5b79de29bee5f988168bf42e48",
"assets/assets/payment_document.png": "615da81cf743fd9f7d41e00ea39a7754",
"assets/assets/products.png": "3574a5113ae87654fc5ecbff3402b78a",
"assets/assets/puchase_order.png": "7084b6a46bf498521f306fcaaade771f",
"assets/assets/purchase_receipt.png": "d10ee35437c2c445544178f9164d69ce",
"assets/assets/purchase_return_receipt.png": "2f2d8fcb025e90d71a3a33afa0653e9a",
"assets/assets/return_operation.png": "435043d58627e6f749fe9ba76fbb4033",
"assets/assets/sales_operation.png": "523e02ea5bb0e675cdaf600881d0ef82",
"assets/assets/smart_loading.gif": "18f1d8f201b8f0956959181e7bc21822",
"assets/assets/stors.png": "5dad8598357c03756bed3cd6618a686f",
"assets/assets/stor_transfer.png": "5b94369f9aa5cda32a2e76c9fe535f84",
"assets/assets/test.pdf": "e4eb81aadca0061fad7c87a495888670",
"assets/FontManifest.json": "ef60d57e6222429061ed2f497ac23cae",
"assets/fonts/arial.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "aab9418dfba65900612520148b7fce79",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "4ac1dffd8bfe1b939faee5f245acdc98",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "712e9f830bffa412cd5b8a707df6fceb",
"/": "712e9f830bffa412cd5b8a707df6fceb",
"main.dart.js": "1446c97cf6f35bfc05fc219d5fda0412",
"manifest.json": "d09732c021efdfa5016788693ed35043",
"version.json": "fc3155200656c78227327abc6370e1a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
