interface IList<T> {
    /**
     * 元素数量
     */
    count: number;
    /**
     * 添加元素
     * @param item 添加的元素
     */
    append(item: T): T;
    /**
     * 查找元素索引位置
     * @param item 查找元素
     */
    indexOf(item: T): number;
    /**
     * 获取索引位置元素
     * @param index 索引值
     */
    getByIndex(index: number): T;
}

export default IList;