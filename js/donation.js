document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const accountBalance = parseFloat(
      document.getElementById("account-balance").innerText
    );
    const noakhaliDonationBalance = parseFloat(
      document.getElementById("noakhali-donation-balance").innerText
    );

    const donationAmount = parseFloat(donateBangladesh("donate-for-noakhali"));

    if (accountBalance >= donationAmount && donationAmount > 0) {
      const currentAccountBalance = accountBalance - donationAmount;
      const currentNoakhaliDonationBalance =
        noakhaliDonationBalance + donationAmount;
      document.getElementById("account-balance").innerText =
        currentAccountBalance;
      document.getElementById("noakhali-donation-balance").innerText =
        currentNoakhaliDonationBalance;
      const title = document.getElementById("noakhali-title").innerText;
      const section = document.getElementById("history-section");
      const d = new Date();
      d.setFullYear(2024);

      const div = document.createElement("div");
      div.classList.add("border", "rounded-md",  "pl-4", "my-8", "py-4");
      div.innerHTML = `<p>${donationAmount} ${title}</p> <p>Date: ${d}</p>`;
      section.appendChild(div);
      const modal = document.getElementById("myModal");
      modal.classList.remove("hidden");
      const closeModalBtn = document.getElementById("closeModalBtn");
      closeModalBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.classList.add("hidden");
          }
        });
      });
    } else {
      alert("Please Enter valid Input");
    }
  });

document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const accountBalance = parseFloat(
      document.getElementById("account-balance").innerText
    );
    const feniDonationBalance = parseFloat(
      document.getElementById("feni-donation-balance").innerText
    );

    const donationAmount = parseFloat(donateBangladesh("donate-for-feni"));

    if (accountBalance >= donationAmount && donationAmount > 0) {
      const currentAccountBalance = accountBalance - donationAmount;
      const currentFeniDonationBalance = feniDonationBalance + donationAmount;
      document.getElementById("account-balance").innerText =
        currentAccountBalance;
      document.getElementById("feni-donation-balance").innerText =
        currentFeniDonationBalance;
      const title = document.getElementById("feni-title").innerText;
      const section = document.getElementById("history-section");
      const d = new Date();
      d.setFullYear(2024);

      const div = document.createElement("div");
      div.classList.add("border", "rounded-md",  "pl-4", "my-8", "py-4");
      div.innerHTML = `<p>${donationAmount} ${title}</p> <p>Date: ${d}</p>`;
      section.appendChild(div);
      const modal = document.getElementById("myModal");
      modal.classList.remove("hidden");
      const closeModalBtn = document.getElementById("closeModalBtn");
      closeModalBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.classList.add("hidden");
          }
        });
      });
    } else {
      alert("Please Enter valid Input");
    }
  });

document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const accountBalance = parseFloat(
      document.getElementById("account-balance").innerText
    );
    const quotaDonationBalance = parseFloat(
      document.getElementById("quota-donation-balance").innerText
    );

    const donationAmount = parseFloat(donateBangladesh("donate-for-quota"));

    if (accountBalance >= donationAmount && donationAmount > 0) {
      const currentAccountBalance = accountBalance - donationAmount;
      const currentQuotaDonationBalance = quotaDonationBalance + donationAmount;
      document.getElementById("account-balance").innerText =
        currentAccountBalance;
      document.getElementById("quota-donation-balance").innerText =
        currentQuotaDonationBalance;
      const title = document.getElementById("quota-title").innerText;
      const section = document.getElementById("history-section");
      const d = new Date();
      d.setFullYear(2024);

      const div = document.createElement("div");
      div.classList.add("border", "rounded-md",  "pl-4", "my-8", "py-4");
      div.innerHTML = `<p>${donationAmount} ${title}</p> <p>Date: ${d}</p>`;
      section.appendChild(div);
      const modal = document.getElementById("myModal");
      modal.classList.remove("hidden");
      const closeModalBtn = document.getElementById("closeModalBtn");
      closeModalBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.classList.add("hidden");
          }
        });
      });
    } else {
      alert("Please Enter valid Input");
    }
  });
