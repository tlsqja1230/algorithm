let clothes = [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]

document.getElementById('result').innerText = this.solution(clothes);

function solution(clothes) {
    var answer = 1;
    var obj = {};
    clothes.forEach(item => {
        obj[item[1]]? obj[item[1]] += 1 : obj[item[1]] = 1;
    })
    
    for(var key in obj){
        answer *= (obj[key]+1);
    }
    return answer-1;
}