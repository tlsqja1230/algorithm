let progresses = [93,30,55];
let speeds = [1,30,5]	;

document.getElementById('result').innerText = this.solution(progresses, speeds);

function solution(progresses, speeds) {
    let answer = [];
    
    let temp = progresses.map((item, index)=>{
        return Math.ceil((100-item) / speeds[index])
    })
    while(temp.length > 0){
        let delNum = 0
        for(let i=0; i<temp.length; i++){
            if(temp[0] >= temp[i]){
                delNum++
            }else{
                break
            }
        }
        answer.push(temp.splice(0,delNum).length)
    }
    return answer;
}