

export const totalPrice = () => {
 const tPrice = document.getElementById("range_start")

 if (tPrice) {
  tPrice.addEventListener("change", (event) => {
  const price = document.getElementById('total-price');
  const day_price = parseInt(document.getElementById('day-price').innerText);
  const dateArr = event.target.value.split(' to ')
  const start_day = new Date(dateArr[0]);
  let end_day
  if (dateArr[1]) {
    end_day = new Date(dateArr[1]);
  } else {
    end_day = new Date(dateArr[0]);
  }
  const timeDiff = Math.abs(end_day.getTime() - start_day.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  console.log(`Start day: ${start_day}`)
  console.log(`End day: ${end_day}`)
  console.log(`Start day time: ${start_day.getTime()}`)
  console.log(`End day time: ${end_day.getTime()}`)
  console.log(day_price);

  price.innerText = diffDays * day_price;
 })
}
}

// export const totalPrice = document.getElementById("range_start").addEventListener("change", (event) => {
//   const price = document.getElementById('total-price');
//   const day_price = parseInt(document.getElementById('day-price').innerText);
//   const start_day = new Date(event.target.value.split(' to ')[0]);
//   const end_day = new Date(event.target.value.split(' to ')[1]);
//   const timeDiff = Math.abs(end_day.getTime() - start_day.getTime());
//   const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
//   price.innerText = diffDays * day_price;
// });

