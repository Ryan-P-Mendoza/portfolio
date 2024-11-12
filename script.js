// Toggle side navigation on hamburger button click
document.getElementById("hamburgerBtn").addEventListener("click", function() {
    const sideNav = document.getElementById("sideNav");
    sideNav.classList.toggle("active"); // Toggle 'active' class to slide in/out
});
