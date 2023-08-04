let array=['aaaaa','bbbbbb','ccccccc','ddddd','eeeeee','fffffff']
let balaca=document.querySelector('.balaca')
let beraber=document.querySelector('.beraber')
let boyuk=document.querySelector('.boyuk')
for (let index = 0; index < array.length; index++) {
let p=document.createElement('p')

if (array[index].length<6) {
    p.innerText=array[index]
    balaca.append(p)
}   
else if (array[index].length==6) {
    p.innerText=array[index]
    beraber.append(p)
}
else{ 
    p.innerText=array[index]
    boyuk.append(p) 
}
}