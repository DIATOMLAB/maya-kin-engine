import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const m = require('../maya_engine.js');
const cases = [
  ['1939-01-24', 11], ['1997-07-26', 44], ['2000-01-01', 153], ['2012-07-26', 59],
  ['2012-12-21', 207], ['2013-07-26', 164], ['2014-07-26', 9], ['2018-02-08', 1],
  ['2019-07-26', 14], ['2024-07-26', 19], ['2026-07-26', 229]
];
let fail = 0;
for (const [d, k] of cases) {
  const p = m.profileOfDate(...d.split('-').map(Number));
  if (p.kin !== k) { console.error('FAIL', d, 'expect', k, 'got', p.kin); fail++; }
}
const self = m.engine.runSelfTest();
if (!self.pass) { console.error('FAIL selftest', self.fails); fail++; }
const trad1990 = m.tradOfDate(1990, 5, 15);
if (!trad1990.nawal || !trad1990.number || !trad1990.trecena || !trad1990.katun) { console.error('FAIL tradOfDate structure', trad1990); fail++; }
if (trad1990.dayName !== '3 K\'an') { console.error('FAIL tradOfDate anchor 1990-05-15 expect 3 K\'an got', trad1990.dayName); fail++; }
const prof = m.profileOfDate(2013, 7, 26);
if (!prof.dual || prof.dual.dreamspell.indexOf('Kin 164') !== 0) { console.error('FAIL dual', JSON.stringify(prof.dual)); fail++; }
const g13 = m.guide13(0);
if (g13.days.length !== 13 || !g13.currentWavespell || !g13.currentTrecena) { console.error('FAIL guide13'); fail++; }
console.log(fail === 0 ? 'ALL PASS (11 date vectors + 23 engine self-tests + trad/dual/guide13)' : fail + ' FAILED');
process.exit(fail ? 1 : 0);
