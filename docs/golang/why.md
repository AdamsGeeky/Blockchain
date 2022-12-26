---
sidebar_position: 2
---

#  why Go was developd ?
    the possible Question is you hear another programming language 
    - [x] what is the purpose ?
    - [x] why another programming language ?
    - [x] how is it better or diffrent ?

    **motivation** Evolution of infrastructure
    the infrastructure where application is Deploy  changed a lot in the last few year **multicore Processors** become common, And also using **Cloud infrastructure** which hundred or thousand of **Servers** which multiple prosesor to deploy application become universaly common,This make Cloud infrastructure **Scalable and Distributed** **Dynamic** **more Capacity**. 
    However most of the  *Existing Programming Languages* did not fully take Advantage of infrastructure improvement 
    so what am saying is that before you have app that **execute one task** at time in order
    # TODO diagram single task execuation
    but infrastructure improvement it possible you can 
    write application that **execute multiple task** at the same time in paralled to Do multiple things at once, this way make the application faster and more user frendly
    # TODO diagram task in parallad
    this is the concept of multi-threading, chellenges of multi-threadingg
        - multiple users editting the same document
        - muttiple user Booking at the same time
        this should work in a way that no double booking having this Concenpt is colled **Concurrency** is About dealing with lots of thing at once need to be handle by developer in code
        - Developers need to write a code to prevent conflicts when task run in parallel accessing shared data 
    And many Language Do have feature for implementation such application however the code will get complex
    # TODO diagram of Language with Build-in Mechanism
    # TODO diagram of Language no Build-in Mechanism
    # where Go excell
    **Go was designed to run on multiple cores and build to support concurrency**
    Concurrency in Go is **Cheap and Easy**
    we will explore and learn move in the  later
- [x] Go use Cases
    - For writting Performant application
    - Running on Scaled, distributed systems
- [x] How it compares to other programming ? 
    for Developing Go they attemp to combile both: 
        - simple and readble synteax of Dynamic type language like Python
        - Efficiency and safety of a lower-level, statically type language like c++
    - Server-side or Backend language 
        that is 
        - web application
        - Database services
        - Microservices  
    - simple syntax: Easy to learn, read and write code
    - Fast build time, start up and run
    - Require fewer resources
    - GO is Compiled Language
    - Consistent across diffrent os     