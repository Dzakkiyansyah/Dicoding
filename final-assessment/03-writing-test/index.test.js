// test menggunakan bun
import { expect, test } from "bun:test";
import { sum } from "./index.js";

//  Penjumlahan dua bilangan positif
test("Menjumlahkan dua bilangan positif", () => {
  expect(sum(2, 3)).toBe(5);
});

//  Menjumlahkan bilangan positif dan nol
test("Menjumlahkan bilangan positif dan nol", () => {
  expect(sum(5, 0)).toBe(5);
});

//  Menjumlahkan bilangan negatif dan positif
test("Menjumlahkan bilangan negatif dan positif", () => {
  expect(sum(-1, 1)).toBe(0);
});

