import Client from './'

export const GetAllPosts = async () => {
  try{
    const res = await Client.get('/posts')
    return res.data
  }catch (error){
    throw error
  }
}

export const UpdatePost = async (id) => {
  try {
    const res = await Client.put(`/posts/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeletePost = async (id) => {
  try {
    await Client.delete(`/posts/${id}`)
  } catch (error) {
    throw error
  }
}