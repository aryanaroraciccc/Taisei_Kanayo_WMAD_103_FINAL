
// クリックイベントを追加する関数
function addClickEvent(element, target) {
    element.addEventListener("click", function() {
        //h2をクリックすることで、2つのアニメーションを惹起する
      target.classList.toggle("show");
      element.querySelector('.arrow').classList.toggle('toggle-arrow-animation');
    });
  }
  
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

});

// FEEDBACKボタンのクリックイベント
feedbackButton.addEventListener("click", function() {
  // FEEDBACKフォームを表示し、GENERAL INQUIRYフォームを非表示にする
  feedbackForm.classList.remove("hidden");
  generalInquiryForm.classList.add("hidden");

  //FEEDBACKボタンの色を変える
  generalInquiryButton.classList.remove("color-change-btn");
  feedbackButton.classList.add("color-change-btn");
});
