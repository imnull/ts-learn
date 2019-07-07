import ILinkedList from './i-linked-list';
import ILinkedNode from './i-linked-node';
import LinkedNode from './linked-node';
import List from '../list/list';

class LinkedList extends List<ILinkedNode> implements ILinkedList {

    add(value: any): ILinkedNode {
        let item = new LinkedNode(value, this);
        return this.append(item);
    }

    get first(): ILinkedNode {
        return this.getByIndex(0);
    };
    
    get last(): ILinkedNode {
        return this.getByIndex(this.count - 1);
    };
}

export default LinkedList;