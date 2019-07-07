export default interface IList<T> {
    /**
     * 查找元素索引位置
     * @param item 查找元素
     */
    indexOf(item: T): number;

    findIndex(fn: Function): number;
    some(fn: Function): boolean;
    every(fn: Function): boolean;
    forEach(fn: Function): void;
    map(fn: Function): T[];

    /**
     * 元素数量
     */
    count: number;

    find(fn: Function): T;
    /**
     * 添加元素
     * @param item 添加的元素
     */
    append(item: T): T;
    remove(item: T): boolean;
    
    splice(startIndex: number, size: number): T[];
    /**
     * 查找元素索引位置
     * @param item 查找元素
     */
    getByIndex(index: number): T;

    slice(): T[];
    slice(startIndex: number): T[];
    slice(startIndex: number, endIndex: number): T[];

    sub(): IList<T>;
    sub(startIndex: number): IList<T>;
    sub(startIndex: number, endIndex: number): IList<T>;
}
