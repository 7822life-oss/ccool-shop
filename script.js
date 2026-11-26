/* 商品資料集中在此；「原創設計」已切出 9 個系列子索引，並預留 subSeriesBanners 專屬 BANNER 設定區。 */
window.CCOOL_SHOP = {
  logo: 'https://i.meee.com.tw/OEd9CUr.png',
  lineId: '@330vhvgc',
  shipping: 60,
  // 滿額贈設定（不含運費滿 999 送 T 牌保護盒，排除 K441、K619）
  giftThreshold: 999,
  giftExcludedIds: ['K441', 'K619'],
  // 原創設計各子系列專屬 BANNER 預留區（之後填入圖片網址就會自動顯示）
  subSeriesBanners: {
    '台灣系列': '',
    '玄木系列': '',
    '岩系列': '',
    '花磚系列': '',
    '麻將系列': '',
    '德州撲克': '',
    '原創特色': '',
    '銀刻LOGO': '',
    '聯名款': '',
  },
  // 推進器加購設定（價格 NT$69，不顯示 SKU，統一在購物車加購並附 IG 影片連結）
  addon: {
    id: 'ADDON',
    hideSku: true,
    name: '專用輔助推進器',
    color: '加購配件',
    series: '配件加購',
    model: '通用配件',
    price: 69,
    image: 'https://i.meee.com.tw/wuahaw1.jpg',
    videoUrl: 'https://www.instagram.com/reel/DZWkX64ASc_/',
  },
  products: [
    {
      id: 'K370',
      name: '蛇紋石保護套',
      color: '彩色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/8zxxkId.jpg',
    },
    {
      id: 'K371',
      name: '蛇紋石保護套',
      color: '棕色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/ymShlng.jpg',
    },
    {
      id: 'K372',
      name: '蛇紋石保護套',
      color: '金色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/sUp56hQ.jpg',
    },
    {
      id: 'K373',
      name: '蛇紋石保護套',
      color: '銀色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/qaIB2zk.jpg',
    },
    {
      id: 'K362',
      name: '透明軟殼保護套',
      color: '透明',
      series: '熱銷精選',
      model: '7代',
      price: 250,
      image: 'https://i.meee.com.tw/tYTs8GG.jpg',
    },
    {
      id: 'K442',
      name: '透明硬殼保護套',
      color: '透明',
      series: '熱銷精選',
      model: '7代',
      price: 250,
      image: 'https://i.meee.com.tw/hKoVUKE.jpg',
    },
    {
      id: 'K450',
      name: '透明軟殼保護套',
      color: '透明',
      series: '熱銷精選',
      model: '8代',
      price: 250,
      image: 'https://i.meee.com.tw/q3FmUfK.jpg',
    },
    {
      id: 'K363',
      name: '防摔斜紋矽膠',
      color: '黑色',
      series: '熱銷精選',
      model: '7、8代',
      price: 250,
      image: 'https://i.meee.com.tw/XreNwvB.jpg',
    },
    {
      id: 'K364',
      name: '防摔斜紋矽膠',
      color: '粉色',
      series: '熱銷精選',
      model: '7、8代',
      price: 250,
      image: 'https://i.meee.com.tw/IikjsAA.jpg',
    },
    {
      id: 'K365',
      name: '防摔斜紋矽膠',
      color: '酒紅',
      series: '熱銷精選',
      model: '7、8代',
      price: 250,
      image: 'https://i.meee.com.tw/M5zUEnN.jpg',
    },
    {
      id: 'K445',
      name: '防摔斜紋矽膠',
      color: '螢光白',
      series: '熱銷精選',
      model: '7、8代',
      price: 250,
      image: 'https://i.meee.com.tw/kY00FSz.jpg',
    },
    {
      id: 'K366',
      name: 'NBA保護套',
      color: '黑色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/LTojcXM.jpg',
    },
    {
      id: 'K367',
      name: 'NBA保護套',
      color: '藍色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/CFNhUn1.jpg',
    },
    {
      id: 'K368',
      name: '荔枝紋保護套',
      color: '黑色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/tOEWuDc.jpg',
    },
    {
      id: 'K369',
      name: '荔枝紋保護套',
      color: '藍色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/1JMEV7E.jpg',
    },
    {
      id: 'K374',
      name: '復古磚塊紋保護套',
      color: '棕色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/cQ2Zi1A.jpg',
    },
    {
      id: 'K375',
      name: '復古磚塊紋保護套',
      color: '藍色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/uiz5BaZ.jpg',
    },
    {
      id: 'K376',
      name: '復古磚塊紋保護套',
      color: '黑色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/pjDtOL5.jpg',
    },
    {
      id: 'K377',
      name: '復古磚塊紋保護套',
      color: '灰色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/BG7WYA3.jpg',
    },
    {
      id: 'K620',
      name: '星空滿鑽',
      color: '黑底',
      series: '熱銷精選',
      model: '7、8代通用',
      price: 399,
      image: 'https://i.meee.com.tw/2u4wgXu.png',
    },
    {
      // 銀刻LOGO系列：7代為 K472，8代為 K473
      id: 'K472',
      name: '銀刻LOGO系列',
      color: '銀刻',
      series: '原創設計',
      subSeries: '銀刻LOGO',
      model: '7代/8代',
      price: 399,
      image: 'https://i.meee.com.tw/qh1rIbu.jpg',
      options: [
        { label: '7代', value: '7代', sku: 'K472', image: 'https://i.meee.com.tw/qh1rIbu.jpg' },
        { label: '8代', value: '8代', sku: 'K473', image: 'https://i.meee.com.tw/u73No98.jpg' }
      ]
    },
    {
      id: 'K504',
      name: '台灣系列：水果紙箱',
      color: '原創',
      series: '原創設計',
      subSeries: '台灣系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/3talTIk.jpg',
    },
    {
      id: 'K505',
      name: '台灣系列：台灣記憶',
      color: '原創',
      series: '原創設計',
      subSeries: '台灣系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/1xBkzNX.jpg',
    },
    {
      id: 'K506',
      name: '台灣系列：啤酒肚小熊',
      color: '原創',
      series: '原創設計',
      subSeries: '台灣系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/EQr1xUE.jpg',
    },
    {
      id: 'K507',
      name: '玄木系列：赤楓',
      color: 'Red Maple',
      series: '原創設計',
      subSeries: '玄木系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/j1FDLat.png',
    },
    {
      id: 'K508',
      name: '玄木系列：白橡',
      color: 'White Oak',
      series: '原創設計',
      subSeries: '玄木系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/CKNTzfC.png',
    },
    {
      id: 'K509',
      name: '玄木系列：黑檀',
      color: 'Ebony',
      series: '原創設計',
      subSeries: '玄木系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/C0LJEnp.png',
    },
    {
      id: 'K510',
      name: '玄木系列：胡桃',
      color: 'Dark Walnut',
      series: '原創設計',
      subSeries: '玄木系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/URhFw34.png',
    },
    {
      id: 'K536',
      name: '岩系列：霧岩',
      color: 'Onyx Stone',
      series: '原創設計',
      subSeries: '岩系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/5c0CpGR.jpg',
    },
    {
      id: 'K537',
      name: '岩系列：墨岩',
      color: 'Mist Stone',
      series: '原創設計',
      subSeries: '岩系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/J2O860g.jpg',
    },
    {
      id: 'K538',
      name: '岩系列：赤岩',
      color: 'Iron Stone',
      series: '原創設計',
      subSeries: '岩系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/HKojyj7.jpg',
    },
    {
      id: 'K511',
      name: '花磚系列：海棠花窗',
      color: '原創',
      series: '原創設計',
      subSeries: '花磚系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/DAx27CK.jpg',
    },
    {
      id: 'K514',
      name: '花磚系列：黑色花磚',
      color: '原創',
      series: '原創設計',
      subSeries: '花磚系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/noFFbrN.jpg',
    },
    {
      id: 'K487',
      name: '麻將：白底',
      color: '原創',
      series: '原創設計',
      subSeries: '麻將系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/aMDtWYc.jpg',
    },
    {
      id: 'K486',
      name: '麻將：滿版',
      color: '原創',
      series: '原創設計',
      subSeries: '麻將系列',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/vBuvuM9.jpg',
    },
    {
      id: 'K539',
      name: '聯名款：可愛尼胖',
      color: '尼胖聯名',
      series: '原創設計',
      subSeries: '聯名款',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/R3QogcE.jpg',
    },
    {
      id: 'K515',
      name: '原創系列：吞金喵',
      color: '原創',
      series: '原創設計',
      subSeries: '原創特色',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/tWPlkr9.jpg',
    },
    {
      id: 'K513',
      name: '原創系列：惡魔骷髏',
      color: '原創',
      series: '原創設計',
      subSeries: '原創特色',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/vtoaojI.jpg',
    },
    {
      id: 'K512',
      name: '原創系列：撲克牌',
      color: '原創',
      series: '原創設計',
      subSeries: '原創特色',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/rwqkpQi.jpg',
    },
    {
      id: 'K540',
      name: '德州撲克：綠底',
      color: '原創',
      series: '原創設計',
      subSeries: '德州撲克',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/eDePlln.jpg',
    },
    {
      id: 'K541',
      name: '德州撲克：紅底',
      color: '原創',
      series: '原創設計',
      subSeries: '德州撲克',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/5s9n28C.jpg',
    },
    {
      id: 'K542',
      name: '德州撲克：黑底',
      color: '原創',
      series: '原創設計',
      subSeries: '德州撲克',
      model: '7、8代通用',
      price: 599,
      image: 'https://i.meee.com.tw/TcVTXDi.jpg',
    },
    {
      id: 'K461',
      name: '絕版品：岩系列：褐岩',
      color: '絕版',
      series: '絕版品出清',
      model: '7代',
      price: 499,
      image: 'https://i.meee.com.tw/yjtgENw.jpg',
    },
    {
      id: 'K462',
      name: '絕版品：岩系列：赤岩',
      color: '絕版',
      series: '絕版品出清',
      model: '7代',
      price: 499,
      image: 'https://i.meee.com.tw/23e8E8k.jpg',
    },
    {
      id: 'K378',
      name: '白底smile熊',
      color: '可愛圖',
      series: '熱銷精選',
      model: '7代/8代',
      price: 350,
      image: 'https://i.meee.com.tw/1Jkxfek.jpg',
      options: [
        { label: '7代', value: '7代', sku: 'K378', image: 'https://i.meee.com.tw/1Jkxfek.jpg' },
        { label: '8代', value: '8代', sku: 'K446', image: 'https://i.meee.com.tw/MVIiE0m.jpg' }
      ]
    },
    {
      id: 'K379',
      name: '白底貓咪',
      color: '可愛圖',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/zvldHjE.jpg'
    },
    {
      id: 'K380',
      name: '白底笑臉',
      color: '可愛圖',
      series: '熱銷精選',
      model: '7代/8代',
      price: 350,
      image: 'https://i.meee.com.tw/H0ahX5G.jpg',
      options: [
        { label: '7代', value: '7代', sku: 'K380', image: 'https://i.meee.com.tw/H0ahX5G.jpg' },
        { label: '8代', value: '8代', sku: 'K447', image: 'https://i.meee.com.tw/4q2d8Bm.jpg' }
      ]
    },
    {
      id: 'K381',
      name: '白底粉紅愛心',
      color: '可愛圖',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/WWt48dG.jpg'
    },
    {
      id: 'K385',
      name: '小熊',
      color: '卡其色',
      series: '熱銷精選',
      model: '7代/8代',
      price: 350,
      image: 'https://i.meee.com.tw/DnuKnFA.jpg',
      options: [
        { label: '7代', value: '7代', sku: 'K385', image: 'https://i.meee.com.tw/DnuKnFA.jpg' },
        { label: '8代', value: '8代', sku: 'K448', image: 'https://i.meee.com.tw/jLIBIJL.jpg' }
      ]
    },
    {
      id: 'K386',
      name: '小熊',
      color: '深棕色',
      series: '熱銷精選',
      model: '7代/8代',
      price: 350,
      image: 'https://i.meee.com.tw/WomrcHI.jpg',
      options: [
        { label: '7代', value: '7代', sku: 'K386', image: 'https://i.meee.com.tw/WomrcHI.jpg' },
        { label: '8代', value: '8代', sku: 'K449', image: 'https://i.meee.com.tw/INHXUiY.jpg' }
      ]
    },
    {
      id: 'K383',
      name: '豹紋保護套',
      color: '灰色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/gLG6JV0.jpg'
    },
    {
      id: 'K384',
      name: '豹紋保護套',
      color: '棕色',
      series: '熱銷精選',
      model: '7代',
      price: 350,
      image: 'https://i.meee.com.tw/P8P5YRO.jpg'
    },
    // 中階主機看這裡（獨立分類）
    {
      id: 'K443',
      name: 'TPU透明',
      color: '',
      series: '中階主機看這裡',
      model: '中階',
      price: 250,
      image: 'https://i.meee.com.tw/dQfUO8q.jpg',
    },
    {
      id: 'K451',
      name: '矽膠殼+側蓋',
      color: '黑灰色',
      series: '中階主機看這裡',
      model: '中階',
      price: 350,
      image: 'https://i.meee.com.tw/5sRDCMl.jpg',
    },
    {
      id: 'K452',
      name: '小熊殼+側蓋',
      color: '卡其色',
      series: '中階主機看這裡',
      model: '中階',
      price: 450,
      image: 'https://i.meee.com.tw/84v86YT.jpg',
    },
    {
      id: 'K453',
      name: '小熊殼+側蓋',
      color: '深棕色',
      series: '中階主機看這裡',
      model: '中階',
      price: 450,
      image: 'https://i.meee.com.tw/tTPKkcs.jpg',
    },
    // T牌保護盒系列
    {
      id: 'K387',
      name: '鯉魚',
      color: '',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/YoI66wW.jpg'
    },
    {
      id: 'K388',
      name: '老虎',
      color: '',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/rYF24e2.jpg'
    },
    {
      id: 'K389',
      name: '荔枝紋',
      color: '綠色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/N9SF8f5.jpg'
    },
    {
      id: 'K390',
      name: '荔枝紋',
      color: '橘色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/bM6KLGw.jpg'
    },
    {
      id: 'K391',
      name: '荔枝紋',
      color: '黑色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/Z5zJKJz.png'
    },
    {
      id: 'K392',
      name: '荔枝紋',
      color: '藍色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/r8G9Mxq.png'
    },
    {
      id: 'K393',
      name: 'LV白花棕色',
      color: '',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/1pcyIvG.jpg'
    },
    {
      id: 'K394',
      name: 'NBA',
      color: '黑色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/8cgJR4n.png'
    },
    {
      id: 'K395',
      name: 'NBA',
      color: '藍色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/sWgxFz3.png'
    },
    {
      id: 'K396',
      name: '木紋',
      color: '紅色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/tkBHLz7.jpg'
    },
    {
      id: 'K397',
      name: '木紋',
      color: '棕色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/NbaFXJU.jpg'
    },
    {
      id: 'K398',
      name: '豹紋',
      color: '棕色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/L9U461g.jpg'
    },
    {
      id: 'K399',
      name: '豹紋',
      color: '灰色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 380,
      image: 'https://i.meee.com.tw/Pjj1vdS.jpg'
    },
    {
      id: 'K441',
      name: '透明',
      color: '',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 280,
      image: 'https://i.meee.com.tw/B8ma46e.jpg'
    },
    {
      id: 'K619',
      name: '星空滿鑽',
      color: '黑色',
      series: 'T牌保護盒',
      model: 'T牌',
      price: 390,
      image: 'https://i.meee.com.tw/cdS32Bq.png'
    },
  ],
};

(() => {
  function start(attempt = 0) {
    const root = document.getElementById('ccs'),
      config = window.CCOOL_SHOP;
    if (!root || !config) {
      if (attempt < 20) setTimeout(() => start(attempt + 1), 250);
      return;
    }
    if (root.dataset.ready) return;
    root.dataset.ready = '1';
    const $ = (id) => root.querySelector('#' + id),
      products = config.products,
      addon = config.addon,
      giftThreshold = config.giftThreshold || 999,
      giftExcludedIds = config.giftExcludedIds || ['K441', 'K619'],
      subSeriesBanners = config.subSeriesBanners || {},
      giftOptions = products.filter(
        (p) => p.series === 'T牌保護盒' && !giftExcludedIds.includes(p.id)
      ),
      map = new Map(products.map((p) => [p.id, p]));
    if (addon) map.set(addon.id, addon);

    const money = (n) => 'NT$' + n.toLocaleString('zh-TW'),
      key = 'ccool-cart-v39',
      giftKey = 'ccool-gift-v1',
      SEP = '|',
      addonCartKey = addon ? addon.id + SEP + addon.model : '';

    const esc = (s) =>
      String(s).replace(
        /[&<>"']/g,
        (c) =>
          ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
          }[c])
      );
    let cart = {},
      selectedGiftId = '',
      timer,
      purchaseTracked = false;

    function trackPurchase() {
      if (purchaseTracked) return;
      const t = totals();
      const list = rows();
      if (!t.count) return;
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Purchase', {
          value: t.sub, // 純商品小計（不含運費）
          currency: 'TWD',
          num_items: t.count,
          content_type: 'product',
          content_ids: list.map((item) => item.displayId || item.id),
        });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'purchase', {
          transaction_id: 'ORDER_' + Date.now(),
          currency: 'TWD',
          value: t.sub, // 純商品小計（不含運費）
        });
      }
      purchaseTracked = true;
    }

    function parseCartKey(ck) {
      const idx = ck.indexOf(SEP);
      if (idx === -1) return [ck, ''];
      return [ck.slice(0, idx), ck.slice(idx + 1)];
    }

    try {
      const saved = JSON.parse(localStorage.getItem(key) || '{}');
      for (const k in saved) {
        const n = Number(saved[k]);
        const [baseId] = parseCartKey(k);
        if (map.has(baseId) && Number.isInteger(n) && n > 0 && n <= 99) {
          cart[k] = n;
        }
      }
      const savedGift = localStorage.getItem(giftKey) || '';
      if (giftOptions.some((g) => g.id === savedGift)) {
        selectedGiftId = savedGift;
      }
    } catch (error) {}

    function persist() {
      try {
        localStorage.setItem(key, JSON.stringify(cart));
        localStorage.setItem(giftKey, selectedGiftId);
      } catch (error) {}
    }
    function notify(text) {
      $('ccs-toast').textContent = text;
      $('ccs-toast').classList.add('show');
      clearTimeout(timer);
      timer = setTimeout(() => $('ccs-toast').classList.remove('show'), 2400);
    }
    root.querySelectorAll('[data-logo]').forEach((img) => (img.src = config.logo));
    
    // 自訂系列順序：原創設計排第一，其餘依序排列
    const rawSeries = [...new Set(products.map((p) => p.series))];
    const series = ['原創設計', ...rawSeries.filter(s => s !== '原創設計')];

    // 原創設計子系列順序
    const originalSubSeriesOrder = [
      '台灣系列',
      '玄木系列',
      '岩系列',
      '花磚系列',
      '麻將系列',
      '德州撲克',
      '原創特色',
      '銀刻LOGO',
      '聯名款',
    ];
    const existingSubSeries = [...new Set(products.filter(p => p.series === '原創設計' && p.subSeries).map(p => p.subSeries))];
    const originalSubSeries = [
      ...originalSubSeriesOrder.filter(s => existingSubSeries.includes(s)),
      ...existingSubSeries.filter(s => !originalSubSeriesOrder.includes(s)),
    ];

    let currentSeriesIndex = 0; // 0 代表全部商品
    let currentModelFilter = 'all'; // 'all', '7代', '8代', '中階型號', 'T牌保護盒'
    let currentOriginalSubFilter = 'all'; // 'all' 或原創子系列名稱

    // 渲染大分類篩選列
    const filtersContainer = $('ccs-filters');
    filtersContainer.innerHTML = ['全部商品', ...series]
      .map(
        (s, i) =>
          `<button type="button" data-filter="${i}" aria-pressed="${
            i === 0
          }">${esc(s)}</button>`
      )
      .join('');

    // 建立機型次級篩選列（全部商品時多顯示「中階型號」與「T牌保護盒」）
    let modelFilterContainer = root.querySelector('.ccs-model-filters');
    if (!modelFilterContainer) {
      modelFilterContainer = document.createElement('div');
      modelFilterContainer.className = 'ccs-model-filters';
      filtersContainer.after(modelFilterContainer);
    }
    modelFilterContainer.innerHTML = `
      <span style="font-size:12px; color:#888; align-self:center; margin-right:4px;">機型：</span>
      <button type="button" data-modelfilter="all" aria-pressed="true">全部型號</button>
      <button type="button" data-modelfilter="7代" aria-pressed="false">7代</button>
      <button type="button" data-modelfilter="8代" aria-pressed="false">8代</button>
      <button type="button" data-modelfilter="中階型號" data-all-only="1" aria-pressed="false">中階型號</button>
      <button type="button" data-modelfilter="T牌保護盒" data-all-only="1" aria-pressed="false">T牌保護盒</button>
    `;

    // 建立「原創設計」專屬子系列篩選列
    let subFilterContainer = root.querySelector('#ccs-sub-filters');
    if (!subFilterContainer) {
      subFilterContainer = document.createElement('div');
      subFilterContainer.id = 'ccs-sub-filters';
      subFilterContainer.className = 'ccs-model-filters';
      subFilterContainer.style.display = 'none';
      subFilterContainer.style.marginTop = '8px';
      modelFilterContainer.after(subFilterContainer);
    }
    subFilterContainer.innerHTML = `
      <span style="font-size:12px; color:#d8c6a5; align-self:center; margin-right:4px;">系列：</span>
      <button type="button" data-subfilter="all" aria-pressed="true">全部原創</button>
      ${originalSubSeries
        .map(
          (sub) =>
            `<button type="button" data-subfilter="${esc(sub)}" aria-pressed="false">${esc(sub)}</button>`
        )
        .join('')}
    `;

    // 建立原創子系列專屬 BANNER 預留容器（放在商品網格正上方）
    let subBannerContainer = root.querySelector('#ccs-sub-banner');
    if (!subBannerContainer) {
      subBannerContainer = document.createElement('div');
      subBannerContainer.id = 'ccs-sub-banner';
      subBannerContainer.style.display = 'none';
      subBannerContainer.style.margin = '14px 0 18px';
      $('ccs-grid').before(subBannerContainer);
    }

    // 在購物車區塊內（小計上方）建立固定的「推進器加購專區」與「滿額贈專區」
    const totalsEl = root.querySelector('.ccs-totals');
    let cartAddonContainer = root.querySelector('#ccs-cart-addon');
    if (!cartAddonContainer && addon) {
      cartAddonContainer = document.createElement('div');
      cartAddonContainer.id = 'ccs-cart-addon';
      cartAddonContainer.className = 'ccs-cart-addon';
      if (totalsEl) totalsEl.before(cartAddonContainer);
    }

    let cartGiftContainer = root.querySelector('#ccs-cart-gift');
    if (!cartGiftContainer && giftOptions.length > 0) {
      cartGiftContainer = document.createElement('div');
      cartGiftContainer.id = 'ccs-cart-gift';
      if (totalsEl) totalsEl.before(cartGiftContainer);
    }

    // 右下角懸浮浮動視窗收合展開控制
    const floatBanner = $('ccs-float-banner');
    const floatToggle = $('ccs-float-toggle');
    if (floatBanner && floatToggle) {
      floatToggle.addEventListener('click', () => {
        floatBanner.classList.toggle('collapsed');
      });
    }

    function formatDisplayName(item) {
      if (!item.color || item.color === '原創' || item.color === '絕版' || item.color === '加購配件' || item.color === '尼胖聯名' || item.color === '銀刻' || item.color.includes('Stone') || item.color.includes('Maple') || item.color.includes('Oak') || item.color.includes('Ebony') || item.color.includes('Walnut')) {
        return item.name;
      }
      return `${item.name} · ${item.color}`;
    }

    function step(cartKey, n) {
      return `<div class="ccs-step"><button type="button" data-step="-1" data-cartkey="${esc(
        cartKey
      )}" aria-label="減少數量">−</button><input type="number" min="0" max="99" value="${n}" data-qtykey="${esc(
        cartKey
      )}" inputmode="numeric"><button type="button" data-step="1" data-cartkey="${esc(
        cartKey
      )}" aria-label="增加數量">＋</button></div>`;
    }

    function renderProducts() {
      const selectedSeries = currentSeriesIndex === 0 ? null : series[currentSeriesIndex - 1];
      const isOriginalCategory = selectedSeries === '原創設計';
      const isTBrandCategory = selectedSeries === 'T牌保護盒';
      const isMidTierCategory = selectedSeries === '中階主機看這裡';

      // 當點選「T牌保護盒」或「中階主機看這裡」時，隱藏下方的機型小分類列
      if (modelFilterContainer) {
        modelFilterContainer.style.display = (isTBrandCategory || isMidTierCategory) ? 'none' : 'flex';
        // 「中階型號」與「T牌保護盒」子索引僅在「全部商品」顯示
        modelFilterContainer.querySelectorAll('[data-all-only="1"]').forEach((btn) => {
          btn.style.display = currentSeriesIndex === 0 ? '' : 'none';
        });
      }

      // 只有點選「原創設計」時顯示子系列篩選列
      if (subFilterContainer) {
        subFilterContainer.style.display = isOriginalCategory ? 'flex' : 'none';
      }

      // 顯示對應的原創子系列 BANNER（有設定圖片網址才顯示）
      if (subBannerContainer) {
        const bannerUrl =
          isOriginalCategory && currentOriginalSubFilter !== 'all'
            ? subSeriesBanners[currentOriginalSubFilter]
            : '';
        if (bannerUrl) {
          subBannerContainer.style.display = 'block';
          subBannerContainer.innerHTML = `
            <div style="width:100%; border-radius:14px; overflow:hidden; border:1px solid #393939; background:#181818;">
              <img src="${esc(bannerUrl)}" alt="${esc(currentOriginalSubFilter)} Banner" style="width:100%; height:auto; display:block;" />
            </div>
          `;
        } else {
          subBannerContainer.style.display = 'none';
          subBannerContainer.innerHTML = '';
        }
      }

      const filteredProducts = products.filter((p) => {
        if (isTBrandCategory) {
          return p.series === 'T牌保護盒';
        }
        if (isMidTierCategory) {
          return p.series === '中階主機看這裡';
        }
        const matchSeries = !selectedSeries || p.series === selectedSeries;
        const matchSubSeries =
          !isOriginalCategory ||
          currentOriginalSubFilter === 'all' ||
          p.subSeries === currentOriginalSubFilter;
        let matchModel = true;
        if (currentModelFilter === '7代') {
          matchModel = p.model.includes('7代') || p.model.includes('7、8代') || p.options?.some(o => o.value === '7代');
        } else if (currentModelFilter === '8代') {
          matchModel = p.model.includes('8代') || p.model.includes('7、8代') || p.options?.some(o => o.value === '8代');
        } else if (currentModelFilter === '中階型號') {
          matchModel = p.series === '中階主機看這裡' || p.model === '中階';
        } else if (currentModelFilter === 'T牌保護盒') {
          matchModel = p.series === 'T牌保護盒' || p.model === 'T牌';
        }
        return matchSeries && matchSubSeries && matchModel;
      });

      $('ccs-grid').innerHTML = filteredProducts.length ? filteredProducts.map((p) => {
        let optHtml = '';
        let currentSku = p.id;
        let currentImg = p.image;
        if (p.options && p.options.length > 0) {
          let defaultOpt = p.options[0];
          if (currentModelFilter === '8代') {
            const opt8 = p.options.find(o => o.value === '8代');
            if (opt8) defaultOpt = opt8;
          }
          currentSku = defaultOpt.sku;
          currentImg = defaultOpt.image || p.image;
          optHtml = `<div style="margin: 8px 0;"><select data-opt="${esc(p.id)}" style="width:100%; padding:6px; background:#1c1c1c; color:#fff; border:1px solid #444; border-radius:6px; font-size:12px;">${p.options.map(o => `<option value="${esc(o.value)}" data-sku="${esc(o.sku)}" data-img="${esc(o.image || p.image)}" ${o.value === defaultOpt.value ? 'selected' : ''}>${esc(o.label)} (${esc(o.sku)})</option>`).join('')}</select></div>`;
        }
        const displayName = formatDisplayName(p);
        const skuText = p.color ? `${esc(currentSku)} / ${esc(p.color)}` : esc(currentSku);
        
        let promoHtml = '';
        if (p.series === '絕版品出清') {
          promoHtml = `<div style="color: #ff4d4f; font-size: 12px; font-weight: 700; margin-bottom: 8px;">🔥 兩件 $799</div>`;
        }

        return `<article class="ccs-product" data-product-card="${esc(p.id)}">
          <button type="button" class="ccs-product-photo" data-zoom="${esc(p.id)}" aria-label="查看${esc(p.name)}大圖">
            <img src="${esc(currentImg)}" alt="${esc(currentSku + ' ' + p.name)}" loading="lazy" data-img-target="${esc(p.id)}">
          </button>
          <div class="ccs-sku" data-sku-display="${esc(p.id)}">${skuText}</div>
          <h3>${esc(displayName)}</h3>
          <div class="ccs-model">適用 ${esc(p.model)}｜不含機身</div>
          ${optHtml}
          <strong class="ccs-price">${money(p.price)}</strong>
          ${promoHtml}
          <div class="ccs-product-actions">
            <div class="ccs-step">
              <button type="button" data-prod-step="-1" data-id="${esc(p.id)}" aria-label="減少">−</button>
              <input type="number" min="1" max="99" value="1" data-prod-qty="${esc(p.id)}" inputmode="numeric">
              <button type="button" data-prod-step="1" data-id="${esc(p.id)}" aria-label="增加">＋</button>
            </div>
            <button type="button" data-add="${esc(p.id)}">加入購物車 ＋</button>
          </div>
        </article>`;
      }).join('') : '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:#888;">沒有找到符合條件的商品</div>';
    }

    function rows() {
      return Object.entries(cart)
        .map(([cartKey, qty]) => {
          const [id, spec] = parseCartKey(cartKey);
          const p = map.get(id);
          if (!p) return null;
          
          let displayId = p.hideSku ? '' : p.id;
          if (p.options) {
            const matchedOpt = p.options.find(o => o.value === spec);
            if (matchedOpt) displayId = matchedOpt.sku;
          }
          return { ...p, displayId, spec: spec || p.model, cartKey, qty };
        })
        .filter(Boolean);
    }

    function totals() {
      const list = rows();
      const count = list.reduce((s, item) => s + item.qty, 0);
      
      let clearanceQty = 0;
      let otherSub = 0;
      
      list.forEach(item => {
        if (item.series === '絕版品出清') {
          clearanceQty += item.qty;
        } else {
          otherSub += item.price * item.qty;
        }
      });
      
      let clearanceSub = 0;
      if (clearanceQty > 0) {
        const pairs = Math.floor(clearanceQty / 2);
        const singles = clearanceQty % 2;
        clearanceSub = (pairs * 799) + (singles * 499);
      }
      
      const sub = otherSub + clearanceSub;
      const fee = count ? config.shipping : 0;
      return { count, sub, fee, total: sub + fee, clearanceQty };
    }

    function renderGiftSection(t) {
      if (!cartGiftContainer || !giftOptions.length) return;
      if (t.sub >= giftThreshold) {
        const chosen = giftOptions.find((g) => g.id === selectedGiftId);
        const previewHtml = chosen
          ? `<div style="display:flex; align-items:center; gap:10px; margin-top:10px; padding:8px; background:#141414; border:1px solid #333; border-radius:8px;">
              <button type="button" data-zoom="${esc(chosen.id)}" aria-label="查看${esc(chosen.name)}大圖" style="padding:0; border:none; background:none; cursor:pointer; flex-shrink:0;">
                <img src="${esc(chosen.image)}" alt="${esc(chosen.name)}" style="width:46px; height:46px; object-fit:cover; border-radius:6px; display:block; border:1px solid #444;">
              </button>
              <div style="font-size:12px; line-height:1.4;">
                <div style="color:#d8c6a5; font-weight:700;">已選贈品：${esc(chosen.id)} ${esc(formatDisplayName(chosen))}</div>
                <div style="color:#aaa;">滿額贈送 NT$0（點圖可放大）</div>
              </div>
            </div>`
          : `<div style="margin-top:6px; font-size:11px; color:#ff7875;">※ 請先選擇 1 款贈品保護盒，再填寫收件資料</div>`;

        cartGiftContainer.innerHTML = `
          <div style="margin: 14px 0; padding: 12px; background: rgba(216, 198, 165, 0.08); border: 1px solid #d8c6a5; border-radius: 10px;">
            <div style="font-size: 13px; font-weight: 700; color: #d8c6a5; margin-bottom: 8px;">🎁 滿 NT$${giftThreshold} 達標！免費任選保護盒 1 個</div>
            <select id="ccs-gift-select" style="width:100%; padding:8px 10px; background:#181818; color:#fff; border:1px solid #555; border-radius:8px; font-size:13px;">
              <option value="">-- 請選擇免費贈送的保護盒 --</option>
              ${giftOptions
                .map(
                  (g) =>
                    `<option value="${esc(g.id)}" ${
                      g.id === selectedGiftId ? 'selected' : ''
                    }>${esc(g.id)} ${esc(formatDisplayName(g))}</option>`
                )
                .join('')}
            </select>
            ${previewHtml}
          </div>
        `;
      } else {
        const diff = giftThreshold - t.sub;
        const msg =
          t.count > 0
            ? `🎁 滿額禮｜再差 <b style="color:#d8c6a5;">${money(diff)}</b>（不含運費）即可免費任選保護盒 1 個`
            : `🎁 滿額禮｜商品滿 <b style="color:#d8c6a5;">NT$${giftThreshold}</b>（不含運費）免費任選保護盒 1 個`;
        cartGiftContainer.innerHTML = `
          <div style="margin: 14px 0; padding: 10px 12px; background: #181818; border: 1px dashed #444; border-radius: 10px; font-size: 12px; color: #bbb; line-height: 1.5;">
            ${msg}
          </div>
        `;
      }
    }

    function renderCart() {
      const allList = rows(),
        mainList = allList.filter((item) => !addon || item.id !== addon.id),
        t = totals();
      root.querySelectorAll('[data-count]').forEach((el) => (el.textContent = t.count));
      $('ccs-sub').textContent = money(t.sub);
      $('ccs-fee').textContent = money(t.fee);
      $('ccs-total').textContent = money(t.total);
      $('ccs-mobile-total').textContent = money(t.total);
      $('ccs-checkout').disabled = !t.count;
      
      $('ccs-items').innerHTML = mainList.length
        ? mainList
            .map(
              (item) => {
                let itemImage = item.image;
                if (item.options) {
                  const opt = item.options.find(o => o.value === item.spec);
                  if (opt && opt.image) itemImage = opt.image;
                }
                const cartDisplayName = formatDisplayName(item);
                const subText = item.displayId ? `${esc(item.displayId)} · 規格：${esc(item.spec)}` : `規格：${esc(item.spec)}`;
                return `<div class="ccs-cart-row">
                  <img src="${esc(itemImage)}" alt="${esc(item.name)}">
                  <div>
                    <h3>${esc(cartDisplayName)}</h3>
                    <small>${subText}</small>
                    <strong class="ccs-row-price">${money(item.price * item.qty)}</strong>
                    <div class="ccs-cart-row-bottom">
                      ${step(item.cartKey, item.qty)}
                      <button type="button" data-remove="${esc(item.cartKey)}" aria-label="移除">移除</button>
                    </div>
                  </div>
                </div>`;
              }
            )
            .join('')
        : '<div class="ccs-empty"><span>＋</span>購物車還空著<br>挑一款喜歡的保護套吧</div>';

      // 渲染購物車內的固定「推進器加購區」（含「什麼是推進器？」IG 影片連結）
      if (cartAddonContainer && addon) {
        const addonQty = cart[addonCartKey] || 0;
        const videoLinkHtml = addon.videoUrl
          ? `<a href="${esc(addon.videoUrl)}" target="_blank" rel="noopener" style="display: inline-block; margin-top: 4px; font-size: 11px; color: #e1306c; font-weight: 600; text-decoration: underline;">什麼是推進器？ ↗</a>`
          : '';
        cartAddonContainer.innerHTML = `
          <div class="ccs-cart-addon-head">🔥 配件加購專區</div>
          <div class="ccs-cart-addon-body">
            <button type="button" class="ccs-cart-addon-thumb" data-zoom="${esc(addon.id)}" aria-label="查看${esc(addon.name)}大圖">
              <img src="${esc(addon.image)}" alt="${esc(addon.name)}">
            </button>
            <div class="ccs-cart-addon-info">
              <h3>${esc(addon.name)}</h3>
              <small>加購價 <b>${money(addon.price)}</b> / 個</small>
              ${videoLinkHtml}
              ${addonQty > 0 ? `<span class="ccs-cart-addon-sub">已加購 ${addonQty} 個（${money(addon.price * addonQty)}）</span>` : ''}
            </div>
            ${step(addonCartKey, addonQty)}
          </div>
        `;
      }

      // 渲染滿 999 贈品選擇區
      renderGiftSection(t);

      if (!t.count) $('ccs-delivery').hidden = true;
      persist();
    }

    function quantity(input) {
      const n = Number(input.value);
      return Number.isFinite(n) ? Math.max(Number(input.min), Math.min(99, Math.floor(n))) : 1;
    }

    function goCart() {
      $('ccs-cart').scrollIntoView({ behavior: 'smooth', block: 'start' });
      $('ccs-cart').focus({ preventScroll: true });
    }

    root.addEventListener('change', (event) => {
      const target = event.target;
      if (target.id === 'ccs-gift-select') {
        selectedGiftId = target.value;
        renderCart();
        return;
      }
      if (target.dataset.opt) {
        const productId = target.dataset.opt;
        const selectedOption = target.options[target.selectedIndex];
        const newSku = selectedOption.getAttribute('data-sku');
        const newImg = selectedOption.getAttribute('data-img');
        const card = target.closest('[data-product-card]');
        if (card) {
          const skuDisplay = card.querySelector('[data-sku-display]');
          const imgTarget = card.querySelector('[data-img-target]');
          const p = map.get(productId);
          if (skuDisplay && p) {
            skuDisplay.textContent = p.color ? `${newSku} / ${p.color}` : newSku;
          }
          if (imgTarget && newImg) {
            imgTarget.src = newImg;
          }
        }
      }
      if (target.dataset.qtykey) {
        const ck = target.dataset.qtykey;
        const n = quantity(target);
        if (n > 0) cart[ck] = n;
        else delete cart[ck];
        renderCart();
      }
    });

    root.addEventListener('click', (event) => {
      const b = event.target.closest('button,a');
      if (!b) return;
      if (b.hasAttribute('data-go-cart')) goCart();
      
      if (b.dataset.gotoSeries) {
        const targetSeries = b.dataset.gotoSeries;
        const index = series.indexOf(targetSeries);
        if (index !== -1) {
          currentSeriesIndex = index + 1;
          renderProducts();
          root.querySelectorAll('[data-filter]').forEach((el) => {
            el.setAttribute('aria-pressed', el.dataset.filter == (index + 1));
          });
        }
        $('ccs-products').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // 大分類點擊
      if (b.hasAttribute('data-filter')) {
        currentSeriesIndex = Number(b.dataset.filter);
        root.querySelectorAll('[data-filter]').forEach((el) => el.setAttribute('aria-pressed', el === b));
        // 切換到非「全部商品」時，若原本停在專屬子索引則自動重置為「全部型號」
        if (
          currentSeriesIndex !== 0 &&
          (currentModelFilter === '中階型號' || currentModelFilter === 'T牌保護盒')
        ) {
          currentModelFilter = 'all';
          modelFilterContainer.querySelectorAll('[data-modelfilter]').forEach((el) => {
            el.setAttribute('aria-pressed', el.dataset.modelfilter === 'all');
          });
        }
        // 切換離開「原創設計」時，重置原創子系列為「全部原創」
        const nextSeries = currentSeriesIndex === 0 ? null : series[currentSeriesIndex - 1];
        if (nextSeries !== '原創設計' && currentOriginalSubFilter !== 'all') {
          currentOriginalSubFilter = 'all';
          subFilterContainer.querySelectorAll('[data-subfilter]').forEach((el) => {
            el.setAttribute('aria-pressed', el.dataset.subfilter === 'all');
          });
        }
        renderProducts();
      }

      // 機型次分類點擊
      if (b.hasAttribute('data-modelfilter')) {
        currentModelFilter = b.dataset.modelfilter;
        modelFilterContainer.querySelectorAll('[data-modelfilter]').forEach((el) => el.setAttribute('aria-pressed', el === b));
        renderProducts();
      }

      // 原創設計子系列點擊
      if (b.hasAttribute('data-subfilter')) {
        currentOriginalSubFilter = b.dataset.subfilter;
        subFilterContainer.querySelectorAll('[data-subfilter]').forEach((el) => el.setAttribute('aria-pressed', el === b));
        renderProducts();
      }
      
      if (b.dataset.prodStep) {
        const input = b.parentElement.querySelector('input');
        input.value = Math.max(1, Math.min(99, quantity(input) + Number(b.dataset.prodStep)));
      }

      if (b.dataset.cartkey && b.dataset.step) {
        const ck = b.dataset.cartkey;
        const input = b.parentElement.querySelector('input');
        const newVal = Math.max(0, Math.min(99, quantity(input) + Number(b.dataset.step)));
        input.value = newVal;
        if (newVal > 0) cart[ck] = newVal;
        else delete cart[ck];
        renderCart();
      }

      // 加入購物車
      if (b.dataset.add) {
        const id = b.dataset.add;
        const article = b.closest('article');
        const input = article.querySelector('[data-prod-qty]');
        const optSelect = article.querySelector('[data-opt]');
        const p = map.get(id);
        const spec = optSelect ? optSelect.value : p.model;
        const cartKey = id + SEP + spec;
        
        let selectedSku = p.id;
        if (p.options && optSelect) {
          const matched = p.options.find(o => o.value === spec);
          if (matched) selectedSku = matched.sku;
        }

        const n = quantity(input);
        const old = cart[cartKey] || 0;
        cart[cartKey] = Math.min(99, old + n);

        renderCart();
        const fullTitle = formatDisplayName(p);
        notify(`已加入購物車：${selectedSku} ${fullTitle} (${spec})`);
      }

      if (b.dataset.remove) {
        delete cart[b.dataset.remove];
        renderCart();
      }

      if (b.dataset.zoom) {
        const p = map.get(b.dataset.zoom);
        if (p) {
          const d = $('ccs-zoom');
          const card = b.closest('[data-product-card]');
          let activeImg = p.image;
          let activeSku = p.hideSku ? '' : p.id;
          if (card) {
            const imgTarget = card.querySelector('[data-img-target]');
            const optSelect = card.querySelector('[data-opt]');
            if (imgTarget) activeImg = imgTarget.src;
            if (optSelect && p.options) {
              const matched = p.options.find(o => o.value === optSelect.value);
              if (matched) activeSku = matched.sku;
            }
          }
          const fullTitle = formatDisplayName(p);
          d.querySelector('img').src = activeImg;
          d.querySelector('img').alt = fullTitle;
          d.querySelector('p').textContent = activeSku
            ? `${activeSku}｜${fullTitle}｜適用 ${p.model}｜僅保護套，不含機身`
            : `${fullTitle}｜加購價 ${money(p.price)}`;

          d.showModal();
        }
      }
      if (b.hasAttribute('data-close')) b.closest('dialog').close();
    });

    function checkGiftSelected(t) {
      if (t.sub >= giftThreshold && !giftOptions.some((g) => g.id === selectedGiftId)) {
        notify(`已滿 NT$${giftThreshold}，請先選擇免費贈送的保護盒`);
        const selectEl = $('ccs-gift-select');
        if (selectEl) {
          selectEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          selectEl.focus({ preventScroll: true });
        }
        return false;
      }
      return true;
    }

    $('ccs-checkout').addEventListener('click', () => {
      const t = totals();
      if (!t.count) return;
      if (!checkGiftSelected(t)) return;
      $('ccs-delivery').hidden = false;
      $('ccs-delivery').scrollIntoView({ behavior: 'smooth', block: 'start' });
      $('ccs-form').elements.receiver.focus({ preventScroll: true });
    });

    const form = $('ccs-form');
    form.addEventListener('input', (event) => event.target.setCustomValidity?.(''));
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const t = totals();
      if (!t.count) {
        notify('請先加入商品');
        return;
      }
      if (!checkGiftSelected(t)) return;
      const f = form.elements;
      for (const name of ['receiver', 'phone', 'store', 'invoice', 'note'])
        f[name].value = f[name].value.trim();
      f.invoice.value = f.invoice.value.toUpperCase();
      if (!f.receiver.value) {
        f.receiver.setCustomValidity('請填寫收件人姓名');
      } else if ([...f.receiver.value].length < 2) {
        f.receiver.setCustomValidity('收件人姓名至少需填寫 2 個字');
      } else {
        f.receiver.setCustomValidity('');
      }
      f.store.setCustomValidity(f.store.value ? '' : '請填寫門市店名或代碼');
      f.invoice.setCustomValidity(
        !f.invoice.value || /^\/[A-Z0-9+.-]{7}$/.test(f.invoice.value)
          ? ''
          : '手機條碼需為 / 加上 7 碼英數或符號'
      );
      if (!form.reportValidity()) return;
      const chosenGift =
        t.sub >= giftThreshold
          ? giftOptions.find((g) => g.id === selectedGiftId)
          : null;
      const lines = [
        '【C.COOL 訂購申請】',
        ...rows().map(
          (item, i) => {
            const titlePrefix = item.displayId ? `${item.displayId} ` : '';
            const fullTitle = formatDisplayName(item);
            return `${i + 1}. ${titlePrefix}${fullTitle}／規格：${item.spec}\n   NT$${item.price} × ${item.qty} 件＝NT$${item.price * item.qty}`;
          }
        ),
        ...(chosenGift
          ? [
              '',
              `【滿額贈品】${chosenGift.id} ${formatDisplayName(chosenGift)}（NT$0）`,
            ]
          : []),
        '',
        `商品小計：NT$${t.sub}`,
        `運費：NT$${t.fee}`,
        `取貨付款總額：NT$${t.total}`,
        '',
        '付款方式：7-11 取貨付款',
        `收件人：${f.receiver.value}`,
        `手機：${f.phone.value}`,
        `7-11 門市店名或代碼：${f.store.value}`,
        `手機條碼載具：${f.invoice.value || '未填寫'}`,
        `備註：${f.note.value || '無'}`,
      ];
      $('ccs-message').value = lines.join('\n');
      $('ccs-copy-status').textContent = '';
      $('ccs-line').href =
        'https://line.me/R/oaMessage/' +
        encodeURIComponent(config.lineId) +
        '/?' +
        encodeURIComponent(lines.join('\n'));
      purchaseTracked = false; // 每次開啟新訂單確認視窗時重置追蹤狀態
      $('ccs-review').showModal();
    });

    $('ccs-line').addEventListener('click', () => {
      trackPurchase(); // 觸發 Meta Pixel 與 GA4 購買事件
      $('ccs-copy-status').textContent =
        '已開啟 LINE，請在聊天室按「送出」才算完成訂購';
    });
    renderProducts();
    renderCart();
  }
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', () => start(), { once: true });
  else start();
})();
