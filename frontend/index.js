const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '`', '~'];




const button = document.getElementById('generateBtn')

const password = () => {
    let i = Math.floor(Math.random() * 26);
    let j = Math.floor(Math.random() * 26);
    let k = Math.floor(Math.random() * 26);
    let l = Math.floor(Math.random() * 26);
    let m = Math.floor(Math.random() * 32);
    let n = Math.floor(Math.random() * 32);
    let password = []
    let first = alphabet[i].toUpperCase();
    let second = alphabet[j]
    let third = alphabet[k]
    let fourth = alphabet[l].toUpperCase();
    let fifth = characters[m]
    let sixth = characters[n]
    let seventh = Math.floor(Math.random() * 9);
    let eight = Math.floor(Math.random() * 9)
    password.push(first);
    password.push(second);
    password.push(third);
    password.push(fourth);
    password.push(fifth);
    password.push(sixth);
    password.push(seventh);
    password.push(eight);
    
    let pass = password.join("")
    console.log(pass)
  try{  document.getElementById('passwordDisplay').value = pass
  }
  catch(err) {
    console.log(message.err)
  }

}


const click = () => {
    console.log('clicked');
}


button.addEventListener('click',password)

