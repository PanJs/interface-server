##测试环境
##上传代码到测试服务器
sync-dev:
	rsync -az -v -r --delete-after --force \
	  --filter="- node_modules" \
	  --filter="- coverage" \
	  --filter="- logs" \
	  --filter="- run" \
	  --filter="- test" \
	  --filter="- README.zh-CN.md" \
	  --filter="- README.md" \
	  --filter="+ app**" \
	  --filter="+ config**" \
	  --filter="+ index.js" \
	  --filter="+ package.json" \
	  --filter="+ yarn.lock" \
	  --filter="- *" \
	  -e "ssh -p 56622" \
	  ./ \
	  ymmapp@116.62.46.217:~/server/interface-server

#安装依赖
install-dev:
	ssh -p 56622 ymmapp@116.62.46.217 "cd ~/server/interface-server && yarn install"
#启动服务
run-dev:
	ssh -p 56622 ymmapp@116.62.46.217 "cd ~/server/interface-server && pm2 start index.js --name="interface""
#重启服务
restart-dev:
	ssh -p 56622 ymmapp@116.62.46.217 "pm2 restart interface"
#更新代码并重启服务
deploy-dev:sync-dev install-dev restart-dev
