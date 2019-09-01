const handlerUesrRouter = (req, res) => {
	const method = req.method
	const url = req.url
	const path = url.split("?")[0]

	if (method === "POST" && path === "/api/user/login") {
		return {
			msg: "这是一个登陆路由"
		}
	}
}

module.exports = handlerUesrRouter
