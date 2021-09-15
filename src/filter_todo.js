import { toDate, isToday, isThisWeek, subDays, compareAsc } from 'date-fns'

const thisWeek = () => {
    const tasks = document.querySelectorAll('#cards .card .task-date');
    Array.from(tasks).forEach(task => {
        task.parentElement.parentElement.style.display = "flex"

        let result = isThisWeek(new Date(task.textContent))

        if (!result) {
            task.parentElement.parentElement.style.display = "none"
        }

    });

}

const todayTask = () => {
    const task = document.querySelectorAll('#cards .card .task-date');
    Array.from(tasks).forEach(task => {
        let result = isToday(new Date(task.textContent))
        if (!result) {
            task.parentElement.parentElement.style.display = "none"
        }
    });
}

const showAll = () => {
    const tasks = document.querySelectorAll('#cards .card');
    Array.from(tasks).forEach(task => task.style.display = 'flex');
}

const filterByProject = (target) => {
    const tasks = document.querySelectorAll('#cards .card .task-project');
    Array.from(tasks).forEach(task => {
        task.style.display = 'flex'
        if (!target.textContent.includes(task.firstElementChild.textContent)) {
            task.parentElement.parentElement.style.display = 'none';
        }
    });
}

const searchBar = (key) => {
    const tasks = document.querySelectorAll('#cards .card .task-title');
    Array.from(tasks).forEach(task => {
        if (!task.textContent.toLowerCase().includes(key.toLowerCase())) {
            task.parentElement.parentElement.style.display = 'none';
        } else {
            task.parentElement.parentElement.style.display = 'flex';
        }
    });
}

export { thisWeek, showAll, todayTask, filterByProject, searchBar }