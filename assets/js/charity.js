function clientPartOfCharity (clientPayment, partOfPayment) {
    let amount = clientPayment * partOfPayment;
    //Get element with id of toys
    let el = document.getElementById("toys");
    el.innerText = `After each of your payments, ${amount} € go to the Fundraising.`;
};