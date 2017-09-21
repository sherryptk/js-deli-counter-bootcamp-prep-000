function takeANumber(katzDeliLine, name){

  var line = 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length+1) + ' in line.'

  katzDeliLine.push(name)

  return line

}

function nowServing(katzDeliLine){

  var name = katzDeliLine[0]

  katzDeliLine.unshift()

  return "Currently serving" + name + "."

}

// Build a function nowServing. This function should return the first person in line and then remove that
// individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"


// for (var i = 0; i < name.length; i++) {
//   array.push('Welcome, ' name[i] + '. You are number ' + katzDeliLine[i]+1 + ' in line.')
// }
//return array
