function activeButton(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
  return  document.getElementById(id).classList.remove('hidden');
 

    
}
function donateBangladesh(id) {
   const donation = document.getElementById(id).value;
   return donation;
    
}
function totalDonation(id) {
    const donationBalance = document.getElementById(id).value;
    return donationBalance;
    
}