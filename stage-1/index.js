const handlerBlogRouter = require("./src/router/blog")
const handlerUserRouter = require("./src/router/user")

const serverHandle = (req, res) => {
	// 设置返回格式 json
	res.setHeader("Content-type", "application/json")
	//  匹配到 blog 路由的时候
	const blogData = handlerBlogRouter(req, res)
	if (blogData) {
		res.end(JSON.stringify(blogData))
		return
	}
	//  匹配到 user 路由
	const userData = handlerUserRouter(req, res)
	if (userData) {
		res.end(JSON.stringify(userData))
		return
	}

	// 未匹配到路由 404
	res.writeHead(404, { "Content-type": "text/plan" })
	res.write("404 Not Found \n")
	res.end()
}

module.exports = serverHandle
