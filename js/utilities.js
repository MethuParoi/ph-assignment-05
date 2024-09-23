// get the value of the donation amount

function getDonationAmount(id) {
  const donationAmount = document.getElementById(id).value;
  const donationAmountNumber = parseFloat(donationAmount);
  return { donationAmountNumber, id };
}

// Set donation time
function setDonationTime() {
  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const formattedTime = formattedDate.replace(/,/g, "");

  return formattedTime;
}

// Create donation history
function addDonationElement(amount, purpose) {
  const date = setDonationTime();
  const newDiv = document.createElement("div");
  newDiv.classList.add(
    "flex",
    "flex-col",
    "gap-x-5",
    "w-full",
    "h-[200px]",
    "md:h-[150px]",
    "border-gray-300",
    "border-2",
    "p-5",
    "rounded-xl",
    "my-10"
  );

  newDiv.innerHTML = `
                <h1 class="text-xl md:text-2xl font-semibold my-5 line-clamp-2">
                    <span id="donation">${amount}</span> Taka is Donated for <span id="donation-purpose">${purpose}</span>
                </h1>
                <p class="text-lg md:text-xl text-gray-600 line-clamp-2">
                    Date: <span id="date">${date}</span> GMT +0600 (Bangladesh Standard Time)
                </p>
            `;

  document.getElementById("history-card").appendChild(newDiv);
}
