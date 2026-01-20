// Counter management - Frontend display only (no reset controls)
class ExtortionCounter {
    constructor() {
        this.counterElement = document.getElementById('dayCounter');
        this.init();
    }

    init() {
        // Load saved data from localStorage
        this.loadData();

        // Update the counter
        this.updateCounter();

        // Check for new day every minute
        setInterval(() => this.checkForNewDay(), 60000);
    }

    loadData() {
        const savedData = localStorage.getItem('extortionCounter');
        if (savedData) {
            const data = JSON.parse(savedData);
            this.lastResetDate = new Date(data.lastResetDate);
        } else {
            // First time initialization - set to today at midnight PST
            this.lastResetDate = this.getTodayMidnightPST();
            this.saveData();
        }
    }

    saveData() {
        const data = {
            lastResetDate: this.lastResetDate.toISOString()
        };
        localStorage.setItem('extortionCounter', JSON.stringify(data));
    }

    getTodayMidnightPST() {
        // Get current time in PST
        const now = new Date();
        const pstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
        pstTime.setHours(0, 0, 0, 0);
        return pstTime;
    }

    calculateDaysSinceReset() {
        // Calculate days in PST timezone
        const nowPST = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
        nowPST.setHours(0, 0, 0, 0);

        const resetDate = new Date(this.lastResetDate);
        resetDate.setHours(0, 0, 0, 0);

        const diffTime = nowPST - resetDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        return Math.max(0, diffDays);
    }

    updateCounter() {
        const days = this.calculateDaysSinceReset();
        this.counterElement.textContent = days;
    }

    checkForNewDay() {
        // Update display in case day changed
        this.updateCounter();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new ExtortionCounter();
});
