let tabs = document.querySelectorAll('.tab-item');
let contents = document.querySelectorAll('.content-item');
let contentInfo = document.querySelectorAll('.content-info__text');

function hideContent() {
  contents.forEach(element => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  })

  contentInfo.forEach(text => {
    if (text.classList.contains('active')) {
      text.classList.remove('active');
    }
  })

  tabs.forEach(tab => {
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
    }
  })
}

function showContent(type) {
  contents.forEach(content => {
    if(content.getAttribute('data-type') === type) {
      content.classList.add('active');
    }
  })

  contentInfo.forEach(text => {
    console.log(text);
    if(text.getAttribute('data-type') === type) {
      text.classList.add('active');
    }
  })
}

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    hideContent();
    tab.classList.add('active');
    let type = tab.getAttribute('data-type');
    showContent(type);
  })
})
