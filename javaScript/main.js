

// call button event handler 
let callBtns = document.getElementsByClassName('callBtn');
let coin = document.getElementById('coin');
let coinElement = parseInt(coin.innerText);
let callHistory = document.getElementById('callHistory');
let clearBtn = document.getElementById('clearBtn');


for (let callBtn of callBtns) {

    callBtn.addEventListener('click', function (e) {
        const serviceTitle = callBtn.parentNode.children[1].children[0].innerText;
        const serviceNumber = callBtn.parentNode.children[2].children[0].innerText;


        // coin deduct
        if (coinElement >= 20) {
            alert(`Calling ${serviceTitle} - ${serviceNumber}`);
            coinElement = coinElement - 20;
            coin.innerText = coinElement;

            // time stamp 
            let time = new Date().toLocaleTimeString();

            // create call history 
            let historyItem = document.createElement('div');
            historyItem.classList.add('history-item');
            historyItem.innerHTML = `
                <div class="flex justify-between items-center py-3">
                    <div>
                        <strong>${serviceTitle}</strong><br>
                        <small>${serviceNumber}</small>
                    </div>
                    <div class="time">${time}</div>
                </div>
                
            `;
            callHistory.append(historyItem);
        }
        else {
            alert("Not Enough Coin.You need 20 coin for make a call");
        }
    });
}

// clear all history items 
clearBtn.addEventListener('click', function (e) {
    e.preventDefault;
    callHistory.innerHTML = "";
});


// copy button event handler 
const copyBtns = document.getElementsByClassName('copyBtn');
let copy = document.getElementById('copyCount');
let copyCount = parseInt(copy.innerText);

for (let copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function (e) {
        e.preventDefault;

        copyCount = copyCount + 1;
        copy.innerText = copyCount;

        const hotline = copyBtn.parentNode.children[2].children[0].innerText;

        navigator.clipboard.writeText(hotline)
            .then(function () {
                alert("Copied: " + hotline);
            })
            .catch(function (err) {
                alert("Copy failed: " + err);
            });


    });
}