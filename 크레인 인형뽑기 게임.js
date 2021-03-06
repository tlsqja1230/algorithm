let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];

document.getElementById('result').innerText = this.solution(board, moves);

function solution(board, moves) {
    let answer = 0;
    
    let sortBoard = [];
    board.forEach(function(item,index){
        let tmp = [];
        for(let i=0; i<board[index].length; i++){
            if(board[i][index] !== 0){
               tmp.push(board[i][index]);
               }
        };
        sortBoard.push(tmp);
    });
    
    let result = [];
    moves.forEach(function(item,index){
   if(sortBoard[item-1].length > 0){
      if(result[result.length-1] === sortBoard[item-1][0]){
         result.pop();
          answer +=2;
         }else{
             result.push(sortBoard[item-1][0]);
         };
       
       sortBoard[item-1].shift();
      }     
    })
    return answer;
}