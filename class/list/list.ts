import IList from './interface';

export default class List<T> implements IList<T> {

    private readonly __list__: Array<T>;
    constructor(){
        this.__list__ = [];
    }

    get count(){
        return this.__list__.length;
    }
    map(fn: Function): any[] {
        return this.__list__.map((...args) => fn(...args))
    }
    some(fn: Function): boolean {
        return this.__list__.some((...args) => fn(...args));
    }
    every(fn: Function): boolean {
        return this.__list__.every((...args) => fn(...args));
    }
    forEach(fn: Function): void {
        this.__list__.forEach((...args) => fn(...args));
    }
    
    indexOf(item: T): number {
        return this.__list__.indexOf(item);
    }
    splice(startIndex: number, size: number): any[] {
        return this.__list__.splice(startIndex, size);
    }
    getByIndex(index: number): T {
        if(index > -1 && index < this.count){
            return this.__list__[index];
        }
        return null;
    }
    findIndex(fn: Function): number {
        let idx = -1;
        this.__list__.some((value: T, index: number, obj: T[]) => {
            if(fn(value, index, obj)){
                idx = index;
                return true;
            }
        })
        return -1;
        // return this.__list__.findIndex((...args) => fn(...args));
    }
    find(fn: Function): T {
        return this.getByIndex(this.findIndex(fn));
    }
    append(item: T): T {
        this.remove(item);
        this.__list__.push(item);
        return item;
    }
    remove(item: T): boolean {
        let idx = this.indexOf(item);
        if(idx > -1){
            this.splice(idx, 1);
            return true;
        }
        return false;
    }
    slice(): T[];
    slice(startIndex: number): T[];
    slice(startIndex: number, endIndex: number): T[];
    slice(startIndex?: any, endIndex?: any) {
        return this.__list__.slice(startIndex, endIndex);
    }
    sub(): IList<T>;
    sub(startIndex: number): IList<T>;
    sub(startIndex: number, endIndex: number): IList<T>;
    sub(startIndex?: any, endIndex?: any) {
        let list = new List<T>();
        this.slice(startIndex, endIndex)
            .forEach(item => list.append(item));
        return list;
    }
}