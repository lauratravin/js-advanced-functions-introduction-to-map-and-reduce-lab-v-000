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

function mapToNoChange(sArray){
   const newA=[]
   for (const num of sArray){
     newA.push(num)
   }
  return newA
}

function mapToDouble(sArray){
   const newA=[]
   for (const num of sArray){
     newA.push(num * 2)
   }
  return newA
}

function mapToSquare(sArray){
   const newA=[]
   for (const num of sArray){
     newA.push(num ** 2)
   }
  return newA
}

function reduceToTotal(sArray, startingPoint= 0){
 let total = startingPoint
  for (const num of sArray){
    total = total + sum
  }
  return  total
}
