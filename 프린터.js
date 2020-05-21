let priorities = [2, 1, 3, 2];
let location = 2;

document.getElementById('result').innerText = this.solution(heights);

function solution(priorities, location) {
    let answer = 0;
    
    let isContinue = true;
    while(isContinue){
        let target = priorities.shift();
        let isPrint = true;
        for(let i=0; i<priorities.length; i++){
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