var _zbver = 'pre-0.1'

var _mainCode = `var _zbver = 'pre-0.1'

var _homepage = $store.getRaw('.zamblue/homepage')

$zb = {newTab: function(){
  
  var zbWindow = $window(
    {
      url: _homepage,
      title: 'Zamblue',
      icon: 'https://github.com/PhantomDoom741/Zamblue/raw/master/zamblue.png',
      width: 1200,
      height: 700,
      footer: 'Zamblue ' + _zbver,
      help: 'Zamblue ' + _zbver + ' developed by PhantomDoom741.\
      \
      Zamblue is an internet browser for Windows93. This is a prerelease, most features will be added in the next versions.\
      To browse the internet with Zamblue, you need the Ignore-X-Frame-Headers browser extension.',
      menu: [
        {
          name: "File",
          items: [
            {
              name: "Homepage",
              action: function () {
                $alert("This feature will be available in pre-0.2");
              }
            },
            {
              name: "URL",
              action: function () {
                $alert("This feature will be available in pre-0.2");
              }
            }
          ]
        },
        {name: "Tabs",
        items: [
          {
            name: "New Tab",
            action: function () {
              $zb.newTab();
            }
          },
          {
            name: "End Tab",
            action: function () {
              $window.current.destroy();
            }
          }
        ]}
      ]
    }
  );

}}
$zb.newTab()`

var _fullCode = `le._apps["zamblue"] = {
    exec: function() {
      
      ` + _mainCode + `},
      hascli: true,
      terminal: true
    };`

  $alert({
    msg: "Welcome to the Zamblue " + _zbver + " installer. Choose an option below.",
    title: "Zamblue",
    btnOk: "Get Zamblue " + _zbver,
    btnCancel: "Close",
    img: "https://github.com/PhantomDoom741/Zamblue/raw/master/zamblue.png",
    resizable: false,
    maximizable: false,
    minimizable: false,
    closable: false,
    dockable: false
  }, function(isOK) {
    if (isOK) {
      $store.set('boot/zamblue.js', _fullCode)
      $store.set('.zamblue/homepage', 'https://google.com/')
      $exe(`js /a/boot/zamblue.js`)
      $notif('Installation complete', 'Zamblue is now intalled in Windows93.')
    }
  })