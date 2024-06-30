// 一些常用的linux命令
// 1. ls 查看目录
// 2. cd 切换目录
// 3. pwd 查看当前路径
// 4. mkdir 创建文件夹
// 5. touch 创建文件
// 6. rm 删除文件
// 7. rmdir 删除文件夹
// 8. cp 复制文件
// 9. mv 移动文件
// 10. ln 创建链接
// 11. rm -rf 删除文件夹
// 12. chmod 修改权限
// 13. find 查找文件
// 14. tree 查看目录结构
// 15. 连接远程服务器 ssh username@ip
// 16. 查看系统信息 uname -a
// 17. 查看系统内核信息 uname -r
// 18. 查看系统版本信息 cat /etc/issue

// linux下 `cd ..` 和 `cd ../` 是一样的
// linux下 `cd -` 返回上一层目录
// linux下 `cd ~` 返回家目录
// linux下 `cd /` 返回根目录

// `cd ~` 和 `cd /` 是一样的

// linux 的包管理工具
//  yum
//  apt
//  yum 和 apt 是一样的

// 一些必要的包: 
// 1. nodejs
// 2. npm
// 3. git
// 4. vim
// 5. wget
// 6. unzip
// 7. zip
// 8. tar
// 9. nginx
// 10. docker

// 怎么安装nvm 
// 1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
// 2. `nvm install node` 选择版本
// 3. `nvm use node`

// 怎么安装nginx
// 1. `sudo apt install nginx`
// 2. `sudo nginx -v`

// 怎么安装docker
// 1. `sudo apt install docker.io`
// 2. `sudo docker -v`

// 怎么安装git
// 1. `sudo apt install git`

// git 配置
// 1. `git config --global user.name "yourName"`
// 2. `git config --global user.email "yourEmail"`
// 3. `git config --global core.editor "vim"`
// 4. `git config --global color.ui true`
// 5. `git config --global init.defaultBranch main`
// 6. `git config --global pull.rebase true`

 // git 使用ssh
// 1. `ssh-keygen -t rsa -b 4096 -C "yourEmail"`
// 2. `cat ~/.ssh/id_rsa.pub`
// 3. `ssh-add ~/.ssh/id_rsa`
//   这里的`~`是你的家目录, 这里不能用`/`代替`~`, 因为这个是linux的特殊符号

// 在linux下输入 `ssh -T username@ip` 就能连接到服务器了
//  这里的`-T`是用于指定使用的是ssh协议, 不写的话就是telnet协议

// 注意: 你在linux输入密码的时候是不会显示的, 需要在终端输入`stty -echo`

// 怎么安装vim
// 1. `sudo apt install vim`
// 2. `vim --version`

// vim 配置
// 1. `vim ~/.vimrc`
// 2. `set number` 显示行号
// 3. `set cursorline` 显示光标所在的行
// 4. `set showmatch` 显示括号匹配

// vim的快捷键
// 1. `i` 进入插入模式
// 2. `esc` 退出插入模式
// 3. `:w` 保存文件
// 4. `:q` 退出文件
// 5. `:wq` 保存退出文件

// 在使用vim时需要注意以下几点
// 1. vim是以文本模式来工作的，所以在vim中输入命令时，需要在命令前加入`:`，这个`:`是vim的命令前缀

// 怎么安装nano
// 1. `sudo apt install nano`

// nano 配置
// 1. `nano ~/.nanorc`

// nano的快捷键
// 1. `i` 进入插入模式
// 2. `esc` 退出插入模式
// 3. `:w` 保存文件
// 4. `:q` 退出文件
// 5. `:wq` 保存退出文件

// 在使用nano时需要注意以下几点
// 1. nano是以文本模式来工作的，所以在nano中输入命令时，需要在命令前加入`#`，这个`#`是nano的命令前缀

// vim和nano的区别
// 1. vim是以文本模式来工作的，所以在vim中输入命令时，需要在命令前加入`:`，这个`:`是vim的命令前缀
// 2. nano是以行模式来工作的，所以在nano中输入命令时，需要在命令前加入`#`，这个`#`是nano的命令前缀