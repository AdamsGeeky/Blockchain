---
sidebar_position: 13
---

# Arrays: 
An array is a fixed-size collection of elements of the same type. The size of the array is set when it is created and cannot be changed. Arrays can be accessed using their index, and they are 0-indexed, meaning that the first element is at index 0.

syntax

1. **var arrayName = [length]type{value1, value2, value3, ...}**

2. **arrayName := [length]type{value1, value2, value3, ...}**
```go
var fruitArray = [3]string{"apple", "banana", "cherry"}

numbers := [5]int{1, 2, 3, 4, 5}
```
### Operations:

1. Accessing an element: arr[i]
2. Setting the value of an element: arr[i] = value
3. Iterating through the elements: for i, value := range arr
4. Appending elements to the end of the array
5. Inserting elements at a specific index
6. Removing elements at a specific index
7. Sorting the array
