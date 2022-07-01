import { calculateAge } from '../../functions/age'

const age = (req, res) => {
  try {
    const { birthday, endDate } = req.query
    if (!birthday || !endDate) {
      return res.status(400).json({ message: 'Please select birthdate and end date' })
    }
    const age = calculateAge(new Date(birthday), new Date(endDate))

    res.json({ age })
  } catch (error) {
    res.status(500).end({ message: 'Please check your input' })
  }
}

export default age
