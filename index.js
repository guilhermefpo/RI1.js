function Personagem(
  nome,
  codinome,
  armaPrincipal,
  armaSecundaria,
  velocidade,
  forca,
  resistencia,
) {
  this.nome = nome;
  this.codinome = codinome;
  this.armaPrincipal = armaPrincipal;
  this.armaSecundaria = armaSecundaria;
  this.velocidade = velocidade;
  this.forca = forca;
  this.resistencia = resistencia;

  this.descricao = function () {
    return `
     Nome do personagem: ${this.nome}
     Codinome do personagem: ${this.codinome}
     Arma principal: ${this.armaPrincipal}
     Arma secundária: ${this.armaSecundaria}
     Nível de força: ${this.forca} 
     Nível de velocidade: ${this.velocidade}
     Nível de resistência: ${this.resistencia}
    `;
  };
}

const batman = new Personagem(
  "Bruce Wane",
  "Batman",
  "Inteligencia",
  "Combate corpo a corpo",
  85,
  80,
  90,
);
const ravena = new Personagem(
  "Rachel Roth",
  "Ravena",
  "Manipulação absoluta de energia e almas",
  "Magia",
  75,
  80,
  95,
);

const zatanna = new Personagem(
  "Zatanna Zatara",
  "Zatanna",
  "Manipulação da realidade",
  "Magia",
  69,
  95,
  80,
);

const superman = new Personagem(
  "Clark Kent",
  "Superman",
  "Super-Força",
  "Força",
  98,
  99,
  100,
);

const personagens = [batman, ravena, superman, zatanna];

personagens.forEach((personagens) => {
  console.log(personagens.descricao());
});

for (let i = 0; i < personagens.length; i++) {
  for (let j = i + 1; j < personagens.length; j++) {
    const p1 = personagens[i];
    const p2 = personagens[j]; // Black Beatles - Rea Sremmurd

    console.log(`\nComparando: ${p1.codinome} VS ${p2.codinome}`);

    const atributos = ["forca", "velocidade", "resistencia"];

    atributos.forEach(function (attr) {
      let vencedor;

      if (p1[attr] > p2[attr]) {
        vencedor = p1.codinome;
      } else {
        vencedor = p2.codinome;
      }

      console.log(`Vencedor em ${attr}: ${vencedor}`);
    });
  }
}
