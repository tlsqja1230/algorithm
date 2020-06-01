let citations = [3, 0, 6, 1, 5]

document.getElementById('result').innerText = this.solution(citations);

function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>{return a-b})
    for(var h=0; h<citations[citations.length-1]; h++){
        var cnt = 0;
        citations.forEach(item=>{
            if(h <= item) cnt++;
        })
        if(cnt >= h && (citations.length-cnt) <= h) answer = h
    }
    
    return answer;
}