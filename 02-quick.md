# 2. Understanding quicksort
1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

- [ ] The pivot could have been 17, but could not have been 14
- [x] The pivot could have been either 14 or 17
- [ ] Neither 14 nor 17 could have been the pivot
- [ ] The pivot could have been 14, but could not have been 17

*Whether the partition was 14 or 17, all values to the right are lesser and the values to the right are greater; so either could have been the partition.**

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

- When using the last item on the list as a pivot
First: [10, 3, 9, **12**, 19, 14, 17, 16, 13, 15]
Second: [[3, **9**, 10,] 12, 19, 14, 17, 16, 13, 15] (sorting only those to the right of the original pivot)
- When using the first item on the list as a pivot
First: [13, 10, 3, 9, 19, 12, **14**, 16, 15, 17]
Second: [[10, 3, 9, **13**, 19,] 12, 14, 16, 15, 17]