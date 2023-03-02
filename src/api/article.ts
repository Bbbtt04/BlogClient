import request from '@/utils/request'

export const getArchive = () => {
  return request.get('/article/archive')
}

export const indexData = () => {
  return request.get('/site/index')
}

export const getArticle = (id: any) => {
  return request.get(`/article/${id}`)
}
