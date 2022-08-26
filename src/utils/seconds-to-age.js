const secondsToAge = (seconds) => {
  const timeDivisions = {
    year: 60 * 60 * 24 * 365,
    month: 60 * 60 * 24 * 31,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  if (!seconds || seconds < timeDivisions.minute) return "just now";

  if (seconds < timeDivisions.hour) {
    const minutes = Math.floor(seconds / timeDivisions.minute);
    return `${minutes} min${minutes === 1 ? "" : "s"} ago`;
  }
  if (seconds < timeDivisions.day) {
    const hours = Math.floor(seconds / timeDivisions.hour);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }
  if (seconds < timeDivisions.month) {
    const days = Math.floor(seconds / timeDivisions.day);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  }
  if (seconds < timeDivisions.year) {
    const months = Math.floor(seconds / timeDivisions.month);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  }
  if (seconds > timeDivisions.year) {
    const years = Math.floor(seconds / timeDivisions.year);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
};

module.exports = { secondsToAge };
