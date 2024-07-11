// code your solution here
function superbowlWin(array) {
    const winningYear = array.find(item => item.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
  
  // Example usage:
  const record = [
    // ... (your provided data)
  ];
  
  const chiefsWinYear = superbowlWin(record);
  console.log("Chiefs won in:", chiefsWinYear); // Output: Chiefs won in: 1998
  