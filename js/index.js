// Donation and history functionalities
let balance = 100000;
document.getElementById("balance").innerHTML = balance;

//variables for donation amount
let noakhaliDonationAmount = 0;
let feniDonationAmount = 0;
let quotaDonationAmount = 0;

// Function to apply styles
function applyStyles(element, styles) {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
}

// Define hidden and visible styles
const hidden = {
  display: "none",
};

const visible = {
  display: "block",
};

//modal functionalities
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modalButton = document.getElementById("modal-close-btn");

modalButton.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

function showModal(amount) {
    document.getElementById("modal-amount").innerHTML = amount;
    modal.style.display = "flex";
    overlay.style.display = "block";
    overlay.style.backdropFilter = "blur(10px)";
}

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
        addDonationElement(donationAmount, "Flood aid in Noakhali, Bangladesh");
      } else if (donatioId === "feni-donation-amnt") {
        feniDonationAmount += donationAmount;
        document.getElementById("donation-feni").innerHTML = feniDonationAmount;
        addDonationElement(donationAmount, "Flood aid in Feni, Bangladesh");
      } else if (donatioId === "quota-donation-amnt") {
        quotaDonationAmount += donationAmount;
        document.getElementById("donation-quota").innerHTML =
          quotaDonationAmount;
        addDonationElement(
          donationAmount,
          "aid of Injured in the Quota Movement, Bangladesh"
        );
      }
      //   alert(`Donated ${donationAmount} taka`);
      showModal(donationAmount);
    }
  });
});

//blur functonality
const blurSection = document.getElementById("section-blur");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    blurSection.classList.add("backdrop-blur-md");
  } else {
    blurSection.classList.remove("backdrop-blur-md");
  }
});

// Donation and history functionalities
const historyButton = document.getElementById("history-btn");
const donationButton = document.getElementById("donation-btn");
const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");
const historyCard = document.getElementById("history-card");
const footer = document.getElementById("footer-section");

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



// Initially activate the donation button
applyStyles(donationButton, activeStyles);
applyStyles(historyButton, inactiveStyles);

// Event listener for click
historyButton.addEventListener("click", () => {
  applyStyles(historyButton, activeStyles);
  applyStyles(donationButton, inactiveStyles);
  applyStyles(donationSection, hidden);
  applyStyles(historySection, visible);
  applyStyles(historyCard, visible);
  applyStyles(footer, hidden);
});

// Event listener for click
donationButton.addEventListener("click", () => {
  applyStyles(donationButton, activeStyles);
  applyStyles(donationSection, visible);
  applyStyles(historySection, hidden);
  applyStyles(historyCard, hidden);
  applyStyles(footer, visible);
  applyStyles(historyButton, inactiveStyles);
});
