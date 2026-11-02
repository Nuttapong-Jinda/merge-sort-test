GitHub Repository URL: https://github.com/Nuttapong-Jinda/merge-sort-test

Algorithm Approach:
Uses a 3-pointer linear merge in O(n1 + n2 + n3) time complexity without using any built-in sort functions. Pointers for collection_1 and collection_2 iterate forward from index 0 to length - 1 (min to max), while the pointer for collection_3 iterates backward from index length - 1 down to 0 (max to min). At each step, the smallest value among the three active pointers is appended to the result array.

How to Setup, Execute Code, and Run Unit Tests:
1. Clone the repository:
   git clone https://github.com/Nuttapong-Jinda/merge-sort-test.git
   cd merge-sort-test

2. Install dependencies:
   npm install

3. Execute the sample code:
   npm start

4. Run unit tests:
   npm test