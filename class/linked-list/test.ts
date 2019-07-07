import LinkedList from './linked-list';

let list = new LinkedList();
list.add(1);
list.add('2');
list.add(null);

let n = list.first;

while(n){
    console.log(n.value);
    n = n.next;
}