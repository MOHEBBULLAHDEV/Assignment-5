
document.getElementById("btn-donate-feni")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const accountBalance = parseFloat(
      document.getElementById("account-balance").innerText
    );
    const feniDonationBalance = parseFloat(
      document.getElementById("feni-donation-balance").innerText
    );

    const donationAmount = parseFloat(donateBangladesh("donate-for-feni"));
 
    if (accountBalance > donationAmount && donationAmount > 0) {
      const currentAccountBalance = accountBalance - donationAmount;
      const currentFeniDonationBalance = feniDonationBalance + donationAmount;
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('feni-donation-balance').innerText = currentFeniDonationBalance;
        
    }


  });




document.getElementById("btn-donate-quota")
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
    if (accountBalance > donationAmount && donationAmount > 0) {
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('quota-donation-balance').innerText = currentQuotaDonationBalance;
        
    }


  });