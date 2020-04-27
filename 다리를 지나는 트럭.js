var bridge_length = 2;
var weight = 10;
var truck_weights = [7,4,5,6];

document.getElementById('result').innerText = this.solution(bridge_length, weight, truck_weights);

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    var progTruck = [];
    
    while(truck_weights.length > 0 || progTruck.length > 0){
          var delLength = 0;
        progTruck.forEach(function(item, index){
            item[1] += 1;
            if(item[1] === bridge_length){
               delLength += 1;
               }
        })
        progTruck.splice(0,delLength);
        if(truck_weights.length > 0){
           var progSum = 0;
            progTruck.forEach(function(item, index){
                progSum += item[0];
            })
            if(progSum + truck_weights[0] <= weight){
               progTruck.push([truck_weights[0],0]);
                truck_weights.shift();
               }
           }
        answer += 1;
          }
    
    return answer;
}