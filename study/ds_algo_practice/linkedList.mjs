class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //연결리스트의 시작 노드를 가리키는 head
    this.head = null;
    //총 저장된 노드의 수를 저장하는 count
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }
    //매개변수 data를 Node의 생성자로 넘겨줘서 Node의 data를 설정해 줌
    const newNode = new Node(data);

    //리스트의 가장 앞부분에 삽입하는 경우
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      //삽입하려는 노드 바로 전까지 가기 위한 변수
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }
}

export { Node, LinkedList };
