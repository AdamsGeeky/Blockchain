---
sidebar_position: 4
---


# Basic Struture of a Go file
    - first program and file structure
```bash
go mod init **modele path**
```
- initialized a go.mod file which Discribes the **module**: name/module path **go** version
the module path is also the import path

- **Package**
All our code must belong to a package
the first ststement in Go file must be
```go
package main
```
the **main** is the standard name of the main application file

```go
func main(){

}
```
 is the entry point of our Go program
```go
import "github.com/AdamsGeeky/"
```
module path can correspond to a repository you plant to publish your module to (that is github/AdamsGeeky/)


## The basic structure of a Go file typically includes:

1. **Package declaration**: This specifies the package that the file belongs to.

2. **Import statements**: These import any necessary packages that are needed for the file.

3. **Constants**: Any constants that are used in the file are typically defined at the beginning.

4. **Variables**: Any variables that are used in the file are typically defined next.

5. **Functions**: Any functions that are used in the file are typically defined after the variables.

6. **Main function**: The main function is the entry point of a Go program and is typically the last thing defined in the file.



