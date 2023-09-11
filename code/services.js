var $menu = $('#menu-s')
var $menuItems = $('#menu-items-s')
var $logo = $('#logo-img-s')

$menu.click(function(){
  $menu.toggleClass('menu-small menu-big')
  if ($logo.is("html *")) {
    $logo.remove()
    $menuItems.css("display","block")
  } else {
    $menu.append($logo)
    $logo.css("transform","translate(100px,-90px)")
    $menuItems.css("display","none")
  }
})

