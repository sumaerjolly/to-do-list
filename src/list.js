class List {
  constructor(title) {
    this.id = Date.now().toString();
    this.title = title;
    this.tasks = [];
  }
}

export default List;
