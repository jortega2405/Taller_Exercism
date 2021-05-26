
export const hey = (message) => {
  message = message.trim();
  let quest = Boolean(message.indexOf('?') == message.length - 1); 
  let shout = Boolean(message.toUpperCase() == message && /[A-Z]/i.test(message));

  let response = 'Whatever.';
  if (!message) response = 'Fine. Be that way!';
  else if (shout && quest) response = "Calm down, I know what I'm doing!";
  else if (quest) response = 'Sure.';
  else if (shout) response = 'Whoa, chill out!';
  return response;
};