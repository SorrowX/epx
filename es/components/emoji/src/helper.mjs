import { ref, computed } from 'vue';
import { useAxios } from '@vueuse/integrations/useAxios';

const emoticonBaseList = [
  {
    describe: "\u5FAE\u7B11",
    code: "/::)"
  },
  {
    describe: "\u6487\u5634",
    code: "/::~"
  },
  {
    describe: "\u8272",
    code: "/::B"
  },
  {
    describe: "\u53D1\u5446",
    code: "/::|"
  },
  {
    describe: "\u5F97\u610F",
    code: "/:8-)"
  },
  {
    describe: "\u6D41\u6CEA",
    code: "/::<"
  },
  {
    describe: "\u5BB3\u7F9E",
    code: "/::$"
  },
  {
    describe: "\u95ED\u5634",
    code: "/::X"
  },
  {
    describe: "\u7761",
    code: "/::Z"
  },
  {
    describe: "\u5927\u54ED",
    code: "/::'("
  },
  {
    describe: "\u5C34\u5C2C",
    code: "/::-|"
  },
  {
    describe: "\u53D1\u6012",
    code: "/::@"
  },
  {
    describe: "\u8C03\u76AE",
    code: "/::P"
  },
  {
    describe: "\u5472\u7259",
    code: "/::D"
  },
  {
    describe: "\u60CA\u8BB6",
    code: "/::O"
  },
  {
    describe: "\u96BE\u8FC7",
    code: "/::("
  },
  {
    describe: "\u9177",
    code: "/::+"
  },
  {
    describe: "\u51B7\u6C57",
    code: "/:--b"
  },
  {
    describe: "\u6293\u72C2",
    code: "/::Q"
  },
  {
    describe: "\u5410",
    code: "/::T"
  },
  {
    describe: "\u5077\u7B11",
    code: "/:,@P"
  },
  {
    describe: "\u6109\u5FEB",
    code: "/:,@-D"
  },
  {
    describe: "\u767D\u773C",
    code: "/::d"
  },
  {
    describe: "\u50B2\u6162",
    code: "/:,@o"
  },
  {
    describe: "\u9965\u997F",
    code: "/::g"
  },
  {
    describe: "\u56F0",
    code: "/:|-)"
  },
  {
    describe: "\u60CA\u6050",
    code: "/::!"
  },
  {
    describe: "\u6D41\u6C57",
    code: "/::L"
  },
  {
    describe: "\u61A8\u7B11",
    code: "/::>"
  },
  {
    describe: "\u60A0\u95F2",
    code: "/::,@"
  },
  {
    describe: "\u594B\u6597",
    code: "/:,@f"
  },
  {
    describe: "\u5492\u9A82",
    code: "/::-S"
  },
  {
    describe: "\u7591\u95EE",
    code: "/:?"
  },
  {
    describe: "\u5618",
    code: "/:,@x"
  },
  {
    describe: "\u6655",
    code: "/:,@@"
  },
  {
    describe: "\u75AF\u4E86",
    code: "/::8"
  },
  {
    describe: "\u8870",
    code: "/:,@!"
  },
  {
    describe: "\u9AB7\u9AC5",
    code: "/:!!!"
  },
  {
    describe: "\u6572\u6253",
    code: "/:xx"
  },
  {
    describe: "\u518D\u89C1",
    code: "/:bye"
  },
  {
    describe: "\u64E6\u6C57",
    code: "/:wipe"
  },
  {
    describe: "\u62A0\u9F3B",
    code: "/:dig"
  },
  {
    describe: "\u9F13\u638C",
    code: "/:handclap"
  },
  {
    describe: "\u7CD7\u5927\u4E86",
    code: "/:&-("
  },
  {
    describe: "\u574F\u7B11",
    code: "/:B-)"
  },
  {
    describe: "\u5DE6\u54FC\u54FC",
    code: "/:<@"
  },
  {
    describe: "\u53F3\u54FC\u54FC",
    code: "/:@>"
  },
  {
    describe: "\u54C8\u6B20",
    code: "/::-O"
  },
  {
    describe: "\u9119\u89C6",
    code: "/:>-|"
  },
  {
    describe: "\u59D4\u5C48",
    code: "/:P-("
  },
  {
    describe: "\u5FEB\u54ED\u4E86",
    code: "/::'|"
  },
  {
    describe: "\u9634\u9669",
    code: "/:X-)"
  },
  {
    describe: "\u4EB2\u4EB2",
    code: "/::*"
  },
  {
    describe: "\u5413",
    code: "/:@x"
  },
  {
    describe: "\u53EF\u601C",
    code: "/:8*"
  },
  {
    describe: "\u83DC\u5200",
    code: "/:pd"
  },
  {
    describe: "\u897F\u74DC",
    code: "/:<W>"
  },
  {
    describe: "\u5564\u9152",
    code: "/:beer"
  },
  {
    describe: "\u7BEE\u7403",
    code: "/:basketb"
  },
  {
    describe: "\u4E52\u4E53",
    code: "/:oo"
  },
  {
    describe: "\u5496\u5561",
    code: "/:coffee"
  },
  {
    describe: "\u996D",
    code: "/:eat"
  },
  {
    describe: "\u732A\u5934",
    code: "/:pig"
  },
  {
    describe: "\u73AB\u7470",
    code: "/:rose"
  },
  {
    describe: "\u51CB\u8C22",
    code: "/:fade"
  },
  {
    describe: "\u5634\u5507",
    code: "/:showlove"
  },
  {
    describe: "\u7231\u5FC3",
    code: "/:heart"
  },
  {
    describe: "\u5FC3\u788E",
    code: "/:break"
  },
  {
    describe: "\u86CB\u7CD5",
    code: "/:cake"
  },
  {
    describe: "\u95EA\u7535",
    code: "/:li"
  },
  {
    describe: "\u70B8\u5F39",
    code: "/:bome"
  },
  {
    describe: "\u5200",
    code: "/:kn"
  },
  {
    describe: "\u8DB3\u7403",
    code: "/:footb"
  },
  {
    describe: "\u74E2\u866B",
    code: "/:ladybug"
  },
  {
    describe: "\u4FBF\u4FBF",
    code: "/:shit"
  },
  {
    describe: "\u6708\u4EAE",
    code: "/:moon"
  },
  {
    describe: "\u592A\u9633",
    code: "/:sun"
  },
  {
    describe: "\u793C\u7269",
    code: "/:gift"
  },
  {
    describe: "\u62E5\u62B1",
    code: "/:hug"
  },
  {
    describe: "\u5F3A",
    code: "/:strong"
  },
  {
    describe: "\u5F31",
    code: "/:weak"
  },
  {
    describe: "\u63E1\u624B",
    code: "/:share"
  },
  {
    describe: "\u80DC\u5229",
    code: "/:v"
  },
  {
    describe: "\u62B1\u62F3",
    code: "/:@)"
  },
  {
    describe: "\u52FE\u5F15",
    code: "/:jj"
  },
  {
    describe: "\u62F3\u5934",
    code: "/:@@"
  },
  {
    describe: "\u5DEE\u52B2",
    code: "/:bad"
  },
  {
    describe: "\u7231\u4F60",
    code: "/:lvu"
  },
  {
    describe: "NO",
    code: "/:no"
  },
  {
    describe: "OK",
    code: "/:ok"
  },
  {
    describe: "\u7231\u60C5",
    code: "/:love"
  },
  {
    describe: "\u98DE\u543B",
    code: "/:<L>"
  },
  {
    describe: "\u8DF3\u8DF3",
    code: "/:jump"
  },
  {
    describe: "\u53D1\u6296",
    code: "/:shake"
  },
  {
    describe: "\u6004\u706B",
    code: "/:<O>"
  },
  {
    describe: "\u8F6C\u5708",
    code: "/:circle"
  },
  {
    describe: "\u78D5\u5934",
    code: "/:kotow"
  },
  {
    describe: "\u56DE\u5934",
    code: "/:turn"
  },
  {
    describe: "\u8DF3\u7EF3",
    code: "/:skip"
  },
  {
    describe: "\u6295\u964D",
    code: "/:oY"
  },
  {
    describe: "\u6298\u78E8",
    code: "/::8"
  }
];
const emoticonList = emoticonBaseList.map(
  (item, index) => {
    const image = item.describe === "\u6298\u78E8" ? `https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif` : `https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif`;
    return {
      ...item,
      image,
      emojiId: index,
      text: `[${item.describe}]`,
      className: `face${index}`
    };
  }
);
const emoticonListKeys = emoticonList.reduce(
  (buff, item) => {
    return buff.concat([item.code, item.text]);
  },
  []
);
const emoticonListMap = emoticonListKeys.reduce(
  (buff, value) => {
    const item = emoticonList.find(
      (_) => _.code === value || _.text === value
    );
    return {
      ...buff,
      [value]: item == null ? void 0 : item["image"]
    };
  },
  {}
);
const WX_TYPE = "wx";
const COMMOM_TYPE = "cm";
const emojiMartData = ref(null);
const setEmojiMartData = (data) => {
  emojiMartData.value = data;
};
const initRemoteData = async () => {
  const { execute } = useAxios();
  if (emojiMartData.value !== null)
    return;
  await execute("https://cdn.jsdelivr.net/npm/@emoji-mart/data", {
    method: "get"
  }).then((res) => {
    emojiMartData.value = res.response.value.data;
  }).catch(() => {
    emojiMartData.value = null;
  });
};
const useFontEmoticon = () => {
  initRemoteData();
  const peopleList = computed(() => {
    var _a, _b;
    const data = emojiMartData.value;
    if (data) {
      const emojiKeys = (_b = (_a = data.categories.find((item) => item.id === "people")) == null ? void 0 : _a.emojis) != null ? _b : [];
      const emojis = emojiKeys.map((key) => data["emojis"][key]);
      const list = emojis.map((item) => item.skins[0]["native"]);
      return list.map((text) => {
        return {
          text
        };
      });
    } else {
      return [];
    }
  });
  return {
    peopleList
  };
};

export { COMMOM_TYPE, WX_TYPE, emoticonBaseList, emoticonList, emoticonListKeys, emoticonListMap, setEmojiMartData, useFontEmoticon };
//# sourceMappingURL=helper.mjs.map
