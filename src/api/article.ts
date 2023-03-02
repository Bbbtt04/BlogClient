import request from '@/utils/request'

export const getArchive = () => {
  return request.get('/article/archive')
}

export const indexData = (query: any) => {
  return request.get('/site/index', { params: query })
}

export const getArticle = (id: any) => {
  return request.get(`/article/${id}`)
}
