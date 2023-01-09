---
sidebar_position: 15
--- 

## Maps: 
A map is a collection of key-value pairs, where the keys are unique and the values can 
be of any type. Maps can be accessed using the key, and they are not ordered.

In Go, map syntax looks like this:

**var mapName map[keyType]valueType**

For example, to create a map of strings to integers:
```go
var stringToInt map[string]int
```
To create a map and initialize it with values, you can use the following syntax:
```go
var stringToInt = map[string]int{
"one": 1,
"two": 2,
"three": 3,
}
```
### Operations:

1. Accessing a value: map[key]
2. Setting the value of a key: map[key] = value
3. Iterating through the keys and values: for key, value := range map
4. Removing a key-value pair: delete(map, key)
