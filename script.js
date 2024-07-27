document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const cursor = document.getElementById('cursor');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
    });

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });
});
