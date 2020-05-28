let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

document.getElementById('result').innerText = this.solution(array, commands);

function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++){
        let temp = array.slice(commands[i][0]-1, commands[i][1])
        temp.sort(function(a,b){
            return a-b
        })
        answer.push(temp[commands[i][2]-1])
    }
    return answer;
}