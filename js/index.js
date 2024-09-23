// Donation and history functionalities
let balance = 10000;
document.getElementById("balance").innerHTML = balance;
//variables for donation amount
let noakhaliDonationAmount = 0;
let feniDonationAmount = 0;
let quotaDonationAmount = 0;

const donateNowButtons = [
  { id: "donate-now-btn-noakhali", inputId: "noakhali-donation-amnt" },
  { id: "donate-now-btn-feni", inputId: "feni-donation-amnt" },
  { id: "donate-now-btn-quota", inputId: "quota-donation-amnt" },
];

donateNowButtons.forEach(({ id, inputId }) => {
  const button = document.getElementById(id);
  button.addEventListener("click", () => {
    const donationDetails = getDonationAmount(inputId);
    const donationAmount = donationDetails.donationAmountNumber;
    const donatioId = donationDetails.id;

    if (donationAmount === "") {
      alert("Please enter a valid amount");
      return;
    } else if (donationAmount < 0) {
      alert("Please enter a valid amount");
      return;
    } else if (isNaN(donationAmount)) {
      alert("Please enter a valid amount");
      return;
    } else if (donationAmount === 0) {
      alert("Please enter a valid amount");
      return;
    } else if (donationAmount > balance) {
      alert("Please enter a valid amount");
      return;
    } else {
      balance -= donationAmount;
      document.getElementById("balance").innerHTML = balance;
      if (donatioId === "noakhali-donation-amnt") {
        noakhaliDonationAmount += donationAmount;
        document.getElementById("donation-noakhali").innerHTML =
          noakhaliDonationAmount;
      } else if (donatioId === "feni-donation-amnt") {
        feniDonationAmount += donationAmount;
        document.getElementById("donation-feni").innerHTML = feniDonationAmount;
      } else if (donatioId === "quota-donation-amnt") {
        quotaDonationAmount += donationAmount;
        document.getElementById("donation-quota").innerHTML =
          quotaDonationAmount;
      }
      alert(`Donated ${donationAmount} taka`);
    }
  });
});

// Donation and history functionalities
const historyButton = document.getElementById("history-btn");
const donationButton = document.getElementById("donation-btn");
const donationSection = document.getElementById("donation-section");

// Define active and inactive styles
const activeStyles = {
  backgroundColor: "#bef264",
  color: "black",
};

const inactiveStyles = {
  backgroundColor: "white",
  color: "gray",
  border: "2px solid #d1d5db",
};

// Define hidden and visible styles
const hidden = {
  display: "none",
};

const visible = {
  display: "block",
};

// Function to apply styles
function applyStyles(element, styles) {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
}

// Initially activate the donation button
applyStyles(donationButton, activeStyles);
applyStyles(historyButton, inactiveStyles);

// Event listener for click
historyButton.addEventListener("click", () => {
  applyStyles(historyButton, activeStyles);
  applyStyles(donationButton, inactiveStyles);
  applyStyles(donationSection, hidden);
});

// Event listener for click
donationButton.addEventListener("click", () => {
  applyStyles(donationButton, activeStyles);
  applyStyles(donationSection, visible);
  applyStyles(historyButton, inactiveStyles);
});
