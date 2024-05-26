const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

function manufacture(gifts, materials) {
  const giftBox = [];
  
  for (const gift of gifts) { 
    if (gift.split("").every((letter) => materials.includes(letter))) {
      giftBox.push(gift);
    }
  }

  return giftBox;
}

console.log(manufacture(gifts, materials));
