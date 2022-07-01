
export const calculateAge = (birthdate = new Date(), endDate = new Date()) => {
  const yearOfBirthdate = birthdate.getFullYear()
  const yearOfEndDate = endDate.getFullYear()

  const yearDifferince = yearOfEndDate - yearOfBirthdate

  const isBirthYearLeap = (yearOfBirthdate % 4 === 0) || (yearOfBirthdate % 400 === 0 && yearOfBirthdate % 100 === 0)
  const isEndYearLeap = (yearOfEndDate % 4 === 0) || (yearOfEndDate % 400 === 0 && yearOfEndDate % 100 === 0)

  const dayDiff = getDayOfYear(endDate) - getDayOfYear(birthdate)

  if (isBirthYearLeap === isEndYearLeap) {
    if (dayDiff >= 0) return yearDifferince
    return yearDifferince - 1
  } else {
    if (birthdate.getMonth() > 1) {
      if (isBirthYearLeap) {
        if (dayDiff >= -1) return yearDifferince
        return yearDifferince - 1
      } else {
        if (dayDiff >= 1) return yearDifferince
        return yearDifferince - 1
      }
    } else {
      if (dayDiff >= 0) return yearDifferince
      return yearDifferince - 1
    }
  }
}

const getDayOfYear = (date = new Date()) => {
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000)
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)
  return day
}
