---
sidebar_position: 5
---

# Varibles and Constats
    - - varibale scope
    - User Input/output 
        - formatted output
        - Getting and validating user input
- Pointers

In Go, a variable is a storage location that holds a value of a specific type. You can use variables to store values such as numbers, strings, and more.

## There are several ways to declare and initialize variables in Go:

1. Declaring variables with the "var" keyword:
```go
var name string = "John"
```

2. Short variable declarations using ":=":
```go
age := 25
```
3. Declaring multiple variables at once:
```go

var (
name string = "John"
age int = 30
married bool = false
)
// either way is accepted
var name, age string = "John", "25"
```
5. Assigning variables to the values of other variables:
```go
name2 := name
```
6. Declaring variables with their zero value:
```go
var name string
var age int
var married bool
```
The zero value of a string is an empty string (""), the zero value of an int is 0, and the zero value of a bool is false.

7. Declaring a variable with a pointer type:

```go
var g *int
```
8. Declaring a variable with a specific value and a pointer type:
```go
h := new(int)
*h = 10
```

# constants
Go does not have the concept of constants in the same way that other programming languages do. Instead, Go uses the keyword "const" to declare a value that cannot be changed after it is assigned. For example:
```go
const PI = 3.14
const name string = "John"
```
In Go, it is also possible to define multiple constants at once using the following syntax:
```go
const (
PI = 3.14
name string = "John"
age int = 35
)
```

## There are several constants in Go, including:

**math.MaxInt64:** The largest possible integer value that can be represented in Go (9,223,372,036,854,775,807).

**math.MaxFloat64:** The largest possible floating point value that can be represented in Go (1.7976931348623157e+308).

**math.Pi:** The mathematical constant pi, representing the ratio of a circle's circumference to its diameter (3.141592653589793).

**math.E:** The mathematical constant e, representing the base of the natural logarithm (2.718281828459045).

**math.Phi:** The mathematical constant phi, also known as the golden ratio (1.61803398874989).

**time.Duration.Max**: The maximum possible duration value that can be represented in Go (9,223,372,036,854,775,807 nanoseconds).

**time.Duration.Min**: The minimum possible duration value that can be represented in Go (-9,223,372,036,854,775,807 nanoseconds).

**math.Inf**: A value representing infinity.

**math.NaN**: A value representing not a number.

**math.MaxUint**: The largest possible unsigned integer value that can be represented in Go (18,446,744,073,709,551,615).

**time.Millisecond**: This constant represents the duration of one millisecond, which is equivalent to 1,000 microseconds.

**time.Microsecond**: This constant represents the duration of one microsecond, which is equivalent to 1,000 nanoseconds.

**time.Nanosecond**: This constant represents the duration of one nanosecond, which is equivalent to 1 billionth of a second.

**time.Second**: This constant represents the duration of one second, which is equivalent to 1,000 milliseconds.