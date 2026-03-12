// Custom Cursor Logic
const cursor = document.getElementById('cursor');
const hoverTargets = document.querySelectorAll('.hover-target, a, button');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    target.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

// Horizontal Scroll for Presentation Track
const presentationContainer = document.querySelector('.presentation-container');

if (presentationContainer) {
    presentationContainer.addEventListener('wheel', (evt) => {
        // Only override vertical scroll if the container can actually scroll horizontally
        if (presentationContainer.scrollWidth > presentationContainer.clientWidth) {
            evt.preventDefault();
            presentationContainer.scrollLeft += evt.deltaY;
        }
    });
}

function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the content
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Escape key to close modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});