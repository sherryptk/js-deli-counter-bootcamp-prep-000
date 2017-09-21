function takeANumber(katzDeliLine, name){

  var line = 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length+1) + ' in line.'

  katzDeliLine.push(name)

  return line

}

function nowServing(katzDeliLine){

  var name = katzDeliLine[0]

  katzDeliLine.shift()

  return "Currently serving " + name + "."

}

// Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"],
// currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If there is nobody in line,
// it should return "The line is currently empty."

function currentLine(katzDeliLine){

var array = []
  if (katzDeliLine.length>0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var count = i+1
      array.push(' ' + count + '. ' + katzDeliLine[i])
    }
      return "The line is currently: " + array

    }
    else {
      return 'The line is currently empty.'
    }

  }


// for (var i = 0; i < name.length; i++) {
//   array.push('Welcome, ' name[i] + '. You are number ' + katzDeliLine[i]+1 + ' in line.')
// }
//return array
