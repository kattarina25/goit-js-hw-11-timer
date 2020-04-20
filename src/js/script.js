class CountdownTimer {
  intervalId = null;
  constructor({ selector, targetDate }) {
    if (this.intervalId) return;
    this.refs(selector);
    this.intervalId = setInterval(() => {
      targetDate > Date.now()
        ? this.updateClockface(targetDate - Date.now())
        : clearInterval(this.intervalId),
        (this.intervalId = null);
    }, 1000);
  }

  refs(selector) {
    this.selector = document.querySelector(selector).children;
    this.days = this.selector[0].firstElementChild;
    this.hours = this.selector[1].firstElementChild;
    this.minutes = this.selector[2].firstElementChild;
    this.seconds = this.selector[3].firstElementChild;
  }

  updateClockface(time) {
    this.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.minutes.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.seconds.textContent = this.pad(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021, 00:00:00'),
});
