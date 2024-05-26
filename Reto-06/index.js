const movements3 = '>***>'

function maxDistance(movements) {
    let distancia = 0;
    let comodin = 0
    
      for(const mov of movements){
        if(mov === ">") distancia++
        if(mov === "*") comodin++
        if(mov === "<") distancia--
      }
      
      return Math.abs(distancia) + comodin;
  }

console.log(maxDistance(movements))