let genres = ['classic', 'pop', 'classic', 'classic', 'pop']
let plays = [500, 600, 150, 800, 2500]

document.getElementById('result').innerText = this.solution(genres, plays);

function solution(genres, plays) {
    var answer = [];
    
    var obj = {};
    var sum = {};
    genres.forEach((item,index)=>{
        obj[item]? obj[item].push({index: index, plays: plays[index]}) : obj[item] = [{index: index, plays: plays[index]}];
        sum[item]? sum[item] += plays[index] : sum[item] = plays[index];
    })
    
    var sumArr = Object.keys(sum).map(key => {return [key,sum[key]]});
    sumArr.sort((a,b) => {return b[1]-a[1]});
    
    for(var item of sumArr){
        obj[item[0]].sort((a,b)=>{
            if(a.plays === b.plays){
               return 0;
               }else{
                   return b.plays-a.plays;
               }
        })
        var sliceItem = obj[item[0]].splice(0,2);
        answer.push(sliceItem[0].index);
        if(sliceItem[1]) answer.push(sliceItem[1].index);
    }
    
    return answer;
}