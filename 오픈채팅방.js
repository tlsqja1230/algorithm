let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

document.getElementById('result').innerText = this.solution(record);

function solution(record) {
    var answer = [];
    var idMap = new Map()
    record.reverse().forEach(item=>{
        var temp = item.split(' ')
        if(temp[0] !== 'Leave' && !idMap.has(temp[1])){
            idMap.set(temp[1],temp[2])
        }
    })
    record.forEach(item=>{
        var temp = item.split(' ')
        var name = idMap.get(temp[1])
        if(temp[0] === 'Enter'){
            answer.push(`${name}님이 들어왔습니다.`)
        }else if(temp[0] === 'Leave'){
            answer.push(`${name}님이 나갔습니다.`)
        }
    })
    
    return answer.reverse();
}