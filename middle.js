class WorldClock {
  constructor(timezone, container) {
    this.timezone = timezone;
    this.container = container;
    this.clockElement = document.createElement("div");
    this.clockElement.classList.add("clock-container");
    this.renderClock();
  }

  getCurrentDate() {
    const options = {
      timeZone: this.timezone,
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const currentDate = new Intl.DateTimeFormat("en-US", options).format(
      new Date()
    );
    return currentDate;
  }

  getCurrentDateTime() {
    const options = {
      timeZone: this.timezone,
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const currentDateTime = new Intl.DateTimeFormat("en-US", options).format(
      new Date()
    );
    return currentDateTime;
  }

  deleteClock() {
    this.clockElement.remove();
  }

  renderClock() {
    const timeButton = document.createElement("button");
    timeButton.innerText = "Show Time";
    const dateTimeButton = document.createElement("button");
    dateTimeButton.innerText = "Show Date & Time";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Clock";

    const timeDisplay = document.createElement("p");
    const dateTimeDisplay = document.createElement("p");

    timeButton.addEventListener("click", () => {
      timeDisplay.innerText = `Time: ${this.getCurrentDateTime()}`;
    });

    dateTimeButton.addEventListener("click", () => {
      dateTimeDisplay.innerText = `Date & Time: ${this.getCurrentDateTime()}`;
    });

    deleteButton.addEventListener("click", () => {
      this.deleteClock();
    });

    this.clockElement.appendChild(timeButton);
    this.clockElement.appendChild(dateTimeButton);
    this.clockElement.appendChild(deleteButton);
    this.clockElement.appendChild(timeDisplay);
    this.clockElement.appendChild(dateTimeDisplay);

    this.container.appendChild(this.clockElement);
  }
}

document.getElementById("add-clock").addEventListener("click", () => {
  const timezone = document.getElementById("timezone-input").value.trim();

  if (!timezone) {
    alert("Please enter a valid time zone");
    return;
  }

  const clocksContainer = document.getElementById("clocks");
  new WorldClock(timezone, clocksContainer);

  document.getElementById("timezone-input").value = "";
});
