# maya-kin-engine · 玛雅历法引擎

> 双体系玛雅历计算引擎：**13月亮历（Dreamspell）** + **古典玛雅历法（GMT 584283 学术换算）**，零依赖单文件，23 条固化测试向量上电自检。

## 快速开始

```bash
node maya_engine.js 1990-05-15     # 你的银河签名完整档案（双体系+对照）
node maya_engine.js trad 1990-05-15 # 传统玛雅命盘（nawal+数字+旬+Katun）
node maya_engine.js guide13         # 未来13天能量指南（双体系逐日）
node maya_engine.js today          # 今日 Kin + 今日 nawal
node maya_engine.js selftest       # 跑测试向量
npm test                           # 等效
```

输出包含：Kin 编号与名称、20 图腾/13 调性、五大天赋印记（引导/支持/挑战/隐藏推动）、波符、城堡、地球家族、传统玛雅命盘（nawal 日名/数字修正/力量阴影档案/守护象征/出生旬/Katun 时代）、双体系对照、名人同 Kin（公开生日实时计算）。

## 为什么可信

- 23 条固化测试向量（lawoftime.org / 13moon.com / starroot 多源交叉验证），每次运行自检
- 修复了多数计算器都错的闰日边界（2月29日不占 Kin；1916 年前历史日期同样正确——爱因斯坦 1879-03-14 = Kin 260）
- 双体系如实分列，不互相冒充（例：2012-12-21 古典为 4 Ajaw 3 K'ank'in，Dreamspell 为 Kin 207 蓝水晶之手——两个都对，因为它们是两套历法）
- 传统体系与危地马拉日守人（Ajq'ij）、博物馆与学术研究同一套换算（GMT 584283）
- 与小红书小工具《玛雅天赋图腾》生产环境同源同码

## API

```js
const { profileOfDate, matchOf, tradOfDate, dualOf, guide13, engine, celebs } = require('./maya_engine');
profileOfDate(1990, 5, 15);   // 完整档案对象（含 trad 传统命盘 + dual 双体系对照）
tradOfDate(1990, 5, 15);      // 传统玛雅命盘
guide13(0);                   // 从今天起未来13天能量指南（可传偏移天数）
matchOf('1990-05-15', '1993-08-20');  // 合盘基础（色彩关系/五印记角色/调性节奏）
engine.kinOfDate(2026, 7, 26);        // 229
```

## 相关项目

- **小红书 Skill**：《玛雅天赋图腾》skill 版（本引擎 + 解读规范），小红书内搜索使用
- **小红书小工具**：输入生日 1 秒出银河签名视觉报告 + 五大印记矩阵 + 海报

## License

MIT（引擎与名称表）。名人生日为公开资料。品牌与解读文案归作者所有。
