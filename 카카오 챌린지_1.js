const offers = ["10/05 10/12 2400", "10/05 10/10 2500", "10/07 10/15 2300", "10/08 10/30 3000", "10/15 11/03 3000", "10/20 11/01 3500", "11/02 11/11 4000"]

document.getElementById('result').innerText = this.solution(offers);

function solution(offers) {
    let answer = offers.reduce((result, offers) => {
        let rsArr = result.split(' ')
        let rsEnd = Number(rsArr[1].replace('/',''))
        let rsAmt = Number(rsArr[2])

        let ofArr = offers.split(' ')
        let ofStart = Number(ofArr[0].replace('/',''))
        let ofAmt = Number(ofArr[2])
            
        let value = ''
        // 오퍼 마감일 지났을떄
        if(rsEnd <  ofStart){
            value = result
        }else if(rsAmt === ofAmt){
            // 연봉이 같을때 - 마감일 늦은것
            value = rsEnd > rsEnd? result : offers
        }else if(rsAmt > ofAmt){
            value = result
        }else {
            value = offers
        }

        return value
    });
    return Number(answer.split(' ')[2])
}