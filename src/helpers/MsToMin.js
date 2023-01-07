const MsToMin = ms => {
  const seconds = ms / 1000;
  let startTime;

  if (seconds < 60) {
    const exactSecond = Math.floor(seconds)
    if (exactSecond < 10) {
      startTime = `0:0${exactSecond}`

    } else {
      startTime = `0:${exactSecond}`
    }
  } else {
    const startTimeMin = Math.floor(seconds / 60)
    const startTimeSec = Math.floor(seconds % 60)

    if (startTimeSec < 10) {
      startTime = `${startTimeMin}:0${startTimeSec}`

    } else {
      startTime = `${startTimeMin}:${startTimeSec}`
    }

  }

  return startTime

}


export default MsToMin;
