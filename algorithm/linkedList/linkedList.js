/*
 * @Author: lin.cao
 * @Date: 2020-05-28 18:02:14
 * @LastEditTime: 2020-05-29 14:16:23
 * @LastEditors: lin.cao
 * @Description: 单链表
 * @FilePath: /leetcode/algorithm/linkedList/linkedList.js
 */
class Node {
    constructor(value) {
        this.value = value
        this.next= null
    }
}

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

    search(val) {
        let p = this.head
        if (!p) return false
        while (p) {
            if (p.value === val) return true
            p = p.next
        }
        return false
    }

    insert(position, val) {
        if (position < 0 || position > this.length) {
            console.warn(`position invalid: ${position}!`)
            return null
        }
        const node = new Node(val)
        if (position === 0) {
            node.next = this.head
            this.head = node
            this.length += 1
        } else {
            let i = 1
            let prev = this.head
            while (i < position) {
                prev = prev.next
                i += 1
            }
            node.next = prev.next
            prev.next = node
            this.length += 1
        }
    }

    remove(val) {
        let p = this.head
        let prev = this.head
        if (!p) return
        while (p) {
            if (p.value === val) {
                prev.next = p.next
                this.length -= 1
                return
            }
            prev = p
            p = p.next
        }
    }
}
