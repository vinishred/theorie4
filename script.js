// les boucles for
// Pour toutes mes valeurs

// tableau : array
const colorString = ["red", "blue", "green", "yellow"];
console.log(`Bleu :  ${colorString[1]}`);

// Programme Soldes:
// Calcul automatiquement une réduction de 50%
// sur les prix de son magasin
const prices = [25, 37, 55, 69];
console.log(`nombres d'éléments dans mon tableau est de ${prices.length}`);
const reducedPrices = [];

for (let i = 0; i < prices.length; i++) {
  console.log(`Prix initial ${prices[i]}`);
  const reductionPrices = prices[i] / 2;
  reducedPrices.push(reductionPrices);
  console.log(`Prix après réduction ${reductionPrices}`);
}

// Tableau d'objets
const shop = [
  {
    objectName: "sac A",
    price: 10,
  },
  {
    objectName: "sac B",
    price: 12,
  },
  {
    objectName: "sac C",
    price: 17,
  },
];

for (let j = 0; j < shop.length; j++) {
  const priceWithPromo = shop[j].price / 2;
  shop[j].promo = priceWithPromo;
  const pointsEarned = shop[j].price * 10;
  shop[j].points = pointsEarned;
}
console.table(shop);
