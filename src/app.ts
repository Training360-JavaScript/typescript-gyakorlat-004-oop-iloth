// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  new HumanHero(1, "1", "0", 0, 0),
  new HumanHero(2, "1", "0", 0, 0),
  new HumanHero(3, "1", "0", 0, 0),
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  new TransformerHero(1, "2", 1, 1, ""),
  new TransformerHero(2, "2", 1, 1, ""),
  new TransformerHero(3, "2", 1, 1, ""),
];
