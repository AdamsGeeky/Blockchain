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
