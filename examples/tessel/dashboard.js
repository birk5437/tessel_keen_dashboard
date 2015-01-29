
var client = new Keen({
    projectId: "54caabbf90e4bd37a16075cf",
    readKey: "62aca05d71beaf6738ed65957b23b788a49997539a847375e2d252d3753b1de2338da2a66e9089eda241f5eb0c15b018da90ecd1024cefd3386630df114fe9ba635dc4689e6be97c65f22a702483609181156ecf4d090a4a17e5e995efa0c0f1903868a9f1a918c1a964c90d4d1618a2"
});


Keen.ready(function(){


  // ----------------------------------------
  // Light Trigger Timeline
  // ----------------------------------------
  var light_timeline = new Keen.Query("count_unique", {
    eventCollection: "climate",
    targetProperty: "light-trigger",
    interval: "minutely",
    // timeframe: {
    //   start: "2014-10-06T07:00:00.000",
    //   end: "2014-10-06T19:00:00.000"
    // }
    timeframe: "today"
  });

  client.draw(light_timeline, document.getElementById("chart-05"), {
    chartType: "linechart",
    title: " ",
    height: 250,
    width: "auto"
  });

  // ----------------------------------------
  // Sound Trigger Timeline
  // ----------------------------------------
  var sound_timeline = new Keen.Query("count_unique", {
    eventCollection: "climate",
    targetProperty: "sound-trigger",
    interval: "minutely",
    // timeframe: {
    //   start: "2014-10-06T07:00:00.000",
    //   end: "2014-10-06T19:00:00.000"
    // }
    timeframe: "today"
  });

  client.draw(sound_timeline, document.getElementById("chart-06"), {
    chartType: "linechart",
    title: " ",
    height: 250,
    width: "auto"
  });

  // ----------------------------------------
  // temp
  // ----------------------------------------

  var temperature = new Keen.Query("average", {
    eventCollection: "climate",
    targetProperty: "temp",
    // timeframe: {
    //   start: "2014-10-06T00:00:00.000",
    //   end: "2014-10-07T00:00:00.000"
    // }
    timeframe: "today"
  });

  $("#chart-01").knob({
    'angleArc':250,
    'angleOffset':-125,
    'readOnly':true,
    'min':0,
    'max':120,
    'fgColor': Keen.Dataviz.defaults.colors[1]
  });

  client.run(temperature, function(err, res){
    $("#chart-01").val(res.result).trigger('change');
  });

  // ----------------------------------------
  // humidity
  // ----------------------------------------

  var humidity = new Keen.Query("average", {
    eventCollection: "climate",
    targetProperty: "humidity",
    // timeframe: {
    //   start: "2014-10-06T00:00:00.000",
    //   end: "2014-10-07T00:00:00.000"
    // }
    timeframe: "today"
  });

  $("#chart-02").knob({
    'angleArc':250,
    'angleOffset':-125,
    'readOnly':true,
    'min':0,
    'max':50,
    'fgColor': Keen.Dataviz.defaults.colors[0]
  });

  client.run(humidity, function(err, res){
    $("#chart-02").val(res.result).trigger('change');
  });

  // ----------------------------------------
  // Light
  // ----------------------------------------

  var light = new Keen.Query("average", {
    eventCollection: "climate",
    targetProperty: "light",
    // timeframe: {
    //   start: "2014-10-06T00:00:00.000",
    //   end: "2014-10-07T00:00:00.000"
    // }
    timeframe: "today"
  });

  $("#chart-03").knob({
    'angleArc':250,
    'angleOffset':-125,
    'readOnly':true,
    'step':0.01,
    'min':0,
    'max':50,
    'fgColor': Keen.Dataviz.defaults.colors[2]
  });

  client.run(light, function(err, res){
    $("#chart-03").val(res.result*100).trigger('change');
  });

  // ----------------------------------------
  // Sound
  // ----------------------------------------

  var sound = new Keen.Query("average", {
    eventCollection: "climate",
    targetProperty: "sound",
    // timeframe: {
    //   start: "2014-10-06T00:00:00.000",
    //   end: "2014-10-07T00:00:00.000"
    // }
    timeframe: "today"
  });

  $("#chart-04").knob({
    'angleArc':250,
    'angleOffset':-125,
    'readOnly':true,
    'step':0.01,
    'min':0,
    'max':100,
    'fgColor': Keen.Dataviz.defaults.colors[3]
  });

  client.run(sound, function(err, res){
    $("#chart-04").val(res.result*100).trigger('change');
  });


});
