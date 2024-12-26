(function() {
    const currentTimeElement = document.getElementById('currentTime');

    function updateTime() {
        const now = new Date();
        currentTimeElement.textContent = now.toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }

    updateTime();
    setInterval(updateTime, 1000);
})();