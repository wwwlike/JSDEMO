/*@flow*/
function add(a,b){
  return a+b
}

add(1,'2')

function test() {
  console.log('1: ', a) //undefined
  if (false) {
    var a = 1
  }
  console.log('3: ', a) //undefined
}

test()