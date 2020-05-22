let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

document.getElementById('result').innerText = this.solution(skill, skill_trees);

function solution(skill, skill_trees) {
    var answer = 0;
    
    skill_trees.forEach(item=>{
        let preNum = item.indexOf(skill[0]);
        let isFlag = true;
        for(let i=1; i<skill.split('').length; i++){
            let curNum = item.indexOf(skill[i]);
            if((preNum === -1 && curNum > -1) || (curNum > -1 && preNum > curNum)){
                isFlag = false;
            }else{
                preNum = curNum;
            }
        }
        if(isFlag) answer += 1;
    })
    
    return answer;
}