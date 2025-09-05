// add history 
let callHistory = [];


const historyContainer = document.getElementById('history-item');
const clearHistoryBtn = document.getElementById('history-btn');
const coinElement = document.getElementById('coin');

function updateHistoryDisplay() {
    historyContainer.innerHTML = '';
    
    callHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.id = 'item';
        historyItem.innerHTML = `
           <div class="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-lg mt-4 ">                 
            <div>                     
                <p class="text-[18px] font-semibold">${item.name}</p>                     
                <p class="text-[gray]">${item.number}</p>                 
            </div>                 
            <div>                     
                <p class="text-[18px]">${item.time}</p>                 
            </div>             
        </div>    
        `;
        historyContainer.appendChild(historyItem);
    });
}

// history clear 

function addToHistory(name, number) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    
    callHistory.push({
        name,
        number,
        time
    });
    
    updateHistoryDisplay();
}

function clearHistory() {
    callHistory = [];
    updateHistoryDisplay();
}

clearHistoryBtn.addEventListener('click', clearHistory);
updateHistoryDisplay();

// call name and number for coin function 

document.getElementById('call-btn').addEventListener('click', function() {
    const name = document.getElementById('name').innerText;
    const number = document.getElementById('num').innerText;
    call(name, number);
});

document.getElementById('call-btn1').addEventListener('click', function() {
    const name = document.getElementById('name1').innerText;
    const number = document.getElementById('num1').innerText;
    call(name, number);
});

document.getElementById('call-btn2').addEventListener('click', function() {
    const name = document.getElementById('name2').innerText;
    const number = document.getElementById('num2').innerText;
    call(name, number);
});

document.getElementById('call-btn3').addEventListener('click', function() {
    const name = document.getElementById('name3').innerText;
    const number = document.getElementById('num3').innerText;
    call(name, number);
});

document.getElementById('call-btn4').addEventListener('click', function() {
    const name = document.getElementById('name4').innerText;
    const number = document.getElementById('num4').innerText;
    call(name, number);
});

document.getElementById('call-btn5').addEventListener('click', function() {
    const name = document.getElementById('name5').innerText;
    const number = document.getElementById('num5').innerText;
    call(name, number);
});

document.getElementById('call-btn6').addEventListener('click', function() {
    const name = document.getElementById('name6').innerText;
    const number = document.getElementById('num6').innerText;
    call(name, number);
});

document.getElementById('call-btn7').addEventListener('click', function() {
    const name = document.getElementById('name7').innerText;
    const number = document.getElementById('num7').innerText;
    call(name, number);
});

document.getElementById('call-btn8').addEventListener('click', function() {
    const name = document.getElementById('name8').innerText;
    const number = document.getElementById('num8').innerText;
    call(name, number);
});


// coin function

function call(name, number) {
    let coin = parseInt(coinElement.innerText);

    if(coin >= 20){
        const result = coin - 20;
        coinElement.innerText = result;
        addToHistory(name, number);
        alert('Calling now: ' + name + ' ( ' + number + ' )');
    }
    else{
        alert("You don't have enough coins to make a call.");
    }
}



