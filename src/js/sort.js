export default function sortHeroes(heroes) {
  heroes.sort((x, y) => y.health - x.health);
  return heroes;
}
