const data = [
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

const buttons = document.querySelectorAll('.button')

const selectedTF = (option) => {
    buttons.forEach(a => a.classList.remove('active'))
    option.classList.add('active')
}

const clearAll = () => {
  const activities = document.querySelectorAll('.parent')
  activities.forEach(a => a.remove())
}

const thingsDone = (clickedOpt) => {
  clearAll()

  const main = document.querySelector('main')

  const previousTime = (opt) => {
    if(opt === 'daily'){
      return 'Yesterday'
    }else if(opt === 'weekly'){
      return 'Last Week'
    }else if(opt === 'monthly'){
      return 'Last Month'
    }
  }

  data.forEach(activity => {
    const name = activity.title
    const activityClass = name.toLowerCase().replace(' ', '-')
    const timeFrameData = activity.timeframes[clickedOpt]
    const previousTF = previousTime(clickedOpt)

    const newDiv = document.createElement('div')
    newDiv.classList.add('parent', `parent-${activityClass}`)

    const newString = `
      <div class = "${activityClass}-icon">
        <img src="images/icon-${activityClass}.svg" alt="icon-${activityClass}">
      </div>

      <div class="child child-${activityClass}">
        <header>
          <h2>${name}</h2>
          <img src="images/icon-ellipsis.svg" alt="">
        </header>
        <div class="hours">
          <h1>${timeFrameData.current}</h1>
          <p>${previousTF} - ${timeFrameData.previous}</p>
        </div>
    </div>`

    newDiv.innerHTML = newString
    main.append(newDiv)
  })
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    selectedTF(button)
    const clickedOpt = button.dataset.option
    thingsDone(clickedOpt)
  })
})

buttons[1].click()