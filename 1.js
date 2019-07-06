var LinkedNode = /** @class */ (function () {
    function LinkedNode(parent) {
        this.parent = parent;
    }
    Object.defineProperty(LinkedNode.prototype, "index", {
        get: function () {
            return this.parent.indexOf(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedNode.prototype, "next", {
        get: function () {
            var idx = this.parent.indexOf(this);
            if (idx < 0)
                return null;
            idx += 1;
            return this.parent.getNodeByIndex(idx + 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedNode.prototype, "previous", {
        get: function () {
            var idx = this.parent.indexOf(this);
            if (idx < 0)
                return null;
            return this.parent.getNodeByIndex(idx - 1);
        },
        enumerable: true,
        configurable: true
    });
    return LinkedNode;
}());
var LinkedNodeList = /** @class */ (function () {
    function LinkedNodeList() {
        this.list = [];
    }
    Object.defineProperty(LinkedNodeList.prototype, "first", {
        get: function () {
            return this.getNodeByIndex(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedNodeList.prototype, "last", {
        get: function () {
            return this.getNodeByIndex(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedNodeList.prototype, "count", {
        get: function () {
            return this.list.length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedNodeList.prototype.append = function (node) {
        return node;
    };
    LinkedNodeList.prototype.add = function (value) {
        var node = new LinkedNode(this);
        node.value = value;
        return this.append(node);
    };
    LinkedNodeList.prototype.indexOf = function (node) {
        return this.list.indexOf(node);
    };
    LinkedNodeList.prototype.getNodeByIndex = function (index) {
        return index > -1 && index < this.list.length ? this.list[index] : null;
    };
    return LinkedNodeList;
}());
var lnl = new LinkedNodeList();
console.log(lnl.first);
