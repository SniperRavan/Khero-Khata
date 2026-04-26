const routes = {
    home: `
    <header class="page-header"><h1>Good Morning, Sniper!</h1></header>
    <div class="home-grid"></div>
    `,
    projects: `
    <header class="page-header"><h1>Projects</h1></header>
    <div class="projects-grid">
        <article class="card"><h3>Website Redsign</h3></article>
        <article class="card"><h3>Mobile App</h3></article>
    </div>
    `,
    team: `
        <header class="page-header"><h1>My Team</h1></header>
        <div class="card"><h3>Team Members List...</h3></div>
    `
};

function navigate(pageId) {
    const container = document.getElementById('app-container');

    // Update the HTML content
    container.innerHTML = routes[pageId];

    // Update Active sidebar state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('data-page') === pageId) link.classList.add('active');
    });

    // Re-initalize page-specific logic
    if (pageId === 'home') {
        
    }
}

// Listen for sidebar clicks
document.addEventListener('click', e => {
    const link = e.target.closest('.nav-link');
    if (link) {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        navigate(pageId);
    }
});