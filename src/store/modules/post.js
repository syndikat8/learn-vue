export  default {
  actions: {
    async getPosts(ctx, limit=3){
      const response = await fetch(
       `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      )
      const posts = await response.json()
      ctx.commit("updatePosts", posts)
    }
  },
  mutations: {
    updatePosts(state, posts){
      state.posts = posts
    },
    createPost(state,newPost){
      state.posts.unshift(newPost)
    }
  },
  state: {
    posts: []
  },
  getters: {
    validPosts(state){
      return state.posts.filter(p=> {
        return p.title && p.body
      })
    },
    allPosts(state){
      return state.posts
    },
    postsCount(state, getters){
      return getters.validPosts.length
    }
  },
}
