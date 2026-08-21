# 真实输出示例（Examples）

以下输出均为真实运行结果（日期示例 1996-01-20），未做删改。

## 完整档案（双体系）

```bash
node maya_engine.js 1996-01-20
```

```json
{
  "input": "1996-01-20",
  "kin": 12,
  "kinName": "12 黄人·水晶",
  "seal": {
    "id": 12,
    "cn": "黄人",
    "en": "Yellow Human",
    "color": "黄",
    "colorFamily": "黄色是成熟家族（黄种子/黄星星/黄人/黄战士/黄太阳）：收成、显化、把结果带回人间的能量。黄色负责让努力开花。"
  },
  "tone": {
    "id": 12,
    "cn": "水晶"
  },
  "oracle": {
    "guide": {
      "role": "引导（成长方向）",
      "kin": 64,
      "name": "64 黄种子·水晶"
    },
    "analog": {
      "role": "支持（天赋盟友）",
      "kin": 207,
      "name": "207 蓝手·水晶"
    },
    "antipode": {
      "role": "挑战（扩张张力）",
      "kin": 142,
      "name": "142 白风·水晶"
    },
    "occult": {
      "role": "隐藏推动（深层礼物）",
      "kin": 249,
      "name": "249 红月·月亮"
    }
  },
  "wavespell": {
    "name": "红龙波",
    "position": 12,
    "range": "Kin 1-13"
  },
  "castle": 1,
  "earthFamily": "核心",
  "harmonic": 3,
  "coreDay": false,
  "classic": {
    "longCount": "12.19.2.15.0",
    "tzolkin": "12 Ajaw",
    "haab": "8 Muwan"
  },
  "trad": {
    "dayName": "12 Ajaw",
    "longCount": "12.19.2.15.0",
    "haab": "8 Muwan",
    "nawal": {
      "yuc": "Ajaw",
      "kiche": "Ajpu",
      "cn": "太阳主",
      "key": "圆满 · 光明",
      "animal": "象征：太阳圆盘",
      "power": "光明、圆满与「主」的称号——古典期统治者的头衔本身就是它。高地 Ajpu 关联《波波尔·乌》的英雄双子：以吹箭筒的精准，赢得生命对死亡的光荣胜利。你自带正午太阳的完成度：成就、领舞、致敬。",
      "shadow": "光太盛会灼伤自己与他人：傲、不肯下台。",
      "use": "适合成就大事、公开表达、行致敬礼。",
      "luck": "旧手稿中性（祖先之力）；现代视角：圆满之日。",
      "symbol": "正午的太阳圆盘"
    },
    "number": {
      "key": "聚集 · 问询",
      "text": "你的力量活在关系网络里：聚集、咨询、询问祖先——你的答案，常从别人嘴里到来。"
    },
    "trecena": {
      "name": "1 Muluk",
      "day": 12,
      "theme": "感恩与偿还，流动成泉",
      "rulingNawal": "水"
    },
    "katun": {
      "name": "4 Ajaw",
      "start": "1993.4.5",
      "end": "2012.12.20",
      "theme": "疾病与守护：考验身体与照护的年代",
      "isCurrentEra": false,
      "currentEra": {
        "name": "2 Ajaw",
        "start": "2012.12.21",
        "theme": "对半分的时代：一半丰饶一半匮乏，练的是平衡"
      }
    }
  },
  "dual": {
    "dreamspell": "Kin 12 黄人（水晶）",
    "traditional": "12 Ajaw（太阳主）",
    "sealOffset": 12,
    "numberOffset": 0,
    "line": "两套体系在你出生的年代恰好错开 12 个位置：13月亮历把你读作一侧，古玛雅日守人会把这一天读作另一侧。",
    "why": "为什么会不同：13月亮历规定 2 月 29 日不占 Kin（官方称 0.0 Hunab Ku），而传统历法每天照常推进——自 1582 年格里历启用以来，闰日的累积已把两套历错开约一百天，而且每过四年再错一位。"
  },
  "sameKinCelebrities": [
    {
      "name": "贝多芬",
      "role": "音乐家",
      "note": "扼住命运的咽喉：失聪后写出欢乐颂。"
    },
    {
      "name": "罗斯福",
      "role": "政治家",
      "note": "坐在轮椅上带领美国穿越危机。"
    }
  ],
  "disclaimer": "本工具基于现代13月亮历体系（综合国际玛雅历研究资料）与古典玛雅历法学术换算（GMT 584283）设计，属文化体验与趣味自我认知，结果仅供参考娱乐，不构成任何决策建议。"
}
```

## 传统玛雅命盘

```bash
node maya_engine.js trad 1996-01-20
```

```json
{
  "dayName": "12 Ajaw",
  "longCount": "12.19.2.15.0",
  "haab": "8 Muwan",
  "nawal": {
    "yuc": "Ajaw",
    "kiche": "Ajpu",
    "cn": "太阳主",
    "key": "圆满 · 光明",
    "animal": "象征：太阳圆盘",
    "power": "光明、圆满与「主」的称号——古典期统治者的头衔本身就是它。高地 Ajpu 关联《波波尔·乌》的英雄双子：以吹箭筒的精准，赢得生命对死亡的光荣胜利。你自带正午太阳的完成度：成就、领舞、致敬。",
    "shadow": "光太盛会灼伤自己与他人：傲、不肯下台。",
    "use": "适合成就大事、公开表达、行致敬礼。",
    "luck": "旧手稿中性（祖先之力）；现代视角：圆满之日。",
    "symbol": "正午的太阳圆盘"
  },
  "number": {
    "key": "聚集 · 问询",
    "text": "你的力量活在关系网络里：聚集、咨询、询问祖先——你的答案，常从别人嘴里到来。"
  },
  "trecena": {
    "name": "1 Muluk",
    "day": 12,
    "theme": "感恩与偿还，流动成泉",
    "rulingNawal": "水"
  },
  "katun": {
    "name": "4 Ajaw",
    "start": "1993.4.5",
    "end": "2012.12.20",
    "theme": "疾病与守护：考验身体与照护的年代",
    "isCurrentEra": false,
    "currentEra": {
      "name": "2 Ajaw",
      "start": "2012.12.21",
      "theme": "对半分的时代：一半丰饶一半匮乏，练的是平衡"
    }
  }
}
```

## 双人合盘

```bash
node maya_engine.js match 1996-01-20 1993-08-20
```

```json
{
  "a": {
    "input": "1996-01-20",
    "kin": 12,
    "kinName": "12 黄人·水晶"
  },
  "b": {
    "input": "1993-08-20",
    "kin": 169,
    "kinName": "169 红月·宇宙"
  },
  "colorRelation": "隐藏型色对（镜像互补、深层吸引）",
  "oracleRoleHit": "B 是 A 的隐藏推动位图腾（深层吸引）",
  "toneDistance": 1,
  "toneRhythm": "互补节奏（步调接近，易配合）",
  "disclaimer": "本工具基于现代13月亮历体系（综合国际玛雅历研究资料）与古典玛雅历法学术换算（GMT 584283）设计，属文化体验与趣味自我认知，结果仅供参考娱乐，不构成任何决策建议。"
}
```

## 未来5年个人流年

```bash
node maya_engine.js year 1996-01-20
```

```json
{
  "input": "1996-01-20",
  "years": [
    {
      "year": 2026,
      "personalYearKin": 42,
      "personalYearName": "42 白风·电力"
    },
    {
      "year": 2027,
      "personalYearKin": 147,
      "personalYearName": "147 蓝手·自我存在"
    },
    {
      "year": 2028,
      "personalYearKin": 252,
      "personalYearName": "252 黄人·超频"
    },
    {
      "year": 2029,
      "personalYearKin": 97,
      "personalYearName": "97 红地球·韵律"
    },
    {
      "year": 2030,
      "personalYearKin": 202,
      "personalYearName": "202 白风·共振"
    },
    {
      "year": 2031,
      "personalYearKin": 47,
      "personalYearName": "47 蓝手·银河"
    }
  ]
}
```

## 未来13天能量指南（节选）

```bash
node maya_engine.js guide13
```

```json
{
  "generatedFrom": "2026-08-21",
  "days": [
    {
      "date": "2026-08-21",
      "weekday": "五",
      "dreamspell": "255 蓝鹰·银河",
      "wavespellPosition": "黄星星波第8格",
      "traditional": "3 Chuwen（吼猴）",
      "trecenaDay": 3
    },
    {
      "date": "2026-08-22",
      "weekday": "六",
      "dreamspell": "256 黄战士·太阳",
      "wavespellPosition": "黄星星波第9格",
      "traditional": "4 Eb'（路）",
      "trecenaDay": 4
    },
    {
      "date": "2026-08-23",
      "weekday": "日",
      "dreamspell": "257 红地球·行星",
      "wavespellPosition": "黄星星波第10格",
      "traditional": "5 B'en（芦苇秆）",
      "trecenaDay": 5
    },
    {
      "date": "2026-08-24",
      "weekday": "一",
      "dreamspell": "258 白镜子·光谱",
      "wavespellPosition": "黄星星波第11格",
      "traditional": "6 Ix（美洲豹）",
      "trecenaDay": 6
    },
    {
      "date": "2026-08-25",
      "weekday": "二",
      "dreamspell": "259 蓝风暴·水晶",
      "wavespellPosition": "黄星星波第12格",
  ...（余下日期省略，运行可见全量）
```

## 引擎自检

```bash
node maya_engine.js selftest
```

```json
PASS 全部23条测试向量通过
```

