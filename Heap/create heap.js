class Minheap {
    constructor() {
        this.heap = [5,9,8]
    }
    getLeftChildIndex(i) {
        return (2 * i) + 1
    }
    getRightChildIndex(i) {
        return (2 * i) + 2
    }
    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }
    insert(val) {
        this.heap.push(val)
        let lastIndex = this.heap.length - 1
        this.heapifyUp(lastIndex)
    }

    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = this.getParentIndex(i)
            if (this.heap[i] < this.heap[parentIndex]) {
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
                i=parentIndex
            } else {
                break
            }
        }
    }

    extract() {
        if (this.heap.length === 0) {
            return null
        }
        let min = this.heap[0]
        let lastIndex = this.heap.length - 1;
        [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]]
        this.heap.pop()
        this.heapifyDown(0)
        return min
    }

    heapifyDown(i) {
        let left = this.getLeftChildIndex(i)
        let right = this.getRightChildIndex(i)
        let smallest = i
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }
        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
            this.heapifyDown(smallest)
        }
    }

    peek() {
        if (this.heap.length === 0) {
            return null
        }
        return this.heap[0]
    }
}

let heap = new Minheap()
heap.insert(1)
console.log(heap)
console.log(heap.extract())
console.log(heap)
console.log(heap.extract())