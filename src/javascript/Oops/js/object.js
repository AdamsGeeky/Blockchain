const btnObj = document.getElementById("btn");
const btnContent = document.getElementById("btnContent")


btnObj.addEventListener('click', ()=>{
    btnContent.innerHTML = vocabulary.getSummary()
})
const vocabulary = {
    term: "Blockchain",
    definition: "is a Distributed lager of transaction connected together using hash function",
    getSummary: function () {
        return `${this.term}: ${this.definition}`
    }
}

console.log(vocabulary.getSummary());