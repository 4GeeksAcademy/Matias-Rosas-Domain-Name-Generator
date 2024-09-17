let companyNames = ["tech", "sol", "group"];
let adjectives = ["fast", "smart", "secure"];
let commercialDomains = [".com", ".net", ".org"];

for (let marca of companyNames) {
  for (let adjetivo of adjectives) {
    for (let dominio of commercialDomains) {
      console.log("www." + marca + adjetivo + dominio);
    }
  }
}
