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
    return  this.type;
  }
  getWork() {
    return  this.type;
  }
}
// 효율계산
// function calcEfficiency(mach) {
//   if (!mach) {
//     return;
//   }
//   // let eff = mach.consume_power;
//   // let efficiency = 
// }

function getTotalWorkNumber() {
  let total;
  miningMachList.rtx1.forEach(mach => total += mach.getWork());
  miningMachList.rtx2.forEach(mach => total += mach.getWork());
}

function rtx1_buy() {
  miningMachList.rtx1.push(new MiningMachine(1, 'rtx1'));
  document.getElementById('rtx1_now').innerHTML = miningMachList.rtx1.length;
  document.getElementById('electricity_output').innerHTML = power;
  // rtx1_now = rtx1_now + 1;
  // now_make = now_make + (rtx1_make * efficiency);
  // document.getElementById('rtx1_now').innerHTML = rtx1_now;
  // document.getElementById('now_make').innerHTML = now_make;

}

function rtx2_buy() {
  miningMachList.rtx2.push(new MiningMachine(2, 'rtx2'));
  document.getElementById('rtx1_now').innerHTML = miningMachList.rtx2.length;
  document.getElementById('electricity_output').innerHTML = power;
  // rtx2_now = rtx2_now + 1;
  // now_make = now_make + (rtx2_make * efficiency);
  // document.getElementById('rtx2_now').innerHTML = rtx2_now;
  // document.getElementById('now_make').innerHTML = now_make;
}

$(document).ready(function () {

  let $output = $("#output");
  let $work = $("#now_make");

  function addCount() {
    // now_coin = now_coin + now_make;
    miningMachList.rtx1.forEach(mach => now_coin += mach.doWork());
    miningMachList.rtx2.forEach(mach => now_coin += mach.doWork());
    $output.text(now_coin);
  }

  addCount();
  setInterval(addCount, 1000);

})