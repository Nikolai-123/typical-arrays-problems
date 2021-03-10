
exports.min = function min (array) {
  if(array === undefined || null || array.length==0){
  return 0;
}else {
  array.sort(function(a,b){
    return a-b;
  })
  return array[0];
}
}

exports.max = function max (array) {
  if(array === undefined || null || array.length==0){
    return 0;
  }else {
    array.sort(function(a,b){
      return b-a;
    })
    return array[0];
  }
}

exports.avg = function avg (array) {
  if(array === undefined || null || array.length==0){
    return 0;
  } else{
  let summ =0;
  for(let i = 0; i <array.length; i++){
  summ +=array[i] 
  }
  return (summ/array.length)

  }
}
