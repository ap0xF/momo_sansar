const chicken = document.getElementById("chicken-btn");
const buff = document.getElementById("buff-btn");
const veg = document.getElementById("veg-btn");

function btnSelcted(identity) {
  var clicked = document.getElementById(identity);

  if (clicked.id === chicken.id) {
    clicked.classList.add("clicked");
    buff.classList.remove("clicked");
    veg.classList.remove("clicked");
    console.log("Chicken Clicked");
    document.getElementById("chicken-cart").style.display = "grid";
    document.getElementById("buff-cart").style.display='none';
    document.getElementById("veg-cart").style.display = "none";
  } else if (clicked.id === buff.id) {
    clicked.classList.add("clicked");
    chicken.classList.remove("clicked");
    veg.classList.remove("clicked");
    console.log("Buff Clicked");
    document.getElementById("buff-cart").style.display = "grid";
    document.getElementById("chicken-cart").style.display = "none";
    document.getElementById("veg-cart").style.display = "none";
  } else {
    clicked.classList.add("clicked");
    chicken.classList.remove("clicked");
    buff.classList.remove("clicked");
    console.log("Veg Clicked");
    document.getElementById("veg-cart").style.display = "grid";
    document.getElementById("chicken-cart").style.display = "none";
    document.getElementById("buff-cart").style.display = "none";
  }
}


var returnedNum = 0;

function increaseCount(counter,count) {
  var num = count.innerHTML;
  counter.style.display = "block";
  if (Number(num) >= 0 && Number(num) <= 9) {
    num = Number(num) + 1;
    let returnedNum = Math.min(Math.max(parseInt(num), 0), 10);
    count.innerHTML = returnedNum;
    countOrders(1);
  }
}

function decreaseCount(counter, count) {
  if (Number(count.innerHTML) <= 1) {
    counter.style.display = "none";
  }
  var num = count.innerHTML;
  if (Number(num) >= 1 && Number(num) <= 10) {
    num = Number(num) - 1;
    let returnedNum = Math.min(Math.max(parseInt(num), 0), 30);
    count.innerHTML = returnedNum;
    countOrders(-1);
  }
}

var totalOrders = 0;

function countOrders(addOrSub){
  totalOrders = totalOrders + (addOrSub)
  var total = document.getElementById("order_total_count");
  total.innerHTML = totalOrders;
  if(Number(total.innerHTML) >= 1){
    document.getElementById("order_count_container").style.display = 'block';
  }
  if (Number(total.innerHTML) <= 0) {
    document.getElementById("order_count_container").style.display = "none";
  }
}

var data = {

};

function sendData(){
  all_id = [count_container_chicken_steamed, count_chicken_steamed];
  var keema_types = ['chicken', 'buff', 'veg'];
  var momo_types = ['steamed', 'fried', 'jhol', 'kothey'];
  var counter_divs = document.getElementsByClassName("counter_div");
  var counts = document.getElementsByClassName("count");
  
  for(let i=0; i<keema_types.length; i++){
    var keema_type = keema_types[i];
    for(let j=0; j<momo_types.length; j++){
      let momo_type = momo_types[j];
      let key = `count_${keema_type}_${momo_type}`;
      let value = document.getElementById(key).innerHTML;
      data[key] = value;
    }
  }
  console.log(data);

  for(let i=0;i<counter_divs.length;i++){
    counts[i].innerHTML = "";
    counter_divs[i].style.display = 'none';
  }
  document.getElementById("order_total_count").innerHTML = "";
  document.getElementById("order_count_container").style.display = "none";
  if(totalOrders > 0){
    alert(`order placed for total of ${totalOrders} momos\nPlease wait for conformation call`);
  }
  totalOrders = 0;
}