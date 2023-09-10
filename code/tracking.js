var $menu = $('#menu-t')
var $menuItems = $('#menu-items-t')
var $logo = $('#logo-img-t')

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

