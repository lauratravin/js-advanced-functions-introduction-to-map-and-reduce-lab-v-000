// Your code here
// function mapToNegativize(sArray){
//   return sArray.map( x => x * -1)
// }

function mapToNegativize(sArray){
   const newA=[]
   for (const num of sArray){
     newA.push(num *- 1)
   }

  return newA
}
