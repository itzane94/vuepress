/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "24c3ab337e8e265cf5c044a31eeeedfa"
  },
  {
    "url": "about/index.html",
    "revision": "bd8061fb4cd988ca0f0a2e59612870ef"
  },
  {
    "url": "assets/css/0.styles.9c18e3b9.css",
    "revision": "ff273262e87837fd34d68d90d945f315"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.45a59d6f.js",
    "revision": "28557af0f4477ce9d61096b758717471"
  },
  {
    "url": "assets/js/11.7131e4cf.js",
    "revision": "6d442f8dec096a2e347b69d5e4869351"
  },
  {
    "url": "assets/js/12.2032e30a.js",
    "revision": "08a69161788df6b343f8ed32ce9f68f3"
  },
  {
    "url": "assets/js/13.2935f7b1.js",
    "revision": "649c8a92b7320b2e2613a4c0cc9fa960"
  },
  {
    "url": "assets/js/14.06bc1268.js",
    "revision": "0cd9659af6cb037c0d63e16aba2e338d"
  },
  {
    "url": "assets/js/15.932d2cc6.js",
    "revision": "cb157d8780848f084b7bc7c1657fd4b0"
  },
  {
    "url": "assets/js/16.d34d6734.js",
    "revision": "2b0122933edf55d2df19f1f5d431d69b"
  },
  {
    "url": "assets/js/17.3532124f.js",
    "revision": "e7bddf6d791e60ac0fdb079975cbb219"
  },
  {
    "url": "assets/js/18.e9142654.js",
    "revision": "42ef21936fbbda474baa2f598524339e"
  },
  {
    "url": "assets/js/2.6fc8154e.js",
    "revision": "fb629434e9762af234f94e9b4bfe7fdb"
  },
  {
    "url": "assets/js/3.07762fc5.js",
    "revision": "84df144a5091bdefc98c7030ef4c3123"
  },
  {
    "url": "assets/js/4.71579af1.js",
    "revision": "6fd3aaf52a0c2e089c16c093fe4cc265"
  },
  {
    "url": "assets/js/5.0a635dda.js",
    "revision": "f81167d383ba8058fd30274553e178c5"
  },
  {
    "url": "assets/js/6.1742b4bc.js",
    "revision": "b409899729572f0731a7a1fcc49671e6"
  },
  {
    "url": "assets/js/7.484365db.js",
    "revision": "c364bc2bfaf9193449cb548ff6e5269c"
  },
  {
    "url": "assets/js/8.85014434.js",
    "revision": "ec64b241b1170990d12ed041e8c9b0e2"
  },
  {
    "url": "assets/js/9.aa5a49dd.js",
    "revision": "dba2088cb2da31a823142cdd5cb996d9"
  },
  {
    "url": "assets/js/app.5f87c6e8.js",
    "revision": "7094185858b6077ae50a243f002a5b7d"
  },
  {
    "url": "blog/hello.html",
    "revision": "27911557c3de627a53e1490b837004e6"
  },
  {
    "url": "blog/js循环中setTimeout问题.html",
    "revision": "4a069be67dd8e7c8eb9dbde189e41175"
  },
  {
    "url": "blog/Markdown快速入门.html",
    "revision": "2e6e7b34a2ed1a4bdd6bb7d36d7c3797"
  },
  {
    "url": "blog/php session 的GC机制.html",
    "revision": "be018fbeeff67e20e216803c450bd527"
  },
  {
    "url": "blog/PHP中字符串当成数组处理的一个坑.html",
    "revision": "34371fa454aadcea0123aadc06370ff7"
  },
  {
    "url": "blog/PHP的openssl加密扩展使用.html",
    "revision": "305449cc4c7002c18618a7ef090aa8c3"
  },
  {
    "url": "blog/PHP错误抑制符导致引用传递失效的问题.html",
    "revision": "0b0f9c6fc99d11cc894c96023d0e4c66"
  },
  {
    "url": "blog/SQL注入.html",
    "revision": "4ea7ddf80764fa69499850d2bd3a6a8e"
  },
  {
    "url": "blog/unset和array_splice删除数组的区别.html",
    "revision": "7e10ae3451c22c5e4fc8c6d1a42c7041"
  },
  {
    "url": "blog/一个留言弹幕demo.html",
    "revision": "1b26afc6d009524459a4f8922aada241"
  },
  {
    "url": "blog/一道关于多字段排序的问题.html",
    "revision": "a48dd9c39590e46852832f4a88e795e0"
  },
  {
    "url": "blog/写给2017、2018.html",
    "revision": "df10711268fe4e9b0f5182b271f615db"
  },
  {
    "url": "img/logo.png",
    "revision": "2f835edff69096d0735bc094559b665e"
  },
  {
    "url": "index.html",
    "revision": "e2b80f009195866f410182d87808c887"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
