var priorities = [2, 1, 3, 2];
var location = 2;

document.getElementById('result').innerText = this.solution(heights);

function solution(priorities, location) {
    var answer = 0;
    
    var isContinue = true;
    while(isContinue){
        var target = priorities.shift();
        var isPrint = true;
        for(var i=0; i<priorities.length; i++){
            if(target < priorities[i]){
                priorities.push(target);
                location = location ===0? priorities.length-1 : location -1;
                isPrint = false;
                break;
            }
        }
        if(isPrint){
            if(location !== 0){
                location -= 1;
            }else{
                isContinue = false;
            }
            answer += 1;
        }
    }
    
    return answer;
}