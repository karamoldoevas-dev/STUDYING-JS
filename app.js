const button = document.querySelector('button');

button.addEventListener('click', () => {
    //firstnwe check, whether the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser doesn't support system notifications");
        return;
    }

    //If permission haas already been granted, show the notification
    if (Notification.permission === "granted") {
        new Notification("Hello!", {
            body: "This a notification appearing on your screen-no numbers involved!",
            icon: "" // You can add a link to an icon image here if you'd like 
        });
    }
    // If permission hasn't been granted yet, request it from the user 
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
            if (permoission === "granted") {
                new Notification("Thanks for permission!", {
                    body: "Now notification will work."
                });
            }
        });
    }
});
const modal = document.getElementById('modal');
button.addEventListener('click', () => {
  modal.style.display = 'none';
});