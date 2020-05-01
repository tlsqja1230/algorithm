var n = 5;
var lost = [2, 4];
var reserve	= [1, 3, 5];

document.getElementById('result').innerText = this.solution(n, lost, reserve);

function solution(n, lost, reserve) {
    var num = 0;
    var lostClone = lost.slice(0);
    
    for(var i=0; i<lostClone.length; i++){
        var lentNum =-1;
        for(var k=0; k<reserve.length; k++){
            if(lostClone[i] === reserve[k]){
               lentNum = k;
                break;
               }
        }
        if(lentNum > -1){
            lost.splice(i-num,1);
        reserve.splice(lentNum,1);
            num += 1;
            }
               }
    
    
    for(var i=0; i<lost.length; i++){
        var lentNum =-1;
        for(var k=0; k<reserve.length; k++){
            if(lost[i]-1 === reserve[k] ||lost[i]+1 === reserve[k]){
               lentNum = k;
                num += 1;
                break;
               }
        }
        if(lentNum > -1){
        reserve.splice(lentNum,1);
            }
               }
    
    return n-lostClone.length+num;
}