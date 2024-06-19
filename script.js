function handleCredentialResponse(response) {
  decodeJwtResponse(response.credential);
  //console.log(response.credential);
}

function decodeJwtResponse(token) {
  const data = jwt_decode(token)
  //console.log(data)

  fullName.textContent = data.name
  sub.textContent = data.sub
  given_name.textContent = data.given_name
  family_name.textContent = data.family_name
  email.textContent = data.email
  verifiedEmail.textContent = data.email_verified
  picture.setAttribute("src", data.picture)
}
