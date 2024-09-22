// Donation and history functionalities
let balance = 5500;

const donateNowButtons = [
  { id: "donate-now-btn-noakhali", inputId: "noakhali-donation-amnt" },
  { id: "donate-now-btn-feni", inputId: "feni-donation-amnt" },
  { id: "donate-now-btn-quota", inputId: "quota-donation-amnt" },
];

donateNowButtons.forEach(({ id, inputId }) => {
  const button = document.getElementById(id);
  button.addEventListener("click", () => {
    const donationAmount = getDonationAmount(inputId);

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
    } else {
      alert(`Donated ${donationAmount} taka`);
    }
  });
});

// Donation and history functionalities
const historyButton = document.getElementById("history-btn");
const donationButton = document.getElementById("donation-btn");

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
});

// Event listener for click
donationButton.addEventListener("click", () => {
  applyStyles(donationButton, activeStyles);
  applyStyles(historyButton, inactiveStyles);
});
