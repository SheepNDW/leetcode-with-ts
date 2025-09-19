import { PriorityQueue } from '@datastructures-js/priority-queue';

function compare(a: { taskId: number; priority: number }, b: { taskId: number; priority: number }) {
  if (a.priority === b.priority) {
    return b.taskId - a.taskId;
  }
  return b.priority - a.priority;
}

class TaskManager {
  private taskToPriority = new Map<number, { priority: number; userId: number }>();
  private taskList = new PriorityQueue(compare);

  constructor(tasks: number[][]) {
    for (const [userId, taskId, priority] of tasks) {
      this.add(userId, taskId, priority);
    }
  }

  add(userId: number, taskId: number, priority: number): void {
    this.taskToPriority.set(taskId, { userId, priority });
    this.taskList.push({ taskId, priority });
  }

  edit(taskId: number, newPriority: number): void {
    const curTask = this.taskToPriority.get(taskId)!;
    curTask.priority = newPriority;
    this.taskList.push({ taskId, priority: curTask.priority });
  }

  rmv(taskId: number): void {
    this.taskToPriority.delete(taskId);
  }

  execTop(): number {
    while (!this.taskList.isEmpty()) {
      const top = this.taskList.pop()!;
      const target = this.taskToPriority.get(top.taskId);

      if (target !== undefined) {
        if (target.priority === top.priority) {
          this.taskToPriority.delete(top.taskId);
          return target.userId;
        }
      }
    }

    return -1;
  }
}

export { TaskManager };

/**
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */
