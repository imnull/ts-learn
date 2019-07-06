interface ILinkedNode {
    /**
     * 下一个节点
     */
    next: ILinkedNode,
    /**
     * 上一个节点
     */
    previous: ILinkedNode,
    /**
     * 所在索引位置
     */
    index: Number,
    /**
     * 挂载值
     */
    value: any,
}

interface ILinkedNodeList {
    /**
     * 第一个节点
     */
    first: ILinkedNode;
    /**
     * 最后一个节点
     */
    last: ILinkedNode;

    /**
     * 索引位置
     */
    indexOf: (node: ILinkedNode) => number;
    /**
     * 获取节点
     */
    getNodeByIndex: (index: number) => ILinkedNode;
    /**
     * 添加节点
     */
    append: (node: ILinkedNode) => ILinkedNode;
    /**
     * 添加值
     */
    add: (value: any) => ILinkedNode;
    /**
     * 节点数量
     */
    count: Number;
}

class LinkedNode implements ILinkedNode {

    private parent: ILinkedNodeList;

    constructor(parent: ILinkedNodeList){
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

class LinkedNodeList implements ILinkedNodeList {

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

let lnl: ILinkedNodeList = new LinkedNodeList();
console.log(lnl.first)
