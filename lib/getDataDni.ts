export async function getDataDni(dni: string) {
  const response = await fetch(
    `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=${process.env.NEXT_PUBLIC_TOKEN_URI_DNI}`
  )
  const { nombres, apellidoPaterno, apellidoMaterno } = await response.json()
  return nombres + ' ' + apellidoPaterno + ' ' + apellidoMaterno
}
