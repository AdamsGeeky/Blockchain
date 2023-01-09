---
sidebar_position: 14
---

# Slices:
A slice is a variable-size collection of elements of the same type. Unlike arrays, slices can be resized and have a capacity, which is the number of elements that can be stored in the slice before it needs to be reallocated.

Slice syntax in Go is as follows:

slice[start:end]

Where 'start' is the index of the first element in the slice and 'end' is the index of the last element in the slice (not including the element at the index of 'end').

For example:
```go
mySlice := []int{1, 2, 3, 4, 5}
newSlice := mySlice[1:3] // newSlice = [2, 3]
```
Note that if 'start' is omitted, the slice starts at the beginning of the original slice. If 'end' is omitted, the slice ends at the end of the original slice.

For example:
```go
mySlice := []int{1, 2, 3, 4, 5}
newSlice := mySlice[:3] // newSlice = [1, 2, 3]
newSlice := mySlice[2:] // newSlice = [3, 4, 5]
```
### Operations:

1. Accessing an element: slice[i]
2. Setting the value of an element: slice[i] = value
3. Iterating through the elements: for i, value := range slice
4. Appending an element: slice = append(slice, value)
5. Removing an element: slice = append(slice[:i], slice[i+1:]...)
