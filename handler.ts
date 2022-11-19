const generarToken = (event): object => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: event
    })
  }
}

export { generarToken }
