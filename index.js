function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}



  function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}



function scuberGreetingForFeet(feet) {
  switch (true) {
    case feet <= 400:
      return 'This one is on me!';
    case feet > 400 && feet <= 2000:
      return 'That will be twenty bucks.';
    case feet > 2000 && feet <= 2500:
      return 'I will gladly take your thirty bucks.';
    default:
      return 'No can do.';
  }
}
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

