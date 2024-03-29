//create page

export const DOM_CONTENT = () => {
    const container = document.getElementById('container');

    const createHeader = (() => {
        const header = document.createElement('header');
        header.className = 'header';
        header.innerHTML = `
        <div class="logo"><i class="fas fa-check-double"></i>ToDo List</div>
        <nav class="nav">
            <button class="btn collapse-menu"><i class="fas fa-bars"></i></button>
            <button class="btn home"><i class="fas fa-home"></i></button>
            <form autocomplete="off" class="filter-form">
                <i class="fas fa-search"></i>
                <input type="text" name="search" class="input-search" id="input-search" placeholder="search...">
            </form>
            <h2 id="section-title" class="section-title">Inbox</h2>
        </nav>
        <div class="info">
        <h3 class="level-title" id="level-title">Priority Level</h3>
        <div class="low">Low</div>
        <div class="medium">Medium</div>
        <div class="high">High</div>
        </div>
        `;
        container.appendChild(header)
    })();

    const createMenu = (() => {
        const main = document.createElement('main');
        main.innerHTML = `
        <section class="menu">
            <button class="btn active" id="inbox"><i class="fas fa-inbox"></i>Inbox</button>
            <button class="btn" id="today"><i class="fas fa-calendar-day"></i>Today</button>
            <button class="btn" id="week"><i class="fas fa-calendar-week"></i>Upcoming</button>
            <h3 class="project-section-title"><i class="fas fa-circle"></i>Projects</h3>
            <button class="btn" id="create-new-project"><i class="fas fa-plus"></i>Create new project</button>
            <div id="projects-list"></div>
        </section>
        <section class="task-container" id="task-container">
            <button class="btn createTask" id="add-task"><i class="fas fa-plus"></i>Add task</button>
            <div class="cards" id="cards"></div>
        </section>
       
        `;
        container.appendChild(main)
    })();

    const createFooter = (() => {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = `
        <p>Copyright © 2021 hvanotten</p>
        <a href="https://github.com/hvanotten" target="_blank">
        <i class="fab fa-github"></i>
        </a>
        `;
        container.appendChild(footer)
    })()
}