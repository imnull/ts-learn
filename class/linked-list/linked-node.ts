import ILinkedNode from './i-linked-node';
import ILinkedList from './i-linked-list';

class LinkedNode implements ILinkedNode {

    private _value: any = null;
    private _parent: ILinkedList = null;

    constructor(value: any, parent: ILinkedList){
        this._value = value;
        this._parent = parent;
    }

    get next(){
        return this._parent.getByIndex(this.index + 1);
    }
    get previous(){
        return this._parent.getByIndex(this.index - 1);
    }

    get index(){
        return this._parent.indexOf(this)
    }

    get value() {
        return this._value
    };
}

export default LinkedNode;