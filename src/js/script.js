class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.refs(selector);
    this.targetDate = targetDate;
    this.updateTime(targetDate);
    this.intervalId = setInterval((updateTime) => {
      this.updateTime(targetDate);
    }, 1000);
  }
  updateTime(targetDate) {
    targetDate > Date.now()
      ? this.updateClockface(targetDate - Date.now())
      : clearInterval(this.intervalId);
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
