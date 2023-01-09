---
sidebar_position: 6
---
# Data Types

Go has several built-in data types, including:

## Boolean:
a type that can hold either true or false values
## Integer: 

a type that can hold whole numbers, such as -1, 0, 1, 2, etc.

## In Go, there are several integer types:

**int:** This is the default integer type in Go. It is the same size as a machine word on the host system, which means it can be either 32-bit or 64-bit depending on the system.

**int8**: This is an 8-bit integer type, which can hold values from -128 to 127.

**int16**: This is a 16-bit integer type, which can hold values from -32768 to 32767.

**int32**: This is a 32-bit integer type, which can hold values from -2147483648 to 2147483647.

**int64**: This is a 64-bit integer type, which can hold values from -9223372036854775808 to 9223372036854775807.

**uint**: This is an unsigned integer type, which means it can only hold positive values. It is the same size as a machine word on the host system.

**uint8**: This is an 8-bit unsigned integer type, which can hold values from 0 to 255.

**uint16**: This is a 16-bit unsigned integer type, which can hold values from 0 to 65535.

**uint32**: This is a 32-bit unsigned integer type, which can hold values from 0 to 4294967295.

**uint64**: This is a 64-bit unsigned integer type, which can hold values from 0 to 18446744073709551615.

**There are several operations that can be performed on integers in Go**:

**Addition**: This is performed using the "+" operator. For example: a + b

**Subtraction**: This is performed using the "-" operator. For example: a - b

**Multiplication**: This is performed using the "*" operator. For example: a * b

**Division**: This is performed using the "/" operator. For example: a / b

**Modulus:** This is performed using the "%" operator. For example: a % b

**Increment:** This is performed using the "++" operator. For example: a++

**Decrement:** This is performed using the "--" operator. For example: a--

**Bitwise operations**: 

These include "&" (and), "|" (or), "^" (xor), "&^" (and not), "<<" (left shift), and ">>" (right shift). These operations are performed on the binary representation of integers.

It is important to note that Go does not support automatic type coercion, so you must ensure that the operands of an operation are of the same type. You can also use type conversions to convert an integer type to another integer type.


## Float:
a type that can hold decimal numbers, such as 1.5, 2.7, etc.

The float type in Go represents a floating point number, which is a number with a decimal point. There are two types of float in Go: **float32** and **float64**. Float32 has a precision of about 6 digits, while float64 has a precision of about 15 digits.

Operations that can be performed on floats include addition, subtraction, multiplication, division, and modulus. For example:
```go
x := 5.5
y := 3.2

sum := x + y // sum is 8.7
difference := x - y // difference is 2.3
product := x * y // product is 17.6
quotient := x / y // quotient is 1.71875
remainder := x % y // remainder is 1.9
```
It is also possible to use comparison operators, such as ==, !=, >, >=, <, and <=, to compare float values.
```go
x := 5.5
y := 3.2

if x > y {
fmt.Println("x is greater than y")
} else {
fmt.Println("y is greater than x")
}
```
// Output: x is greater than y






## String:

a type that can hold a sequence of characters, such as "hello", "world", etc.

In Go, a string is a sequence of characters, represented as a type called "string". Strings can be declared using either single or double quotes, like this:
```go
var s1 string = "Hello, world!"
var s2 string = 'Hello, world!'
```
### There are several operations that can be performed on strings in Go:

Concatenation: You can concatenate two or more strings using the "+" operator.

```go
s1 := "Hello"
s2 := "World"
s3 := s1 + s2 // s3 will be "HelloWorld"
```

Substrings: You can get a substring of a string by using the "s[start:end]" syntax, where start is the index of the first character in the substring and end is the index of the last character.

```go
s := "Hello World"
substr := s[5:10] // substr will be "World"

```

Length: You can get the length of a string using the "len()" function.

```go
s := "Hello World"
length := len(s) // length will be 11
```
**Comparison**: You can compare two strings using the "==" operator.
```go
s1 := "Hello"
s2 := "Hello"
if s1 == s2 {
  fmt.Println("The strings are equal")
} else {
  fmt.Println("The strings are not equal")
}
```

Conversion: You can convert a string to a different type, such as an integer or float, using the appropriate conversion function, such as 
```go
a := "123"
b, _ := strconv.ParseInt(a, 10, 64) // b is now an int with the value 123
c := strconv.ParseFloat(a, 64) // c is now a float64 with the value 123.0
```
Searching: You can search for a specific character or substring within a string using the function.
```go
strings.Index()  
```
Replacing: You can replace a specific character or substring within a string using the "strings.Replace()" function.

Trimming: The "trim" function removes leading and trailing spaces from a string.

Splitting: You can split a string into an array of strings using the "strings.Split()" function.

In Go, there are several data structures available for storing and manipulating data. These include:


# Struct

A struct is a user-defined type that consists of a collection of fields. Structs can be used to define custom data structures and can contain fields of any type.
its a composite data type that groups together related data fields.

### Operations:

1. Accessing a field: struct.field
2. Setting the value of a field: struct.field = value
3. Iterating through the fields: for _, field := range struct

 In Go, you can define a struct using the following syntax:
```go
type Point struct {
X int
Y int
}
```
This creates a struct with two fields: X and Y, both of which are integers. You can create an instance of the struct using the following syntax:
```go
p := Point{X: 1, Y: 2}
```
You can also initialize a struct with a set of values using the following syntax:
```go
p := Point{1, 2}
```
## Data structure type