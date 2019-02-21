export const totalPrice = document.getElementById("range_start").addEventListener("change", (event) => {
  const price = document.getElementById('total-price');
  const day_price = parseInt(document.getElementById('day-price').innerText);
  const start_day = new Date(event.target.value.split(' to ')[0]);
  const end_day = new Date(event.target.value.split(' to ')[1]);
  const timeDiff = Math.abs(end_day.getTime() - start_day.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  price.innerText = diffDays * day_price;
});

