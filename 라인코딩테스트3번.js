let arr = JSON.parse(localStorage.getItem('arr'))
let n = 5232342;

document.getElementById('result').innerText = this.solution(arr, n);

function solution(arr, n) {
    var t0 = performance.now();
    
    var answer = false;

    var leng = arr.length;

    arr.sort((a,b)=>{
        return a - b
    })

    for(let i=0; i < leng; i++){

        if(arr[i] < n){

            for(let k=i+1; k < leng; k++){

                if(arr[i] + arr[k] === n){

                    answer = true;
                    break;

                }

            }

            

            if(answer) {
                break;
            }

        }else{
            break;
        }

    }

    
    var t1 = performance.now();
    console.log("f1: " + (t1 - t0) + 'ms')
    return answer;
}