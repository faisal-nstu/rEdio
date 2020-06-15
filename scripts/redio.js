const remote = require("electron").remote;

playing = false;
player = document.getElementById("radio");
playBtn = document.getElementById("play-btn");
pausedBg = document.getElementById("paused-bg");
analyzer = document.getElementById("analyzer");
loadingAnim = document.getElementById("loading-anim");
count = 0;

playPause = function () {
  if (playing) {
    player.pause();
    playBtn.innerHTML = `<span class="tooltiptext">PLAY</span>⯈`;
  } else {
    player.play();
    playBtn.innerHTML = `<span class="tooltiptext">PAUSE</span>❚❚`;
    loadingAnim.hidden = false;
  }
  playing = !playing;
};

prev = function () {
  playPause();
  // go to previous channel
  count--;
  player.src = stations[count].radio_url
  playPause();
};

next = function () {
  playPause();
  // go to next channel
  count++;
  player.src = stations[count].radio_url
  analyzer.hidden = true;
  playPause();
};

document.addEventListener("DOMContentLoaded", function () {
  // player.src =
  //   "https://playerservices.streamtheworld.com/api/livestream-redirect/symphony924aac.aac";
  player.src = stations[0].radio_url;

});

document.getElementById("min-btn").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.minimize();
});

document.getElementById("exit-btn").addEventListener("click", function (e) {
  remote.app.exit(0);
});

player.addEventListener("playing", function (e) {
  analyzer.hidden = false;
  pausedBg.hidden = true;
  loadingAnim.hidden = true;
});

player.addEventListener("pause", function (e) {
  analyzer.hidden = true;
  pausedBg.hidden = false;
});

player.addEventListener("error", function (e) {
  alert(e);
});

stations = [
  {
    name: "Class 95 FM",
    image: "15173.png",
    site_url: "https://www.meradio.sg/radio/class-95-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/CLASS95AAC.aac",
    description:
      "Singapore's best mix of music over the airwaves is Class 95FM. Be entertained with hits from the 70s, 80s and 90s.Caldecott Hill Estate",
  },
  {
    name: "YES 933",
    image: "15150.png",
    site_url: "https://www.meradio.sg/radio/yes-933-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/YES933AAC.aac",
    description:
      "1990年1月开台以来， Y.E.S.93.3FM的前身【醉心频道】就开始为群众播放最新和好听的中文流行歌曲，它不仅带给听众最多最快的新歌，也是送上全岛，全亚洲甚至全球独家首播的媒体平台。1998年6月1日，醉心频道这金牌名字改成Y.E.S.93.3FM是YOUR ENTERTAINMENT STATION的缩写，从而年轻化和前卫化。郝德杰山",
  },
  {
    name: "96.3好FM",
    image: "66455.v6.png",
    site_url: "http://www.fm963.sg/",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/HAO_963AAC.aac",
    description:
      "新加坡23年来,全新的中文电台! 空中内容除了有最精彩的八,九十年代的经典歌曲,也将带给你生活里不可获缺的资讯!",
  },
  {
    name: "Ria 89.7 FM",
    image: "15252.v1.png",
    site_url: "http://sites.xinmsnent.mediacorp.sg/en/radio/ria-897-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/RIA897FMAAC.aac",
    description:
      "Ria 89.7 FM adalah sebuah stesen radio siaran dari Caldecott Hill Estate, Singapura, memberikan Indonesia / Mala dan Dunia Adult Contemporary Pop muzik.",
  },
  {
    name: "987 FM",
    image: "15212.png",
    site_url: "http://sites.xinmsnent.mediacorp.sg/en/radio/987-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/987FMAAC.aac",
    description:
      "987FM is a broadcast radio staion in Caldecott Hill Estate, Singapore, providing Top 40 Adult Contemporary Pop and Rock music.",
  },
  {
    name: "Love 97.2FM",
    image: "15163.png",
    site_url: "https://www.meradio.sg/radio/love-972-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/LOVE972FMAAC.aac",
    description:
      "Love 97.2 FM隶属新传媒电台旗下，主要针对25至35岁的双语工作人士，播放80-90年代的中英文金曲，让听众在忙碌的工作中，放松心情，享受生活。郝德杰山",
  },
  {
    name: "Gold 90.5 FM",
    image: "15177.png",
    site_url: "https://www.meradio.sg/radio/gold-905-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/GOLD905AAC.aac",
    description:
      "Gold 90.5 is a radio station located in Singapore. It broadcasts the best oldies from the 80s and 90s. Some of the most popular ones are Nite Flight, Rock Of Ages, The Mike & Joe Xperiment, Solid Gold and Rock Of Ages.",
  },
  {
    name: "Power 98 FM",
    image: "15253.v1.png",
    site_url: "http://www.power98.com.sg/",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/POWER98_LOVESONGS.mp3",
    description:
      "Power 98 made its debut on the airwaves in Oct 1994. The station strives to offer something different to its listeners in terms of music, its line-up and a mix of lifestyle content. It appeals to a mix of 20 to 40 year olds and reaches out to almost 300,000 listeners on a weekly basis with an additional reach of 350,000 exclusive listeners in all SAF camps and SAFRA Clubs! Power98FM is part of the SAFRA Radio network.",
  },
  {
    name: "Money FM 89.3",
    image: "67067.v13.png",
    site_url: "http://moneyfm893.sg/",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/MONEY_893AAC.aac",
    description:
      "MONEY FM 89.3 is Singapore's first and only business & personal finance radio station. The English talk-format station will focus on business and money-related topics, as well as general news and discussion of wider social topics such as health, education, food, music, fitness and more.",
  },
  {
    name: "Jia 88.3 FM",
    image: "15209.v5.png",
    site_url: "https://www.883jia.com.sg/",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/883JIAAAC.aac",
    description:
      "贾88.3 FM是从红山庄园，SG，新加坡广播电台，同时提供英语和中国流行音乐24小时服务。",
  },
  {
    name: "DesiNetworks",
    image: "15266.png",
    site_url: "http://www.desinetworks.org/",
    radio_url: "http://192.99.8.192:3224/;",
    description:
      "देसी नेटवर्क एक ऑनलाइन रेडियो स्टेशन बेहतरीन बॉलीवुड / भांगड़ा / पंजाबी गाने खेल सिंगापुर से उत्पन्न है।",
  },
  {
    name: "973FM: Blasts That Last",
    image: "29038.v8.png",
    site_url: "http://973fm.weebly.com/",
    radio_url: "http://c16.radioboss.fm:8115/stream",
    description:
      "973FM: Blasts That Last, playing Contemporary Top 40 hits and a minimal amount of alternative, indie, and local tracks (as part of our support for local talent). Our extensive playlist will also keep you going throughout the entire day by blasting hit songs from the late '00s till present day.",
  },
  {
    name: "Naga FM",
    image: "45651.v1.png",
    site_url: "http://www.nagafm.com/",
    radio_url: "http://songs.nagafm.com:8006/;stream.mp3/ogg",
    description:
      "Based in Singapore, Naga FM is an internet radio station that broadcasts in Tamil. Some of its most popular shows are Devotional songs, Retro Records, Good Morning and Good Evening.",
  },
  {
    name: "AXR - Asia Expat Radio",
    image: "45649.png",
    site_url: "http://www.axr.online/",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/AXRAAC.aac",
    description:
      "Welcome to AXR - Asia Expat Radio: providing you with the best news, sport and music from the UK, Australia and New Zealand",
  },
  {
    name: "Symphony FM",
    image: "15255.png",
    site_url: "http://sites.xinmsnent.mediacorp.sg/en/radio/symphony-924-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/SYMPHONY924AAC.aac",
    description:
      "Symphony 92.4FM is a broadcast radio station from Caldecott Hill Estate, Singapore, providing Classical music, Cultural informatiom and Arts shows.",
  },
  {
    name: "938 Now",
    image: "15254.v1.png",
    site_url: "http://sites.xinmsnent.mediacorp.sg/en/radio/938-live",
    radio_url: "http://mediacorp.rastream.com/938fm",
    description:
      "938 Now is a broadcast radio station from Caldecott Hill Estate, SG, Singapore providing News, Talk, Current Affairs, Health, Business and Lifestyle programs.",
  },
  {
    name: "Thitsarparami Dhamma Society",
    image: "32684.v2.png",
    site_url: "https://www.thitsarparamisociety.com/",
    radio_url: "https://edge.mixlr.com/channel/nmtev",
    description:
      "Meditation Centre @ City Beach Resort, No 8, Port Road, Labrador Park, Near Labrador Mrt Singapore 117540",
  },
  {
    name: "Oli 96.8 FM",
    image: "15184.png",
    site_url: "http://sites.xinmsnent.mediacorp.sg/en/radio/oli-968-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/OLI968FMAAC.aac",
    description:
      "ஒளி 96.8 எஃப்எம் Caldecott நகர், எஸ்.ஜி., சிங்கப்பூர் ல் இருந்து ஒரு ஒலிபரப்பு வானொலி நிலையம் இந்திய மொழிகளில் தமிழ், இந்தி, பஞ்சாபி, பெங்காலி, மலையாளம், தெலுங்கு இன இந்திய சமூகத்தினருக்கு செய்தி, தகவல், பத்திரிகை பாணியில் திட்டங்கள், இசை மற்றும் பொழுதுபோக்கு வழங்குகிறது.Caldecott நகர்",
  },
  {
    name: "Warna 94.2 FM",
    image: "15207.png",
    site_url: "http://sites.xinmsnent.mediacorp.sg/en/radio/warna-942-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/WARNA942FMAAC.aac",
    description:
      "Warna 94.2FM adalah sebuah stesen radio penyiaran di Caldecott Hill Estate, Singapura, memberikan Malay Classic Rock dan muzik Pop dari 60-an melalui 90-an serta berita, program majalah gaya hidup terbaru dan infotainment.",
  },
  {
    name: "Capital 95.8 FM",
    image: "15179.png",
    site_url: "https://www.meradio.sg/radio/capital-958-fm",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FMAAC.aac",
    description:
      "Capital 95.8FM 城市频道,一个为听众提供华语新闻及资讯的电台，除了播报新闻、提供财经及生活资讯节目外，也播放80至90年代的懷舊歌曲。郝德杰山",
  },
  {
    name: "Radio Melody with Brother Bjorn",
    image: "15268.v1.png",
    site_url: "http://www.rmelody.net/",
    radio_url: "http://37.59.28.208:8113/stream",
    description:
      "Radio Melody with Brother Bjorn is an Internet Radio station broadcasting from Singapore, providing international, Canto Pop, Mandarin Pop music.http://209.105.250.69:8284/stream?type=.mp3&13202692901&duration=99999&id=scplayer&autostart=true",
  },
  {
    name: "938Now",
    image: "72445.v7.png",
    site_url: "https://www.meradio.sg/radio/938now",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/938NOWAAC.aac",
    description:
      "938LIVE is a broadcast radio station from Caldecott Hill Estate, SG, Singapore providing News, Talk, Current Affairs, Health, Business and Lifestyle programs.",
  },
  {
    name: "One FM",
    image: "15256.v6.png",
    site_url: "http://www.onefm.sg/",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/ONE_FM_913AAC.aac",
    description:
      "One FM 91.3 is a broadcast Radio station from Singapore, providing Contemporary Hits, Top 40 and Pop Music.",
  },
  {
    name: "Kiss92",
    image: "15248.v4.png",
    site_url: "http://kiss92.sg/",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/KISS_92AAC.aac",
    description: "Kiss92 is on air with all the great songs in one place",
  },
  {
    name: "U FM",
    image: "45648.v5.png",
    site_url: "http://www.ufm1003.sg/",
    radio_url:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/UFM_1003AAC.aac",
    description:
      "UFM100.3 is a highly charged Mandarin music station under SPH Radio Pte Ltd, a fully owned subsidiary of Singapore Press Holdings. UFM100.3 targets working professionals aged between 35 – 45 years old. The station plays popular and familiar mandarin hits, with engaging lifestyle content and current hot topics for the busy individual. The station is under SPH Chinese Media Group, which also includes SPH Chinese media publications such as Lianhe Zaobao, Lianhe Wanbao, Shin Min Daily News, and UWeekly.",
  },
  {
    name: "Orion Station",
    image: "80869.v3.png",
    site_url: "http://orionstation.net/",
    radio_url: "http://188.165.192.5:8528/;",
    description: "Live 24/7 for your soul!",
  },
  {
    name: "Body Mind Spirit RADIO",
    image: "15264.png",
    site_url: "http://bmsradionetwork.com/",
    radio_url:
      "http://blogtalk.vo.llnwd.net/o23/show/7/562/show_7562357_2015_05_13_13_25_58.mp3",
    description:
      "Radio for a healthy body, an enlightened mind and a renewed Spirit. Listen to Holistic, Spiritual, Psychic, Conscious and Metaphysical Hosts. Live call in shows, profiles, chat, forums, prizes and more...Garden City, MI",
  },
  {
    name: "CarnaticRadio",
    image: "15364.png",
    site_url: "http://www.carnaticradio.com/",
    radio_url: "http://s5.viastreaming.net:7220/;",
    description:
      "CarnaticRadio.com has been started by a group of individuals who love Carnatic music and the site is devoted to making Carnatic music available 24x7. This will also be a good entertainment media for the younger generation who have to improve their “Kelvi Gnanam” by listening to performances by various artists.",
  },
];
