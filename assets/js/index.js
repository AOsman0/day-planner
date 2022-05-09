const workingHours = [
  { time: "9:00", key: 9 },
  { time: "10:00", key: 10 },
  { time: "11:00", key: 11 },
  { time: "12:00", key: 12 },
  { time: "13:00", key: 13 },
  { time: "14:00", key: 14 },
  { time: "15:00", key: 15 },
  { time: "16:00", key: 16 },
  { time: "17:00", key: 17 },
];

const currentTime = () => {
  const momentTime = moment().format("MMMM Do YYYY");
  $("#currentDay").text(momentTime);
};

const handleSubmit = (event) => {
  // add condition that checks if what we have clicked on is a button
  // if that is true we want to readfrom local storage
  //declare variable that has value of text area
  //we need to know time related to save button clicked on
  // then we want to write to local storage
};

const renderTimeBlocks = () => {
  const renderTimeBlock = (workingHour) => {
    const colour = getClassName(workingHour.key);
    const timeBlock = `  <div id='${workingHour.key}' class="row time-block ${colour}">
  <div class="col-md-1">${workingHour.time}</div>
  <textarea class="col-md-10 description"></textarea>
  <button class="saveBtn"  data-time='${workingHour.key}'>Save</button>
</div>`;

    $("#time-blocks").append(timeBlock);
  };
  workingHours.forEach(renderTimeBlock);
  $("#time-blocks").on("click", handleSubmit);
};

const getClassName = (workingHour) => {
  const currentHour = moment().hour();
  //if workingHour is present
  if (workingHour === currentHour) {
    return "present";
  }
  //if workingHour is future
  if (workingHour > currentHour) {
    return "future";
  }
  return "past";
  //else past
};

const readFromLocalStorage = (key, defaultValue) => {
  // get from LS using key name
  const dataFromLS = localStorage.getItem(key);

  // parse data from LS
  const parsedData = JSON.parse(dataFromLS);

  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
  }
};

const writeToLocalStorage = (key, value) => {
  // convert value to string
  const stringifiedValue = JSON.stringify(value);

  // set stringified value to LS for key name
  localStorage.setItem(key, stringifiedValue);
};
const renderSavedData = () => {
  const savedData = readFromLocalStorage("day-planner", []);
  //take savedData and get it to render to text area
};

const onReady = () => {
  renderTimeBlocks();
  currentTime();
  renderSavedData();
};

$(document).ready(onReady);
