var $menu = $('#menu-t')
var $menuItems = $('#menu-items-t')
var $logo = $('#logo-img-t')
var $fr = $('#first-row')
var $trackingInfo = $('#tracking-info')
var $url = 'https://jsonplaceholder.typicode.com/posts/1'
var $data = {
  userId:0,
  shippedFrom:'',
  shipped:'',
  currentLocation:'',
  destination:'',
  arrival:''}

$menu.click(function(){
  console.log('go')
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

function click() {
  var number = $('#tracking-number').val()

  // number checking to ensure valid value is passed
  if (number.length != 12 )
    invalidValueError();

  fetch($url)
    .then((response) => {
      return response.json();
    })
    .then((rawData) => {
      console.log(rawData);  // imported http data
      var data = {
        userId:rawData['userId'],
        dayShipped:rawData['id'],
        comments:rawData['body']
      }
      console.log(data);  // http data parsed

      // sample data
      $data = {
        userId:5,
        shippedFrom:'Chicago, Illinois',
        shipped:'12:35pm 5/8/23',
        currentLocation:'St. Louis, Missouri',
        destination:'Dallas, Texas',
        arrival:'5:00am 5/12/23'
      }

      // shift transition
      $fr.removeClass('form1')
      $fr.addClass('form2')

      $trackingInfo.removeClass('gone')
      $trackingInfo.addClass('here')

      $('#user-id').text($data.userId)
      $('#current-location').text($data.currentLocation)
      $('#shipped-from').text($data.shippedFrom)
      $('#date-shipped').text($data['shipped'].split(' ')[1])
      $('#time-shipped').text($data['shipped'].split(' ')[0])
      $('#shipped-to').text($data.destination)
      $('#arrival-date').text($data['arrival'].split(' ')[1])
      $('#arrival-time').text($data['arrival'].split(' ')[0])
    });

}

function invalidValueError() {
  // shake number and change color of track button
}
