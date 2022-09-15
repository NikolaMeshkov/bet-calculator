let row = 99
let column = 1

let rezultati = [] 


for (let i  = 0; i <= row; i++) {
   rezultati[i] = []
   for (let j = 0; j <=column; j++){
      if (j == 0) {
         rezultati[i][j] = Math.floor(i/10)
      }
      else {
         rezultati[i][j] = i %10
      }
   }
}

console.log(rezultati[1][1])

function deleteRow (arr, row ) {
   arr = arr.slice(0);
   arr.splice(row - 1, 1);
   return arr;
}


