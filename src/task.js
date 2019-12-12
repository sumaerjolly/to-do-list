class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.complete = false;
    this.id = Date.now().toString();
  }
}
export default Task;
