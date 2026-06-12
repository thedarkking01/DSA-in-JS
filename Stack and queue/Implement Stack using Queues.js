//approach - 1 : use two queues

var MyStack = function() {
    this.q1=[]
    this.q2=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n=this.q1.length;
    for(let i=0;i<n-1;i++){
        let frontelem=this.q1.shift()
        this.q2.push(frontelem)
    }
    let ans=this.q1.shift()
    //exchange q1 and q2
    let tmp=this.q1
    this.q1=this.q2
    this.q2=tmp
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n=this.q1.length
    for(let i=0;i<n-1;i++){
        let frontelem=this.q1.shift()
        this.q2.push(frontelem)
    }
    let front=this.q1.shift()
    this.q2.push(front)
    let tmp=this.q1
    this.q1=this.q2
    this.q2=tmp
    return front
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// time complexity: O(n) for push, pop and top operations since we need to move all elements from q1 to q2 and back to q1
// space complexity: O(n) since we are using two queues to store the elements of the stack

// approach - 2 : use one queue

var MyStack = function() {
    this.q=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n=this.q.length
    for(let i=0;i<n-1;i++){
        this.q.push(this.q.shift())
    }
    return this.q.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n=this.q.length
    for(let i=0;i<n-1;i++){
        this.q.push(this.q.shift())
    }
    let front=this.q[0]
    this.q.push(this.q.shift())
    return front
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length===0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// time complexity: O(n) for push, pop and top operations since we need to move all elements from the queue to the back of the queue
// space complexity: O(n) since we are using one queue to store the elements of the stack