
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
  