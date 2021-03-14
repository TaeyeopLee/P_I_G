// 변수들
let rtx1_make = 1;
let rtx2_make = 2;

let rtx1_now = 0;
let rtx2_now = 0;

let miningMachList = {
  rtx1: [],
  rtx2: [],
};
let now_make = 0;
let now_coin = 0;

let power = 100;
let efficiency = 1;
let btc_price = 0;
// 효율계산
// function calcEfficiency(mach) {
//   if (!mach) {
//     return;
//   }
//   // let eff = mach.consume_power;
//   // let efficiency = 
// }

// 채굴기 클래스 선언
class MiningMachine {
  name = ''; // 채굴기 이름
  type = 0; // 채굴기 타입
  index;
  constructor(type, name, index) {
    this.type = type;
    this.name = name;
    this.index = index;
    power -= type;
  }
  doWork(params) {
    return this.type;
  }
  getWork() {
    return this.type;
  }
}

function getTotalWorkNumber() {
  let total = 0;
  miningMachList.rtx1.forEach(mach => total += mach.getWork());
  miningMachList.rtx2.forEach(mach => total += mach.getWork());
  return total;
}

function rtx1_buy() {
  miningMachList.rtx1.push(new MiningMachine(1, 'rtx1'));
  document.getElementById('rtx1_now').innerHTML = miningMachList.rtx1.length;
  document.getElementById('electricity_output').innerHTML = power;
  document.getElementById('now_make').innerHTML = getTotalWorkNumber();
  // rtx1_now = rtx1_now + 1;
  // now_make = now_make + (rtx1_make * efficiency);
  // document.getElementById('rtx1_now').innerHTML = rtx1_now;
  // document.getElementById('now_make').innerHTML = now_make;

}

function rtx2_buy() {
  miningMachList.rtx2.push(new MiningMachine(2, 'rtx2'));
  document.getElementById('rtx2_now').innerHTML = miningMachList.rtx2.length;
  document.getElementById('electricity_output').innerHTML = power;
  document.getElementById('now_make').innerHTML = getTotalWorkNumber();
  // rtx2_now = rtx2_now + 1;
  // now_make = now_make + (rtx2_make * efficiency);
  // document.getElementById('rtx2_now').innerHTML = rtx2_now;
  // document.getElementById('now_make').innerHTML = now_make;
}

function makeBTCPrice() {
  let rand = Math.random().toFixed(1);
  return rand;
}

$(document).ready(function () {
  let $today = $("#today");
  function setDateTime() {
    let now = new Date();
    let date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    $today.text(date + " " + time);
    setTimeout(() => {
      setDateTime();
    }, 1000);
  }
  let $output = $("#output");
  // let $work = $("#now_make");
  let $btc_Price = $("#btc_price");

  $output.text(now_coin);

  function addCount() {
    // now_coin = now_coin + now_make;
    miningMachList.rtx1.forEach(mach => now_coin += mach.doWork());
    miningMachList.rtx2.forEach(mach => now_coin += mach.doWork());
    $output.text(now_coin);
  }

  function dispBTC_price() {
    $btc_Price.text(makeBTCPrice());
  }

  setDateTime();
  addCount();
  dispBTC_price();
  setInterval(addCount, 1000);
  setInterval(dispBTC_price, 1000);


})