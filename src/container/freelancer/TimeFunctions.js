export function timeAgo(postedTimeStr) {
    const postedTime = new Date(postedTimeStr);
    const currentTime = new Date();
  
    const deltaInMilliseconds = currentTime - postedTime;
    const deltaInSeconds = Math.floor(deltaInMilliseconds / 1000);
    const deltaInMinutes = Math.floor(deltaInSeconds / 60);
    const deltaInHours = Math.floor(deltaInMinutes / 60);
    const deltaInDays = Math.floor(deltaInHours / 24);
  
    if (deltaInMinutes < 1) {
        return "just now";
    } else if (deltaInMinutes < 60) {
        return `${deltaInMinutes}m ago`;
    } else if (deltaInHours < 24) {
        return `${deltaInHours}h ago`;
    } else if (deltaInDays < 30) {
        return `${deltaInDays}d ago`;
    } else if (deltaInDays < 365) {
        const months = Math.floor(deltaInDays / 30);
        return `${months} month ago`;
    } else {
        const years = Math.floor(deltaInDays / 365);
        return `${years} year ago`;
    }
  }


export function formatDateInput(inputDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dateObj = new Date(inputDate);
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    return `${month} ${day}, ${year}`;
}  
