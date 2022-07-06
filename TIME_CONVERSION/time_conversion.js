function time(time) {
  // <span className="digits">
  //     {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
  //   </span>
  //   <span className="digits">
  //     {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
  //   </span>
  //   <span className="digits mili-sec">
  //     {("0" + ((time / 10) % 100)).slice(-2)}
  //   </span>
  let minute = Math.floor((time / 60000) % 60);
  let second = Math.floor((time / 1000) % 60);
  if (minute > 0 && second > 0) {
    let totalTime = `${minute} Minutes ${second} Seconds`;
    return totalTime;
  }
  if (minute > 1 && second == 0) {
    let totalTime = `${minute} Minutes`;
    return totalTime;
  }
  if (minute === 0 && second > 0) {
    let totalTime = `${second} Seconds`;
    return totalTime;
  }
  if (minute == 1 && second == 0) {
    let totalTime = `${minute} Minute`;
    return totalTime;
  }
}

module.exports = time;
