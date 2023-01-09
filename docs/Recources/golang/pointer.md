---
sidebar_position: 7
---

# Pointer:

**Pointer** type in Go is a type that stores the memory address of a value. It is represented by the **" * "** symbol followed by the type of the value it points to. For example, a pointer to an integer would be represented as **"*int"**.

### There are several operations that can be performed with pointer types in Go:

Assigning a value to a pointer: This is done using the "&" symbol, which returns the memory address of a value. For example:
```go
intValue := 10
intPointer := &intValue
```
Dereferencing a pointer: This is done using the "*" symbol, which retrieves the value 
stored at the memory address pointed to by the pointer. For example:
```go
fmt.Println(*intPointer) // prints 10
```
Changing the value of a pointer: This is done by dereferencing the pointer and assigning a new value to it. For example:
```go
*intPointer = 15
fmt.Println(*intPointer) // prints 15
```
Comparing pointers: Pointers can be compared using the "==" and "!=" operators. For example:
```go
ptr1 := &intValue
ptr2 := &intValue

if ptr1 == ptr2 {
fmt.Println("Pointers point to the same memory location")
}
```
Pointer arithmetic: Pointers can be incremented or decremented using the "+" or "-" operators. This can be useful for iterating through arrays or slices. For example:
```go
slice := []int{1, 2, 3, 4, 5}
ptr := &slice[0]

for i := 0; i < len(slice); i++ {
fmt.Println(*ptr)
ptr++
}
```
Creating a new pointer: A pointer can be created using the "new" function, which allocates memory for a new value and returns a pointer to it. For example:
```go
ptr := new(int)
*ptr = 10
fmt.Println(*ptr) // prints 10
```
a type that holds the memory address of another value