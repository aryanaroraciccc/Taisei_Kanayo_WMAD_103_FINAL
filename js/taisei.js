
// // クリックイベントを追加する関数
// function addClickEvent(element, target) {
//     element.addEventListener("click", function() {
//         //h2をクリックすることで、3つのアニメーションを惹起する
//       target.classList.toggle("show");
//       element.querySelector('.arrow').classList.toggle('toggle-arrow-animation');
//       element.classList.toggle("back-color");
//     });
//   }
  
//   // h2要素を取得
//   var h2Elements = document.querySelectorAll(".toggle-trigger");
  
//   // 各h2要素にクリックイベントを追加
//   h2Elements.forEach(function(h2) {
//     var target = h2.nextElementSibling;
//     addClickEvent(h2, target);
//   });
  


//   // ボタン要素を取得
// var generalInquiryButton = document.getElementById("general-inquiry-button");
// var feedbackButton = document.getElementById("feedback-button");

// // フォーム要素を取得
// var generalInquiryForm = document.getElementById("general-inquiry-form");
// var feedbackForm = document.getElementById("feedback-form");

// // GENERAL INQUIRYボタンのクリックイベント
// generalInquiryButton.addEventListener("click", function() {
//   // GENERAL INQUIRYフォームを表示し、FEEDBACKフォームを非表示にする
//   generalInquiryForm.classList.remove("hidden");
//   feedbackForm.classList.add("hidden");

//   //GENERAL INQUIRYボタンの色を変える。
//   generalInquiryButton.classList.add("color-change-btn");
//   feedbackButton.classList.remove("color-change-btn");

// });

// // FEEDBACKボタンのクリックイベント
// feedbackButton.addEventListener("click", function() {
//   // FEEDBACKフォームを表示し、GENERAL INQUIRYフォームを非表示にする
//   feedbackForm.classList.remove("hidden");
//   generalInquiryForm.classList.add("hidden");

//   //FEEDBACKボタンの色を変える
//   generalInquiryButton.classList.remove("color-change-btn");
//   feedbackButton.classList.add("color-change-btn");
// });




//edit 1
// クリックイベントを追加する関数
function addClickEvent(element, target) {
  element.addEventListener("click", function() {
    target.classList.toggle("show");
    element.querySelector('.arrow').classList.toggle('toggle-arrow-animation');
    element.classList.toggle("back-color");

    // コンテンツが表示される際に高さを計算し直す
    var content = document.querySelector('.contact-container');
    var contentHeight = content.offsetHeight;
    var contactMenus = document.querySelector('.contact-menus');
    contactMenus.style.maxHeight = contentHeight + 'px';
  });
}

// 以下のコードは先ほどと同じです

// h2要素を取得
var h2Elements = document.querySelectorAll(".toggle-trigger");

// 各h2要素にクリックイベントを追加
h2Elements.forEach(function(h2) {
  var target = h2.nextElementSibling;
  addClickEvent(h2, target);
});

// ボタン要素を取得
var generalInquiryButton = document.getElementById("general-inquiry-button");
var feedbackButton = document.getElementById("feedback-button");

// フォーム要素を取得
var generalInquiryForm = document.getElementById("general-inquiry-form");
var feedbackForm = document.getElementById("feedback-form");

// GENERAL INQUIRYボタンのクリックイベント
generalInquiryButton.addEventListener("click", function() {
  // GENERAL INQUIRYフォームを表示し、FEEDBACKフォームを非表示にする
  generalInquiryForm.classList.remove("hidden");
  feedbackForm.classList.add("hidden");

  //GENERAL INQUIRYボタンの色を変える。
  generalInquiryButton.classList.add("color-change-btn");
  feedbackButton.classList.remove("color-change-btn");

  // コンテンツの高さを再計算
  var content = document.querySelector('.contact-container');
  var contentHeight = content.offsetHeight;
  var contactMenus = document.querySelector('.contact-menus');
  contactMenus.style.maxHeight = contentHeight + 'px';
});

// FEEDBACKボタンのクリックイベント
feedbackButton.addEventListener("click", function() {
  // FEEDBACKフォームを表示し、GENERAL INQUIRYフォームを非表示にする
  feedbackForm.classList.remove("hidden");
  generalInquiryForm.classList.add("hidden");

  //FEEDBACKボタンの色を変える
  generalInquiryButton.classList.remove("color-change-btn");
  feedbackButton.classList.add("color-change-btn");

  // コンテンツの高さを再計算
  var content = document.querySelector('.contact-container');
  var contentHeight = content.offsetHeight;
  var contactMenus = document.querySelector('.contact-menus');
  contactMenus.style.maxHeight = contentHeight + 'px';
});


