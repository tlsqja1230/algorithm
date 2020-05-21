let answers = [1,2,3,4,5];

document.getElementById('result').innerText = this.solution(heights);

function solution(answers) {
    let answer = [];
    
    let a=0;
    let b=0;
    let c=0;
    answers.forEach(function(item, index){
        let s = index+1;
        if((s%5 === 0 && item === 5) || (item === s%5)){
           a += 1;
        }
        
        if(s%2 === 0){
            let k = s%8;
            if(k === 2 && item ===1){
                b += 1;
            }else if(k === 4 && item ===3){
                b += 1;
            }else if(k === 6 && item ===4){
                b += 1;
            }else if(k === 0 && item ===5){
                b += 1;
            }
        }else{
            if(item === 2){
                b += 1;
            }
        }
        
        let g= s%10;
        if((g === 1 || g === 2) && item === 3){
            c += 1;
        }else if((g === 3 || g === 4) && item === 1){
            c += 1;
        }else if((g === 5 || g === 6) && item === 2){
            c += 1;
        }else if((g === 7 || g === 8) && item === 4){
            c += 1;
        }else if((g === 9 || g === 0) && item === 5){
            c += 1;
        }
    })
    
    let max = Math.max(a,b,c);
    if(max === a){
       answer.push(1);
    }
    if(max === b){
       answer.push(2);
    }
    if(max === c){
       answer.push(3);
    }
    
    return answer;
}