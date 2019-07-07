import List from './list';

let list = new List<number>();

list.append(1);
list.append(2);

console.log(list)
console.log(list.count)
console.log(list.sub(1))
console.log(list)

class G<T> extends Array<T> {

    dosth(a:T){
        this.push(a);
    }
}

let a = new G<number>()
a.push(1);
a.dosth(2222)

console.log(a)
