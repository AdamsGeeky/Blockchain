---
sidebar_position: 8
---

# user input/output
The fmt package in Go provides a variety of functions for formatting and printing text. It is a standard library package, so you can use it without installing any additional dependencies.

Here are some examples of how you might use the fmt package:
```go
package main

import "fmt"

func main() {
    // Print a string to the console
    fmt.Println("Hello, World!")

    // Print an integer value
    fmt.Println(42)

    // Print a floating point value with a specific number of decimal places
    fmt.Printf("%.2f", 3.1415926535)

    // Print a value with a specific width and precision
    fmt.Printf("%10.2f", 3.1415926535)
}
```
Some of the functions provided by the fmt package include:

Printf: This function formats and prints values to the console using a format string.
Sprintf: This function formats and returns a string instead of printing to the console.
Fprintf: This function formats and prints values to a specified io.Writer interface.
Scanf: This function reads values from the console and stores them in variables using a format string.
Fscanf: This function reads values from a specified io.Reader interface and stores them in variables using a format string.

Examples of using these functions:

Printf:
```go
fmt.Printf("Hello, %s! You are %d years old.\n", name, age)
```
Sprintf:
```go
message := fmt.Sprintf("Hello, %s! You are %d years old.\n", name, age)
```
Fprintf:
```go
f, err := os.Create("output.txt")
if err != nil {
panic(err)
}
defer f.Close()
fmt.Fprintf(f, "Hello, %s! You are %d years old.\n", name, age)
```
Scanf:
```go
fmt.Print("Enter your name: ")
var name string
fmt.Scanf("%s", &name)
```
Fscanf:
```go
f, err := os.Open("input.txt")
if err != nil {
panic(err)
}
defer f.Close()
var name string
fmt.Fscanf(f, "%s", &name)
```

For more information, you can refer to the documentation for the [fmt package](https://golang.org/pkg/fmt/)

```

In Go, input is typically taken from the standard input stream (stdin) using the fmt package's Scan function. The input is then stored in a variable for further processing.

For example:
```go
package main

import (
"fmt"
)

func main() {
var input string
fmt.Scan(&input) // reads input from stdin and stores it in the variable "input"
fmt.Println("You entered:", input)
}
```
Output is typically done using the fmt package's Print or Println functions, which write to the standard output stream (stdout).

For example:
```go
package main

import (
"fmt"
)

func main() {
fmt.Println("This is the output")
}
```



