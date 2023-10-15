var $menu = $('#menu-h')
var $menuItems = $('#menu-items-h')
var $logo = $('#logo-h')
let groupChildren = document.querySelector(".group2-pane").children

$menu.click(function(){
  $menu.toggleClass('menu-small menu-big')
  if ($logo.is("html *")) {
    $logo.remove()
    $menuItems.css("display","block")
  } else {
    $menu.append($logo)
    $menuItems.css("display","none")
  }
})

let options = {
  root: null, // sense on viewport
  rootMargin: "0px",
  threshold: 0,
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("center")
      entry.target.classList.add("fade-in")
    } else {
      entry.target.classList.remove("center")
    }
  });
}, options);

for(let child of groupChildren) {
  observer.observe(child)
}
