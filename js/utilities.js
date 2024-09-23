// get the value of the donation amount

function getDonationAmount(id) {
  const donationAmount = document.getElementById(id).value;
  const donationAmountNumber = parseFloat(donationAmount);
  return { donationAmountNumber, id };
}
