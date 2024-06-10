import { participantTemplate, successTemplate } from './templates.js';

let participantCount = 1;

document.getElementById('addParticipant').addEventListener('click', () => {
  participantCount++;
  const newParticipant = participantTemplate(participantCount);
  document.querySelector('.participants').insertAdjacentHTML('beforeend', newParticipant);
});

document.getElementById('registrationForm').addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent the form from reloading the page

  const totalFee = totalFees();
  const adultName = document.getElementById('adult_name').value;
  const message = successTemplate({ name: adultName, count: participantCount, fee: totalFee });

  document.querySelector('.testbox').style.display = 'none';  // Hide the form
  document.getElementById('summary').innerHTML = message;  // Show the summary message
});

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  const total = feeElements.reduce((sum, element) => sum + parseFloat(element.value || 0), 0);
  return total;
}
