const precioOrigial = 100
const descuento = 18

function calcularPrecioConDescueto(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function Coupon(NOMBRE, VALOR, DESCUENTO){
    this.nombre = NOMBRE
    this.valor = VALOR
    this.descuento = DESCUENTO
}

const coupons = [
    new Coupon('Back friday', 'BKFR2022', 10),
    new Coupon('Navideño','CHRSDAY2022', 25),
    new Coupon('Año nuevo','NYR2023', 15),
]

function calculatePriceWithDiscount(){
    const inputPrice = document.getElementById('InputPrice')
    const inputDiscount = document.getElementById('InputDiscount')
    const inputCoupon = document.getElementById('InputCoupon')
    const resultPriceElement = document.getElementById('results')
    resultPriceElement.innerHTML = ''
    
    const priceValue = Number.parseFloat(inputPrice.value)
    const discountValue = Number.parseFloat(inputDiscount.value)
    const couponValue = inputCoupon.value
    
    const originalPrice = document.createElement('p')
    originalPrice.innerText = '$' + priceValue
    resultPriceElement.appendChild(originalPrice)

    let priceWithDiscount = calcularPrecioConDescueto(priceValue, discountValue)
    const priceWithDiscountElement = document.createElement('p')
    resultPriceElement.appendChild(priceWithDiscountElement)
    priceWithDiscountElement.innerText = '$' + priceWithDiscount

    console.log(couponValue)
    if(!Boolean(couponValue)) return

    const cuponValido = coupons.find( cupon => cupon.valor === couponValue )
    console.log(`Cupon: ${couponValue}, cupong valido: ${cuponValido}`)
    if(!Boolean(cuponValido)) return

    let priceWithDiscountAndCoupon = calcularPrecioConDescueto(priceWithDiscount, cuponValido.descuento)
    const priceWithDiscountAndCouponElemenet = document.createElement('p')
    priceWithDiscountAndCouponElemenet.classList = 'finalPrince'
    priceWithDiscountAndCouponElemenet.innerText = '$' + priceWithDiscountAndCoupon
    resultPriceElement.appendChild(priceWithDiscountAndCouponElemenet)


}