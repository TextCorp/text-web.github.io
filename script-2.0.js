function aramaYap() {
  var aramaKutusu = document.getElementById("arama-kutusu");
  var aramaSonucu = document.getElementById("sonuclar");

  var aramaKelime = aramaKutusu.value; // Store the search term

  aramaSonucu.innerHTML = ""; 


  var aramaLinki = document.createElement("li");
  var aramaLinkiA = document.createElement("a");
  aramaLinkiA.href = "https://" + aramaKelime + ".com";
  aramaLinkiA.textContent = aramaLinkiA.href;
  aramaLinki.appendChild(aramaLinkiA);
  aramaSonucu.appendChild(aramaLinki);

  var googleLinki = document.createElement("li");
  var googleLinkiA = document.createElement("a");
  googleLinkiA.href = "https://www.google.com/search?q=" + aramaKelime;
  googleLinkiA.textContent = "Google'da Ara";
  googleLinki.appendChild(googleLinkiA);
  aramaSonucu.appendChild(googleLinki);

  var yandexLinki = document.createElement("li");
  var yandexLinkiA = document.createElement("a");
  yandexLinkiA.href = "https://www.yandex.com/search/?text=" + aramaKelime;
  yandexLinkiA.textContent = "Yandex'te Ara";
  yandexLinki.appendChild(yandexLinkiA);
  aramaSonucu.appendChild(yandexLinki);

  var twitterLinki = document.createElement("li");
  var twitterLinkiA = document.createElement("a");
  twitterLinkiA.href = "https://twitter.com/search?q=" + aramaKelime;
  twitterLinkiA.textContent = "Twitter'da Ara";
  twitterLinki.appendChild(twitterLinkiA);
  aramaSonucu.appendChild(twitterLinki);

 
  var wikipediaLinki = document.createElement("li");
  var wikipediaLinkiA = document.createElement("a");
  wikipediaLinkiA.href = "https://tr.wikipedia.org/wiki/" + aramaKelime;
  wikipediaLinkiA.textContent = "Wikipedia Sonuçları";
  wikipediaLinki.appendChild(wikipediaLinkiA);
  aramaSonucu.appendChild(wikipediaLinki);


  var youtubeLinki = document.createElement("li");
  var youtubeLinkiA = document.createElement("a");
  youtubeLinkiA.href = "https://youtube.com/results?search_query=" + aramaKelime;
  youtubeLinkiA.textContent = "YouTube'da" + " " + aramaKelime;
  youtubeLinki.appendChild(youtubeLinkiA);
  aramaSonucu.appendChild(youtubeLinki);

 
  var redditLinki = document.createElement("li");
  var redditLinkiA = document.createElement("a");
  redditLinkiA.href = "https://www.reddit.com/search/?q=" + aramaKelime;
  redditLinkiA.textContent = "Reddit'te" + " " + aramaKelime;
  redditLinki.appendChild(redditLinkiA);
  aramaSonucu.appendChild(redditLinki);
}

document.getElementById("arama-butonu").addEventListener("click", aramaYap);
