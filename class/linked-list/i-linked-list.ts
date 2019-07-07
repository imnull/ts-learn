import IList from '../list/interface';
import IListNode from './i-linked-node';

interface ILinkedList extends IList<IListNode> {
    /**
     * 第一个节点
     */
    first: IListNode;
    /**
     * 最后一个节点
     */
    last: IListNode;
    /**
     * 添加值
     */
    add(value: any): IListNode;
}

export default ILinkedList;