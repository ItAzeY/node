const handlerBlogRouter = (req, res) => {
	const method = req.method // 获取 get 和 post
	const url = req.url // 获取 url
	const path = req.url.split("?")[0] // 获取地址

	// 获取博客列表的接口
	if (method === "GET" && path === "/api/blog/list") {
		return {
			msg: "这是获取博客列表的接口"
		}
	}

	//  博客详情的接口
	if (method === "GET" && path === "api/blog/detail") {
		return {
			msg: "这是获取博客详情的接口"
		}
	}

	// 删除路由的接口
	if (method === "GET" && path === "api/blog/delete") {
		return {
			msg: "这是删除博客的接口"
		}
	}
}

module.exports = handlerBlogRouter
