let heights	= [6,9,5,7,4];

document.getElementById('result').innerText = this.solution(heights);

function solution(heights) {
    let answer = [];
    let arrLength = heights.length;
    for(let i=arrLength-1; i>=0; i--){
        let val = heights.pop(i);
        let result = 0;
        for(let k=heights.length-1; k>=0; k--){
            if(val < heights[k]){
                result = k+1;
                break;
               }
        }
        answer.push(result);
    }
    return answer.reverse();
}