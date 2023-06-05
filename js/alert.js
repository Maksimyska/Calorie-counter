const ALERT_SHOW_TIME = 3000;

const showAlert = (message) => {
    const alertContainer = document.createElement('div');
    alertContainer.style.zIndex = '100';
    alertContainer.style.position = 'absolute';
    alertContainer.style.left = '0';
    alertContainer.style.top = '0';
    alertContainer.style.right = '0';
    alertContainer.style.padding = '25px';
    alertContainer.style.fontSize = '40px';
    alertContainer.style.textAlign = 'center';
    alertContainer.style.backgroundColor = '#d64f4f';
    alertContainer.style.height = '130px';
    alertContainer.style.lineHeight = 'normal';
    alertContainer.textContent = message;
    document.body.append(alertContainer);
    setTimeout(() => {
        alertContainer.remove();
    }, ALERT_SHOW_TIME);
};
export { showAlert };
