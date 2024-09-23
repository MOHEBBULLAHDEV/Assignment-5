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
    const currentAccountBalance = accountBalance - donationAmount;
    console.log(currentAccountBalance);
    const currentNoakhaliDonationBalance = noakhaliDonationBalance + donationAmount;
    console.log(currentNoakhaliDonationBalance);
    if (currentAccountBalance => donationAmount && donationAmount > 0) {
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('noakhali-donation-balance').innerText = currentNoakhaliDonationBalance;
        
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
    const currentAccountBalance = accountBalance - donationAmount;
    const currentFeniDonationBalance = feniDonationBalance + donationAmount;
    if (accountBalance => donationAmount && donationAmount > 0) {
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('feni-donation-balance').innerText = currentFeniDonationBalance;
        
    }


  });




document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const accountBalance = parseFloat(
      document.getElementById("account-balance").innerText
    );
    const feniDonationBalance = parseFloat(
      document.getElementById("quota-donation-balance").innerText
    );

    const donationAmount = parseFloat(donateBangladesh("donate-for-quota"));
    const currentAccountBalance = accountBalance - donationAmount;
    const currentQuotaDonationBalance = feniDonationBalance + donationAmount;
    if (accountBalance => donationAmount && donationAmount > 0) {
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('quota-donation-balance').innerText = currentQuotaDonationBalance;
        
    }


  });