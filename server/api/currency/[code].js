export default defineEventHandler(async (event) => {

  const { code } = event.context.params
  const { currencyKey } = useRuntimeConfig() // Pegando a variável de ambiente que foi definida

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`
  
  const { data } = await $fetch(uri)

  return data
})