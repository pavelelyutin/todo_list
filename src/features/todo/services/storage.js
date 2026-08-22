const TASKS_KEY = 'tasks';

export function getTasks() {
  const savedTasks = localStorage.getItem(TASKS_KEY);

  if (!savedTasks) {
    return
  }

  return JSON.parse(savedTasks)
}

export function savedTasks(tasks) {
  localStorage.setItem(
    TASKS_KEY,
    JSON.stringify(tasks)
  )
}