Merge Sorted Collections (TypeScript)A TypeScript implementation of a 3-way sorted array merge function with unit tests using Jest, built without using any built-in .sort() functions.GitHub Repository: https://github.com/Nuttapong-Jinda/merge-sort-testProblem StatementImplement a function with the following interface that returns a single array sorted in ascending order:merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
collection_1: Already sorted from min(0) to max (ascending)collection_2: Already sorted from min(0) to max (ascending)collection_3: Already sorted from max to min(0) (descending)Note: Built-in sort functions are not allowed.Algorithm ApproachUses a 3-pointer linear merge in $O(n_1 + n_2 + n_3)$ time complexity and $O(n_1 + n_2 + n_3)$ space complexity without calling any built-in sort functions:Pointer i for collection_1 iterates forward from index 0 to length - 1 (min to max).Pointer j for collection_2 iterates forward from index 0 to length - 1 (min to max).Pointer k for collection_3 iterates backward from index length - 1 down to 0 (since collection_3 is sorted from max to min, its smallest element is at the end).At each step, the smallest value among the three active pointers is appended to the result array, and that pointer is advanced.Project Structuremerge-sort-test/
├── src/
│   ├── merge.ts          # Core 3-pointer merge implementation
│   └── index.ts          # Sample execution script
├── tests/
│   └── merge.test.ts     # Jest unit test suite
├── jest.config.js        # Jest configuration
├── package.json          # Project scripts and dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
How to Setup, Execute Code, and Run Unit TestsPrerequisitesNode.js (v18+ recommended) and npm1. Clone the repositorygit clone https://github.com/Nuttapong-Jinda/merge-sort-test.git
cd merge-sort-test
2. Install dependenciesnpm install
3. Execute the sample codenpm start
4. Run unit testsnpm test
