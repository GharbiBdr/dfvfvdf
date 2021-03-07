import { API_URL } from '../Config/Config'

export async function apiSignUp (administratorFirstName, administratorLastName, administratorTel, administratorProfessionalAddress, administratorFunction, administratorMail, administratorPassword, entrepriseName, entrepriseMail, entrepriseTel, entrepriseHeadOffice, entrepriseSiret, GCS, logo) {
  const data = new FormData()
  data.append('administratorFirstName', administratorFirstName)
  data.append('administratorLastName', administratorLastName)
  data.append('administratorTel', administratorTel)
  data.append('administratorProfessionalAddress', administratorProfessionalAddress)
  data.append('administratorFunction', administratorFunction)
  data.append('administratorMail', administratorMail)
  data.append('administratorPassword', administratorPassword)
  data.append('entrepriseName', entrepriseName)
  data.append('entrepriseMail', entrepriseMail)
  data.append('entrepriseTel', entrepriseTel)
  data.append('entrepriseHeadOffice', entrepriseHeadOffice)
  data.append('entrepriseSiret', entrepriseSiret)
  data.append('GCS', GCS)
  data.append('logo', logo)
  const response = await fetch(API_URL + '/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: data
  })
  return (response.json())
}
