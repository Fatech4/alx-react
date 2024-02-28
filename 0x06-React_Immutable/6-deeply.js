export default function mergeDeeplyElements(page1, page2) {
  const map = Map(page1);
  return map.mergeDeep(page2);
}
