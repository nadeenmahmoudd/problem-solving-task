// Exercise 1: Finding Recurring Numbers in a Matrix
function findRecurringNumbers(matrix) {
    const flatArray = matrix.flat();
    const frequencyMap = new Map();
  
    flatArray.forEach(num => {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
  
    const recurringNumbers = [];
    frequencyMap.forEach((count, num) => {
      if (count > 1) {
        recurringNumbers.push(num);
      }
    });
  
    return recurringNumbers;
  }
  
  function showRecurringNumbers() {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 1]
    ];
    const result = findRecurringNumbers(matrix);
    document.getElementById('matrix-result').textContent = `Recurring Numbers: ${result}`;
  }
  
  // Exercise 2: Calculating Prime Numbers in a Specified Range
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function findPrimesInRange(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  function findPrimes() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const result = findPrimesInRange(start, end);
    document.getElementById('prime-result').textContent = `Prime Numbers: ${result}`;
  }
  
  // Exercise 3: Arranging Words in a Sentence According to Length
  function arrangeWordsByLength(sentence) {
    return sentence
      .split(' ')
      .sort((a, b) => a.length - b.length)
      .join(' ');
  }
  
  function arrangeWords() {
    const sentence = document.getElementById('sentence').value;
    const result = arrangeWordsByLength(sentence);
    document.getElementById('sentence-result').textContent = `Arranged Sentence: ${result}`;
  }
  
  // Exercise 4: Filtering the Array Using a Custom Function
  function filterArray(array, customFunction) {
    return array.filter(customFunction);
  }
  
//   function filterArray() {
//     const array = document.getElementById('array').value.split(',').map(Number);
//     const criteria = document.getElementById('criteria').value.trim().toLowerCase();
    
//     let customFunction;
//     if (criteria === 'even') {
//       customFunction = num => num % 2 === 0;
//     } else if (criteria === 'odd') {
//       customFunction = num => num % 2 !== 0;
//     } else {
//       customFunction = num => num === num; // No filtering
//     }
  
//     const result = filterArray(array, customFunction);
//     document.getElementById('filter-result').textContent = `Filtered Array: ${result}`;
//   }
  
// Function to filter an array based on a custom criteria
function filterArray() {
    // Get the array and criteria from the input fields
    const arrayInput = document.getElementById('array').value;
    const criteria = document.getElementById('criteria').value.trim().toLowerCase();
    
    // Convert the input string to an array of numbers
    const array = arrayInput.split(',').map(Number);
    
    // Validate if the array has valid numbers
    if (array.some(isNaN)) {
      alert('Please enter a valid array of numbers.');
      return;
    }
    
    // Function to check if a number is even
    function isEven(num) {
      return num % 2 === 0;
    }
    
    // Function to check if a number is odd
    function isOdd(num) {
      return num % 2 !== 0;
    }
    
    // Determine the filter function based on the criteria
    let filterFunction;
    if (criteria === 'even') {
      filterFunction = isEven;
    } else if (criteria === 'odd') {
      filterFunction = isOdd;
    } else {
      alert('Criteria must be "even" or "odd".');
      return;
    }
    
    // Filter the array using the chosen filter function
    const filteredArray = array.filter(filterFunction);
    
    // Display the result
    const resultDiv = document.getElementById('filter-result');
    resultDiv.innerHTML = `<p>Filtered array: [${filteredArray.join(', ')}]</p>`;
  }
  