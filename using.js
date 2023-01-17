const endDate = "2 february 2023 3:00 PM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
function clock() {
    const end = new Date(endDate);
    const now = new Date()
    //  console.log(end);
    //  console.log(now);
    const diff = (end - now)/ 1000;
    // console.log(math.floor(diff/3600/24));
    // console.log(diff);

    if (diff<0) {
        return;
    }
    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // console.log( Math.floor(diff/3600)%24);

    // convert into hours
    inputs[1].value = Math.floor(diff/3600)%24;

    // convert into minutos
    inputs[2].value = Math.floor(diff/60)%60;


    // convert into seconds
    inputs[3].value = Math.floor(diff)%60;
}

// initial call
 clock()
// 1 days -> 24hrs
// 1hr--> 60 mins
// 60 min --> 3600 sec
setInterval(() => {
    clock()
}, 1000);