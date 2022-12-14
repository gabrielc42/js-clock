import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


class digitalClock {
  constructor(element) {
    this.element = element;
    console.log(this.element);
  }

  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 42);
  }

  update() {
    const parts = this.getTimeParts();
    const minutesFormatted = parts.minutes.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minutesFormatted}:${parts.seconds}:${parts.milliseconds}`
    const amPm = parts.isAm ? "AM" : "PM";
    this.element.querySelector(".clock-time").textContent = timeFormatted;
    this.element.querySelector(".clock-AmPm").textContent = amPm;

  }

  getTimeParts() {
    const now = new Date();

    return {
      day: now.getUTCDay(),
      hour: now.getUTCHours() % 12 || 12,
      minutes: now.getUTCMinutes(),
      seconds: now.getUTCSeconds(),
      milliseconds: now.getUTCMilliseconds(),
      isAm: now.getHours() < 12
    };
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new digitalClock(clockElement);

clockObject.start();

ReactDOM.createRoot(document.getElementById('.clock'));