const original = 'refold'
const modified = 'reold'

function findNaughtyStep(original, modified) {
    
     // Ordenar las cadenas por longitud, de menor a mayor
  const [lessWords, mostWords] = [original, modified].sort((a, b) => a.length - b.length);
  
  // Convertir la cadena más larga en un array y encontrar el primer carácter diferente
  const different = [...mostWords].find(letter => lessWords.includes(letter) !== mostWords.includes(letter)) || ""
  return String(different)

}

console.log(findNaughtyStep(original,modified))