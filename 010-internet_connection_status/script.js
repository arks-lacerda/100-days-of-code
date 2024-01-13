const image = document.getElementById('image');
const statusDisplay = document.getElementById('status');
const bgColor = document.getElementById('main');

function setColor() {
  bgColor.classList.add('online');
}

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' +
        new Date().getTime()
    );
    image.src = './images/online.png';
    setColor();
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (error) {
    console.error(error);
    statusDisplay.textContent = 'OOPS!!! Your internet connection is down!';
    image.src = './images/offline.png';
    bgColor.classList.remove('online');
  }
}

// Monitor The Connection
setInterval(async () => {
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = 'Your are ONLINE, connection is Look Good!';
    setColor();
  }
}, 5000);

// Check connection when the page Loads
window.addEventListener('load', async (e) => {
  if (connectionStatus()) {
    statusDisplay.textContent = 'Your are ONLINE';
  } else {
    statusDisplay.textContent = 'Your are OFFLINE';
  }
});
