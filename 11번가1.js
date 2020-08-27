let S	= 'baabab';

document.getElementById('result').innerText = this.solution(S);

function solution(S) {
    let result = 0;
    let continuity = 0; //연속횟수
    let beforeVal = ""; //이전문자
    
    let arr = S.split('');
    let arrLen = arr.length

    arr.forEach((item,index) => {
        if(beforeVal === item){ // 이전문자랑 현재문자랑 같을 시
            continuity++; // 연속횟수 증가

            if(index+1 === arrLen){ // 연속문자로 for문 종료 시 result 값 셋팅.
                result += parseInt(continuity/3)
            }
        }else{ // 이전문자랑 현재문자 다를 때
            if(continuity >= 3){ // 연속횟수가 3이상일때 result 값 셋팅.
                result += parseInt(continuity/3)
            }
            continuity = 1;
            beforeVal = item;
        }
    });

    return result
}