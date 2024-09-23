document.getElementById('btn-donation')
.addEventListener('click',function(){
    activeButton('donation-section');
    document.getElementById('btn-donation').classList.add('bg-[#B4F461]');

});
document.getElementById('btn-history')
.addEventListener('click',function(){
    activeButton('history-section');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');

});