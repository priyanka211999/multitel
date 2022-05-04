export const formatAmount = (amountToFormat) => {
    /* --
    1. toLocaleString is used to format the number as 1,000,00
    2. Requirement - must have 2 digits after decimal
    hence maximumFractionDigits, minimumFractionDigits properties is used to forcefully add two digits even when there are no decimal point.
    3. return the amount as $1,000,00.00
    4. if the parameter passed to function is not of type number, return null.
    -- */
    if (!isNaN(amountToFormat)) {
      if (amountToFormat >= 0) {
        const formattedAmount = Number(amountToFormat).toLocaleString('en-AU', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 })
        return `$${formattedAmount}`
      } else {
        const formattedAmount = Number(Math.abs(amountToFormat)).toLocaleString('en-AU', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 })
        return `-$${formattedAmount}`
      }
    }
    return null
  }