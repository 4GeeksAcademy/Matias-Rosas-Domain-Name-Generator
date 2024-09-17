let brands = ["tech", "sol", "group"];

let adjectives = ["fast", "smart", "secure"];

let domains = [".com", ".net", ".org"];

for (let brand of brands) {
  for (let adjective of adjectives) {
    for (let domain of domains) {
      console.log("www." + brand + adjective + domain);
    }
  }
}
