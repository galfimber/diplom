const timer = (deadline) => {
  const timerDays = document.querySelectorAll(".timer-days");
  const timerHours = document.querySelectorAll(".timer-hours");
  const timerMinutes = document.querySelectorAll(".timer-minutes");
  const timerSecond = document.querySelectorAll(".timer-seconds");

  let idInterval;

  const getTimeRemainig = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const correctTime = (time) => {
    for (let key in time) {
      if (time[key] !== "timeRemaining") {
        if (time[key] < 10) {
          time[key] = "0" + time[key];
        }
      }
    }
  };

  const updateClock = () => {
    let getTime = getTimeRemainig();

    if (getTime.timeRemaining <= 0) {
      clearInterval(idInterval);
    } else {
      if (
        getTime.days < 10 ||
        getTime.hours < 10 ||
        getTime.minutes < 10 ||
        getTime.seconds < 10
      ) {
        correctTime(getTime);
      }

      timerDays.forEach((timer) => {
        timer.textContent = getTime.days;
      });
      timerHours.forEach((timer) => {
        timer.textContent = getTime.hours;
      });
      timerMinutes.forEach((timer) => {
        timer.textContent = getTime.minutes;
      });
      timerSecond.forEach((timer) => {
        timer.textContent = getTime.seconds;
      });
      //timerDays.textContent = getTime.hours;
      //timerHours.textContent = getTime.hours;
      //timerMinutes.textContent = getTime.minutes;
      //timerSecond.textContent = getTime.seconds;
    }
  };
  updateClock();
  idInterval = setInterval(updateClock, 1000);
};
export default timer;
