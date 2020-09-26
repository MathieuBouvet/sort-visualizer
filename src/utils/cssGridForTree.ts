import permutations from "./permutations";
import duplicateValues from "./duplicateValues";

type CssGridHelper = {
  columns: string;
  rows: string;
  areas: string;
};

function getAreas(lines: number, columns: number): string {
  const pathPermutation = permutations(["L", "R"]);
  const rootLine = duplicateValues(["H"], columns);
  const areas: string[] = [];
  areas.push(rootLine.join(" "));
  for (let i = 1; i < lines + 1; i++) {
    const areaForLine = duplicateValues(
      [...pathPermutation(i)],
      Math.pow(2, lines - i)
    );
    areas.push(areaForLine.join(" "));
  }
  return '"' + areas.join('" "') + '"';
}

function cssGridForTree(treeDepth: number): CssGridHelper {
  const columnNumber = Math.pow(2, treeDepth);
  return {
    columns: `repeat(1fr, ${columnNumber})`,
    rows: `repeat(1fr, ${treeDepth})`,
    areas: getAreas(treeDepth, columnNumber),
  };
}

export default cssGridForTree;
