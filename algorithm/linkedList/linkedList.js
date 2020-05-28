/*
 * @Author: lin.cao
 * @Date: 2020-05-28 18:02:14
 * @LastEditTime: 2020-05-28 19:22:11
 * @LastEditors: lin.cao
 * @Description: 链表
 * @FilePath: /leetcode/algorithm/linkedList/linkedList.js
 */
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(val) {
        const node = new Node(val)
        let p = this.head
        if (!p) {
            this.head = node
        } else {
            while (p.next) {
                p = p.next
            }
            p.next = node
        }
        this.length += 1
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next= null
    }
}

const linkedList = new LinkedList()
linkedList.append(1)

console.log(linkedList)
