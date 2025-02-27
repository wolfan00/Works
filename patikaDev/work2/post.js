const post = [
    {title:'post1',context:'Bu benim ilk postum'},
    {title:'post2', context:'Bu ise ikinci postum'}
]

const listPost = ()=>{
    post.map(post =>{
        console.log(post.title)
    })
}

const addPost= (newPost)=>{
    const promise = new Promise((resolve,reject)=>{
        post.push(newPost)
        resolve()
        reject('bir hata oluştu')
    })
    return promise
}
async function showPost() {
    try{
        await addPost({title: 'YeniPost',context: 'Yeni postum'})
        listPost()
    }
    catch(error){console.log(error)}
}
showPost()
