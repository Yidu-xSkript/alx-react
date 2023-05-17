export const getFullYear = () => new Date().getFullYear();
export const getFooterCopy = (isIndex) => (!isIndex ? "Holberton School main dashboard" : "Holberton School");
export const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by EOD";
};