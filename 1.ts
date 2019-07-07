



class LinkedNode implements ILinkedNode {

    private parent: ILinkedList;

    constructor(parent: ILinkedList){
        this.parent = parent;
    }
    
    get index(): Number {
        return this.parent.indexOf(this);
    }

    get next(){
        let idx = this.parent.indexOf(this);
        if(idx < 0) return null;
        idx += 1;
        return this.parent.getNodeByIndex(idx + 1);
    }

    get previous(): ILinkedNode {
        let idx = this.parent.indexOf(this);
        if(idx < 0) return null;
        return this.parent.getNodeByIndex(idx - 1);
    }
    value: any;
}

class LinkedNodeList implements ILinkedList {

    private list: Array<ILinkedNode>;

    constructor(){
        this.list = [];
    }

    get first(): ILinkedNode {
        return this.getNodeByIndex(0);
    }
    
    get last(): ILinkedNode {
        return this.getNodeByIndex(0);
    }
    get count(): Number{
        return this.list.length;
    }

    append(node: ILinkedNode): ILinkedNode {
        return node;
    }
    add(value: any) : ILinkedNode {
        let node = new LinkedNode(this);
        node.value = value;
        return this.append(node);
    }
    indexOf(node: ILinkedNode): number {
        return this.list.indexOf(node);
    }
    getNodeByIndex(index: number){
        return index > -1 && index < this.list.length ? this.list[index] : null;
    }
}

let lnl: ILinkedList = new LinkedNodeList();
console.log(lnl.first)
