function getCoupons() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['coupon1', 'coupon2', 'coupon3']), Math.random() * 10);
  });
}

function tryCoupon(coupon = '') {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.random() * 100), Math.random() * 10);
  });
}

function getBestCoupon() {
  let largestDiscountCoupon = null;
  let largestDiscountAmount = -Infinity;
  return new Promise((resolve) => {
    getCoupons()
      .then(arrayOfCoupons => {
        const arrayOfTryPromises = arrayOfCoupons.map(currentCoupon => {
          return tryCoupon(currentCoupon)
        })
        Promise.all(arrayOfTryPromises).then(couponDiscountAmounts => {
          for (let i = 0; i < couponDiscountAmounts.length; i += 1) {
            if (couponDiscountAmounts[i] > largestDiscountAmount) {
              largestDiscountAmount = couponDiscountAmounts[i];
              largestDiscountCoupon = arrayOfCoupons[i];
            }
          }
          resolve(largestDiscountCoupon)
        })
      })

  })
}

getBestCoupon().then(bestCoupon => console.log(bestCoupon));







