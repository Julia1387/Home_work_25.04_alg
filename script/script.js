// 1. Реализовать методы в классе MyLinkedList.
// pushToIndex(int index, int value)
// removeFirst()
// removeLast()
// removeAtIndex(int index)
// Примеры классов на Java и JavaScript лежат в https://github.com/dem4nd/tel-ran/tree/main/algorithms/linkedlist

class Link {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
  }

  pushToHead(value) {
    let nextHead = new Link(value, this.head);
    this.head = nextHead;
  }
  pushToTail(value) {
    if (this.head == null) {
      this.pushToHead(value);
    } else {
      let curLink = this.head;
      while (curLink.next != null) {
        curLink = curLink.next;
      }
      curLink.next = new Link(value);
    }
  }

  pushToIndex(index, value) {
    if (index < 0) {
      console.log("Please enter a valid index.");
      return;
    }

    if (index === 0) {
      this.pushToHead(value);
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    if (count === index) {
      prev.next = new Link(value, current);
    } else {
      console.log("Index out of bounds.");
    }
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    } else {
      console.log("List is empty. Cannot remove first element.");
    }
  }

  removeLast() {
    if (!this.head) {
      console.log("List is empty. Cannot remove last element.");
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
  }

  removeAtIndex(index) {
    if (index < 0) {
      console.log("Please enter a valid index.");
      return;
    }

    if (!this.head) {
      console.log("List is empty. Cannot remove element.");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;
    while (current && count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    if (count === index) {
      prev.next = current.next;
    } else {
      console.log("Index out of bounds.");
    }
  }

  getByIndex(index) {
    let curLink = this.head;

    for (let i = 0; i < index; i++) {
      curLink = curLink.next;
    }

    return curLink.value;
  }

  getIndexByValue(value) {
    let index = 0;
    let curLink = this.head;

    while (curLink != null) {
      if (curLink.value === value) {
        return index;
      }
      curLink = curLink.next;
      index++;
    }

    // если не нашли
    return -1;
  }

  size() {
    let i = 0;
    let curLink = this.head;
    while (curLink != null) {
      i++;
      curLink = curLink.next;
    }
    return i;
  }

  print() {
    let result = "";
    if (this.head == null) {
      result = "<empty>";
    } else {
      result = "|-> " + this.head.value.toString();
      let current = this.head.next;
      while (current != null) {
        result = result + ", " + current.value.toString();
        current = current.next;
      }
    }
    return result;
  }
}
function main() {
  let list = new MyLinkedList();

  console.log(list.print());

  list.pushToHead(10);
  list.pushToHead(20);
  list.pushToHead(30);
  list.pushToTail(40);

  console.log(list.print());
  console.log("15 at: " + list.getIndexByValue(15).toString());
  console.log("20 at: " + list.getIndexByValue(20).toString());
}

main();

// Задача 2.
// Написать метод класса MyLinkedList (придумать алгоритм), который определяет, есть ли в односвязном спуске петля. Нельзя использовать дополнительные коллекции.

// boolean hasLoop() { … }

class Link {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
  }
  pushToIndex(index, value) {}

  removeFirst() {}

  removeLast() {}

  removeAtIndex(index) {}

  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true; // Найдена петля
      }
    }

    return false; // Петли нет
  }
}

const list = new MyLinkedList();
list.pushToIndex(0, 10);
list.pushToIndex(1, 20);
list.pushToIndex(2, 30);
list.pushToIndex(3, 40);

list.head.next.next.next.next = list.head;

console.log("Has loop?", list.hasLoop());

// Задача 3.

// Написать метод класса MyLinkedList (придумать алгоритм), который находит значение К-ого элемента с конца в односвязном списке. Алгоритм должен проходить список один раз.

// int getValueFromTail(int positionFromTail) { … }
class Link {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class MyLinkedList {
  constructor() {
    this.head = null;
  }
  pushToIndex(index, value) {}
  removeFirst() {}
  removeLast() {}

  removeAtIndex(index) {}
  getValueFromTail(positionFromTail) {
    if (positionFromTail < 0) {
      console.log("Please enter a valid position from tail.");
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < positionFromTail; i++) {
      if (fast === null) {
        console.log("Position from tail exceeds list length.");
        return null;
      }
      fast = fast.next;
    }

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }
}

const list = new MyLinkedList();
list.pushToIndex(0, 10);
list.pushToIndex(1, 20);
list.pushToIndex(2, 30);
list.pushToIndex(3, 40);

console.log("Value at 2nd position from tail:", list.getValueFromTail(2));
console.log("Value at 5th position from tail:", list.getValueFromTail(5));
