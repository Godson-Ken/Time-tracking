// variables
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const userTimeFrame = document.querySelectorAll('.user-timeframe')
const workCurrent = document.querySelector('#work-current');
const workPrevious = document.querySelector('#work-previous');
const playCurrent = document.querySelector('#play-current');
const playPrevious = document.querySelector('#play-previous');
const studyCurrent = document.querySelector('#study-current');
const studyPrevious = document.querySelector('#study-previous');
const exerciseCurrent = document.querySelector('#exercise-current');
const exercisePrevious = document.querySelector('#exercise-previous');
const socialCurrent = document.querySelector('#social-current');
const socialPrevious = document.querySelector('#social-previous');
const selfcareCurrent = document.querySelector('#self-care-current');
const selfcarePrevious = document.querySelector('#self-care-previous');

// data source
const dataArr = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

// functions
function DataChanger(time){
  const [work, play, study, exercise, social, selfcare] = dataArr;
  const times = time;
  
  changer(times, work, workCurrent, workPrevious);

  changer(times, play, playCurrent, playPrevious);
  
  changer(times, study, studyCurrent, studyPrevious);
 
  changer(times, exercise, exerciseCurrent, exercisePrevious);
  
  changer(times, social, socialCurrent, socialPrevious);
  
  changer(times, selfcare, selfcareCurrent, selfcarePrevious);

  
}

function changer(time, title, current, previous){
  current.textContent = ` ${title.timeframes[time].current}hrs`;
  
  let timekeeper = '';
  if(time === 'daily'){
    timekeeper = 'Yesterday'
  } else if(time === 'monthly'){
    timekeeper = 'Last Month'
  } else {
    timekeeper = 'Last Week'
  }
  previous.textContent = `${timekeeper} - ${title.timeframes[time].previous}hrs`;
  
  // console.log(`${current} ${title.timeframes[time].current}hrs`)
}

userTimeFrame.forEach((el) => {
  el.addEventListener('click', () => {
    DataChanger(el.id)
    // el.style.color = '#fff';
  })
})
 