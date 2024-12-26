(function() {
    document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const searchEngine = document.getElementById('searchEngine').value;
        const searchQuery = document.getElementById('searchQuery').value.trim();
        if (searchQuery) {
            const searchUrl = searchEngine + encodeURIComponent(searchQuery);
            window.open(searchUrl, '_blank', 'noopener,noreferrer');
        }
    });

    // 添加快捷键支持
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            document.getElementById('searchQuery').focus();
        } else if (e.key === 'Enter' && e.ctrlKey && document.activeElement === document.getElementById('searchQuery')) {
            e.preventDefault();
            const searchEngine = document.getElementById('searchEngine').value;
            const searchQuery = document.getElementById('searchQuery').value.trim();
            if (searchQuery) {
                const searchUrl = searchEngine + encodeURIComponent(searchQuery);
                window.open(searchUrl, '_blank', 'noopener,noreferrer');
            }
        }
    });

    const searchEngine = document.getElementById('searchEngine');
    searchEngine.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            const options = this.options;
            const currentIndex = this.selectedIndex;
            let newIndex;

            if (e.key === 'ArrowUp') {
                newIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
            } else {
                newIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
            }

            this.selectedIndex = newIndex;
            this.dispatchEvent(new Event('change'));
        }
    });
})();