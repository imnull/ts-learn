import IList from './i-list';

class List<T> implements IList<T> {

    protected list: T[];
    constructor(){
        this.list = [];
    }

    get count(){
        return this.list.length;
    };
    
    append(item: T): T {
        if(item === null){
            return null;
        }
        this.list.push(item);
        return item;
    }
    indexOf(item: T): number {
        return this.list.indexOf(item);
    }
    getByIndex(index: number): T {
        if(index > -1 && index < this.count){
            return this.list[index];
        }
        return null;
    }
}

export default List;