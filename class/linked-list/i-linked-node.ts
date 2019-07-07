/**
 * 链表节点
 */
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
    index: number,
    /**
     * 挂载值
     */
    value: any,
}

export default ILinkedNode;