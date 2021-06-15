const checaPalindromo = (palavra) => {
    let palavraReversa = [...palavra].reverse().join("")
    return palavra === palavraReversa
  }

console.log('ovo', checaPalindromo('ovo'))
console.log('leite', checaPalindromo('leite'))
console.log('nissin', checaPalindromo('nissin'))
console.log('ana', checaPalindromo('ana'))
console.log('batata', checaPalindromo('batata'))
