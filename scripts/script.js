// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDwnEeQuEvsgE9oe1ZsE3tG4v9gVdXiLZU",
authDomain: "webstudentssystem.firebaseapp.com",
databaseURL: "https://webstudentssystem-default-rtdb.firebaseio.com",
projectId: "webstudentssystem",
storageBucket: "webstudentssystem.appspot.com",
messagingSenderId: "132005167071",
appId: "1:132005167071:web:8360087d87cc8778f6ce6a",
measurementId: "G-WVTDVC0X3D"
};
firebase.initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({ timestampsInSnapshots: true });


 $(document).ready(function(){

var script_url = "https://script.google.com/macros/s/AKfycbwshQKtKwdKxXeF0NybEcqqLyuXaHHa7qTddHFcNTRm2188E2lEoNR9SA/exec";


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//เพิ่มข้อมูล
function insert_value() {

  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');

  var datevalue = $("#datevalue").val();
  var id1 = $("#id").val();
  var name = $("#name").val();
  var subject = $("#subject").val();
  var status = $("#status").val();
  var url = script_url + "?callback=ctrlq&datevalue=" + datevalue + "&status=" + status + "&subject=" + subject + "&name=" + name + "&id=" + id1 + "&action=insert";

  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}
//อัปเดทข้อมูล
function update_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";

  var datevalue = $("#datevalue").val();
  var id1 = $("#id").val();
  var name = $("#name").val();
  var subject = $("#subject").val();
  var status = $("#status").val();
  var url = script_url + "?callback=ctrlq&datevalue=" + datevalue + "&status=" + status + "&subject=" + subject + "&name=" + name + "&id=" + id1 + "&action=insert";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

//ลบข้อมูล
function delete_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";

  $('#mySpinner').addClass('spinner');

  var datevalue = $("#datevalue").val();
  var id1 = $("#id").val();
  var name = $("#name").val();
  var subject = $("#subject").val();
  var status = $("#status").val();
  var url = script_url + "?callback=ctrlq&datevalue=" + datevalue + "&status=" + status + "&subject=" + subject + "&name=" + name + "&id=" + id1 + "&action=insert";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

// print the returned data
function ctrlq(e) {
  $("#re").html(e.result);
  $("#re").css("visibility", "visible");
  read_value();
}

function read_value() {

  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  var url = script_url + "?action=read";

  $.getJSON(url, function (json) {
    // สร้างตารางแสดงข้อมูล
    var table = document.createElement("table");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    row.style.background = "rgb(243,219,113)";


    cell1.innerHTML = "<b>วันเวลา</b>";
    cell2.innerHTML = "<b>รหัสนักเรียน</b>";
    cell3.innerHTML = "<b>ชื่อ สกุล</b>";
    cell4.innerHTML = "<b>วิชา</b>";
    cell5.innerHTML = "<b>สถานะ</b>";

    //นำข้อมูลลงในตาราง ต้องตรงกับspeecheet
    for (var i = 0; i < json.records.length; i++) {
      tr = table.insertRow(-1);
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].วันที่;
      tabCell = tr.insertCell(-1)
      tabCell.innerHTML = json.records[i].รหัสนักเรียน;
      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].ชื่อ_สกุล;
      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].วิชาที่เรียน;
      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].สถานะ;
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    document.getElementById("loader").style.visibility = "hidden";
    $("#re").css("visibility", "visible");
    $("#datevalue").val("")
    $("#id").val("")
    $("#name").val("")
    $("#subject").val("")
    $("#status").val("")
  });
  }
 });
