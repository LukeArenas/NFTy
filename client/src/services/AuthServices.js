import Client from './'

export const Login = async (formData) => {
  try {
    const res = await Client.post(`/auth/login`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetLogin = async () => {
  try {
    const res = await Client.get(`/auth/login`)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const Register = async (formData) => {
  try {
    const res = await Client.post(`/auth/register`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}
