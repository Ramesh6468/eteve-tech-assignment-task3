let List1 = ["Arjun", "Adwait", "Swapnil","Amit", "Vishal", "Adnan"]
let List2 = [ "Adwait","Laxman","Amit", "Adnan","Nitin","Gaurav"]
let List3 = []
for (let each of List1){
    if (!List2.includes(each)){
        List3.push(each)
    }
}
console.log(List3)

let List4 = []
for (let each of List2){
    if (!List1.includes(each)){
        List4.push(each)
    }
}
console.log(List4)

let List5 = []
for (let each of List1){
    if (List2.includes(each)){
        List5.push(each)
    }
}
console.log(List5)