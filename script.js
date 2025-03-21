   

    // <!-- dark mode start ///////////
    ///////////////////// -->
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
    });
    // dark mode end ////////////////////////

    // carousel START ////////
    document.addEventListener("DOMContentLoaded", function () {
        const items = document.querySelectorAll(".carousel-item");
        let index = 0;
        let interval;
    
        function showSlide(i) {
            items.forEach((item, idx) => {
                item.classList.toggle("hidden", idx !== i);
            });
        }
    
        function nextSlide() {
            index = (index + 1) % items.length;
            showSlide(index);
        }
    
        function prevSlide() {
            index = (index - 1 + items.length) % items.length;
            showSlide(index);
        }
    
        function startAutoSlide() {
            interval = setInterval(nextSlide, 3000);
        }
    
        function resetInterval() {
            clearInterval(interval);
            startAutoSlide();
        }
    
        // Add event listeners
        document.getElementById("next").addEventListener("click", function () {
            nextSlide();
            resetInterval();
        });
    
        document.getElementById("prev").addEventListener("click", function () {
            prevSlide();
            resetInterval();
        });
    
        // Start carousel
        showSlide(index);
        startAutoSlide();
    });
    
    
    // carousel START end/////
 