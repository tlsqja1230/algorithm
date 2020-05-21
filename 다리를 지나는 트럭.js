let bridge_length = 2;
let weight = 10;
let truck_weights = [7,4,5,6];

document.getElementById('result').innerText = this.solution(bridge_length, weight, truck_weights);

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    
    let progTruck = [];
    
    while(truck_weights.length > 0 || progTruck.length > 0){
          let delLength = 0;
        progTruck.forEach(function(item, index){
            item[1] += 1;
            if(item[1] === bridge_length){
               delLength += 1;
               }
        })
        progTruck.splice(0,delLength);
        if(truck_weights.length > 0){
           let progSum = 0;
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