var $menu = $('#menu-c')
var $menuItems = $('#menu-items-c')
var $logo = $('#logo-img-c')

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

