(function fonts() {
    var header = document.querySelector('header');
    var body   = document.querySelector('body');
    var fontToggleButton = document.getElementById('uom_alt_font_button');

        function get_font() {
            var font;
            try { font = localStorage.getItem('uom-sphinx-font'); } catch (e) { }
            if (font === null || font === undefined) { return font = "font-roboto"; }
            else {return font;}
        }
    
        function set_font(previousFont, store = true) {
    
            if (previousFont === "font-roboto") {
                font = "font-opendyslexic";
            } else if (previousFont === "font-opendyslexic") {
                font = "font-roboto";
            } else 
            {   // something has gone wrong! Set roboto as default font
                font = "font-roboto";
            }

            if (font === "font-opendyslexic") {
                html.classList.remove('font-alt');
                body.classList.remove('font-alt');
            } else {
                html.classList.add('font-alt');
                body.classList.add('font-alt');
            }

            if (!store) { // seems to be the wrong way round! Not clear why this is
                try { localStorage.setItem('uom-sphinx-font', font); } catch (e) { }
            }
            
        }

        fontToggleButton.addEventListener('click', function () {
            var font = get_font();
            set_font(font, false);       
        });

})();




(function themeUOM() {
    var header = document.querySelector('header');
    var body   = document.querySelector('body');
    var themeToggleButton = document.getElementById('wagtail-theme');

        function get_theme() {
            var theme;
            try { theme = localStorage.getItem('uom-sphinx-theme'); } catch (e) { }
            if (theme === null || theme === undefined) { return theme = "theme-light"; }
            else {return theme;}
        }
    
        function set_theme(previousTheme, store = true) {
    
            if (previousTheme === "theme-light") {
                theme = "theme-dark";
            } else if (previousTheme === "theme-dark") {
                theme = "theme-light";
            } else 
            {   // something has gone wrong! Set roboto as default theme
                theme = "theme-light";
            }

            if (theme === "theme-dark") {
                html.classList.remove('theme-light');
                body.classList.remove('theme-light');
                html.classList.add('theme-dark');
                body.classList.add('theme-dark');
            } else {
                html.classList.remove('theme-dark');
                body.classList.remove('theme-dark');
                html.classList.add('theme-light');
                body.classList.add('theme-light');
            }

            if (!store) { // seems to be the wrong way round! Not clear why this is
                console.log(theme)
                try { localStorage.setItem('uom-sphinx-theme', theme); } catch (e) { }
            }
            
        }

        themeToggleButton.addEventListener('click', function () {
            var theme = get_theme();
            set_theme(theme, false);       
        });

})();