/*
1. Problem : Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
   Example : nums = [3,2,3] -> 3
             nums = [2,2,1,1,1,2,2] -> 2
*/

function getMajority(nums) {
  for (let i = 0; i < nums.length; i++) {
    let sum = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        sum += 1;
      }
    }

    if (sum > nums.length / 2) {
      return nums[i];
    }
  }
  return -1;
}

console.log(getMajority([3,2,3])); 
console.log(getMajority([2,2,1,1,1,2,2])); 

/*
2. Problem : Create a function to convert roman numeral to integer.
   Example : s = "III” -> 3  Explanation: III = 3.
             s = "LVIII" -> 58  Explanation: L = 50, V= 5, III = 3.
             s = "MCMXCIV" -> 1994  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4
*/

function convertRomanToNumber(roman){
    const romanNumeral = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let number=0;
    for(let i=0;i<roman.length;i++){
        const currentValue= romanNumeral[roman[i]];
        if(romanNumeral[roman[i]]<romanNumeral[roman[i+1]]){
            number -= currentValue;
        }else{
            number += currentValue;
        }
    }

    return number;
}

console.log(convertRomanToNumber("III")); 
console.log(convertRomanToNumber("LVIII"));
console.log(convertRomanToNumber("MCMXCIV")); 

/*
3.  Problem : Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two  numbers directly above it as shown →
    Example : numRows = 5 -> [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
              numRows = 1 -> [[1]]
*/

function getRow(rowIndex) {
    let result = [];
    for (let row = 0; row <= rowIndex; row++) {
        result[row] = 1;        
        for (let col = row - 1; col > 0; col--) {
            result[col] = result[col] + result[col - 1];
        }
    }
    return result;
}

console.log(getRow(0));

/*
4. Problem  : You are given an array prices where prices[i] is the price of a given stock on the ith day.
              You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
              Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 
  Example   : prices = [7,1,5,3,6,4] -> 5 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
              prices = [7,6,4,3,1] -> 0 Explanation: In this case, no transactions are done and the max profit = 0.
*/

function maximumProfit(prices) {
  let bestPrice = prices[0]; 
  let maxProfit = 0; 
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < bestPrice) {
      bestPrice = prices[i];
    } else if (prices[i] - bestPrice > maxProfit) {
      maxProfit = prices[i] - bestPrice;
    }
  }
  return maxProfit;
}

console.log(maximumProfit([7, 1, 5, 3, 6, 4]));
console.log(maximumProfit([7, 6, 4, 3, 1]));
