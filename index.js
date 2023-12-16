let nome = "Fábio Quispe";
let xp = 19244;
let nivel = "";

const niveis = [
  { nome: "Ferro", limite: 1000 },
  { nome: "Bronze", limite: 2000 },
  { nome: "Prata", limite: 5000 },
  { nome: "Ouro", limite: 7000 },
  { nome: "Platina", limite: 8000 },
  { nome: "Ascendente", limite: 9000 },
  { nome: "Imortal", limite: 10000 },
  { nome: "Radiante", limite: Infinity }
];

for (const { nome: nivelNome, limite: nivelLimite } of niveis) {
  if (xp <= nivelLimite) {
    nivel = nivelNome;
    break;
  }
}

console.log(`O Herói de nome **{${nome}}** está no nível de **{${nivel}}**`);