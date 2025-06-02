# next
the dessertation
# 管理代码版本， 记录，切换，合并代码   
# 全局配置用户名   
`git config --global user.name "guohuan"`   

# 全局配置邮箱  
`git config --global user.email "yanggh1234@126.com"`  

# 查看配置项  
`git config --list`  

# git仓库，记录文件状态内容的地方，存储着修改的历史记录  
# 初始化git仓库  
`git init`  

# 工作区：实际开发时操作的文件夹  
# 暂存区：保存之前的准备区域  
# 版本库：提交并保存暂存区中的内容，产生一个版本快照  
# 暂存指定文件  
`git add <文件名>`  

# 暂存所有改动的文件  
`git add .`  
  
# 提交并保存，产生版本快照  
`git commit -m "<注释>"`  

# git两种状态  
# 未跟踪 ：新文件，从未被git管理过  
# 已跟踪：git已经知道和管理的文件  
# 未跟踪 U： 从未被git管理过，场景：新文件  
# 新添加 A：第一次被git暂存，之前版本记录无此文件  
# 未修改 "： 三个区域统一，提交保存后  
# 已修改 M： 工作区内容变化，修改了内容产生  
# 查看git文件状态  
`git status -s`  
  
# 查看暂存区文件  
`git ls-files`  
  
# 暂存区：暂时存储，可以临时恢复代码内容，与版本库解耦  
# 暂存区 > 覆盖 > 工作区  
`git restore <目标文件>`  
  
# 从暂存区移除文件  
`git rm --cached <目标文件>`  
  
# git回退版本  
# 把版本库某个版本对应的内容快照，恢复到工作区/暂存区  
# 查看提交历史  
`git log --oneline`  
  
# 回退命令  
`git reset --soft <版本号>`  
`git reset --hard <版本号>`  
`git reset --mixed <版本号>`  
  
# 分支，开发新需求 / 修复Bug，保证主线代码随时可用， 多人协同开发提高效率  
# 指针，指向提交记录， head指针影响暂存区和工作区的代码  
# 创建新分支  
`git branch <分支名>`  
  
# 切换分支  
`git checkout <分支名>`  
  
# 合并分支  
`git merge <分支名>`  
  
# 删除分支  
`git branch -d <分支名>`  
  
# 合并与提交，发生于原分支产生了新的提交记录后，再次合并回去时发生，自动使用多个快照记录合并后产生一次新的提交  
# 提交记录的顺序按照产生的先后顺序排列，而非合并的先后顺序  
  
# 合并冲突，解决之后，再次添加提交  
  
# 查看完整历史  
`git reflog --oneline`  
  
# 远程仓库  
`git remote add <远程仓库别名> <远程仓库地址>`  
`git remote add origin https://github.com/daxiayang23/server_api.git`  
  
# 查看远程仓库地址  
`git remote -v`  
  
# 移除远程仓库地址  
`git remote remove <别名>`  
`git remote remove origin`  
  
# 推送版本记录到远程仓库   
`git push -u origin master`  
`git push --set-upstream origin main`  

# 克隆：拷贝一个git仓库到本地进行使用
# 注意1：git本地仓库已经建立好和远程仓库的连接
# 注意2：仓库公开随意克隆，推送需要身为仓库团队成员
`git clone <远程仓库地址>`
`git clone https://github.com/daxiayang23/server_api.git`
