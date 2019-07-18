var WiFiControl = require('wifi-control');
const sendmail = require('sendmail')();

WiFiControl.init({
    debug: true
  });
 
  //  Try scanning for access points:
  WiFiControl.scanForWiFi( function(err, response) {
    if (err) console.log(err);
    console.log('Wifi networks detected',response);
  });


  var ifaceState = WiFiControl.getIfaceState();
//   console.log('Test',ifaceState);

  console.log('Test wifi connection', ifaceState.power);
  if(ifaceState.power == true) {
      console.log('connected to network - ', ifaceState.ssid)

      sendmail({
        from: 'a.b@gmail.com',
        to: 'b.a@gmail.com',
        subject: 'Wifi connected to Macbook',
        html: 'Your MacBook Pro has been connected to a wifi network ',
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
  }

  else {
      console.log('Not connected to any wifi')
  }
 
