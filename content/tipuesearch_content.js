var tipuesearch = {"pages": [{'title': 'About', 'text': '協同產品設計實習 \n 倉儲 \n 小組網頁   小組倉儲 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Create Page', 'text': '\n 1. 在 github 建立倉儲，git clone 到近端 \n 2. 參考 https://github.com/mdecycu/cd2022 加入除了 cmsimde 目錄外的所有內容 \n git submodule add https://github.com/mdecourse/cmsimde \n 並從 github 取下子模組內容. \n 3. 在近端維護時, 更換目錄到倉儲中的 cmsimde， \n 以 python wsgi.py 啟動近端網際伺服器， \n 進到網頁修改內容，修改完成後以 generate_pages 轉為靜態內容，將內容推到遠端 \n \n 4.推送完之後，將倉儲setting裡的Github Pages開啟 \n \n \n \n', 'tags': '', 'url': 'Create Page.html'}, {'title': 'Token', 'text': '\n 如何使用 Token 進行推送 \n 1.Settings / developer settings / personal access tokens 申請 token代碼 \n \n 2.可攜程式中找到自己倉儲 / .git 資料夾 / 打開 config / 輸入token代碼 後即可推送 \n \n \n \n', 'tags': '', 'url': 'Token.html'}, {'title': 'Notes', 'text': '\n fatal: unable to access \'https://github.com/40723146/cd2022/\': Could not resolve proxy: github.com \n 透過 git config --global http.proxy http://[2001:288:6004:17::42]:3128 來連線 \n 認證身分 \n git config --global user.name "github帳號名稱" git config --global user.email \'\'github email\'\' \n \n', 'tags': '', 'url': 'Notes.html'}, {'title': 'Group', 'text': 'Siemens and Python related repositories \n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n add 1 to 100 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n', 'tags': '', 'url': 'Group.html'}, {'title': 'Members', 'text': '\n 第4組: repo:\xa0 40623143 \xa0www:\xa0 40623143 \xa0cd2022bg4-repo:\xa0 40623143 \xa0cd2022bg4-www:\xa0 40623143 repo:\xa0 40723146 \xa0www:\xa0 40723146 \xa0cd2022bg4-repo:\xa0 40723146 \xa0cd2022bg4-www:\xa0 40723146 repo:\xa0 40923211 \xa0www:\xa0 40923211 \xa0cd2022bg4-repo:\xa0 40923211 \xa0cd2022bg4-www:\xa0 40923211 repo:\xa0 40923218 \xa0www:\xa0 40923218 \xa0cd2022bg4-repo:\xa0 40923218 \xa0cd2022bg4-www:\xa0 40923218 repo:\xa0 40923221 \xa0www:\xa0 40923221 \xa0cd2022bg4-repo:\xa0 40923221 \xa0cd2022bg4-www:\xa0 40923221 repo:\xa0 40923223 \xa0www:\xa0 40923223 \xa0cd2022bg4-repo:\xa0 40923223 \xa0cd2022bg4-www:\xa0 40923223 repo:\xa0 40923227 \xa0www:\xa0 40923227 \xa0cd2022bg4-repo:\xa0 40923227 \xa0cd2022bg4-www:\xa0 40923227 repo:\xa0 40923238 \xa0www:\xa0 40923238 \xa0cd2022bg4-repo:\xa0 40923238 \xa0cd2022bg4-www:\xa0 40923238 repo:\xa0 40923243 \xa0www:\xa0 40923243 \xa0cd2022bg4-repo:\xa0 40923243 \xa0cd2022bg4-www:\xa0 40923243 \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'Members.html'}, {'title': 'NX1980', 'text': '\n W3 任務 \n 透過 NX1980 版本功能的教學影片(連結)，學習使用NX1980 \n 37 \n 如何透過NX進行浮雕 \n 配合 Wink 檔案將 js 檔案設定如下 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'NX1980.html'}, {'title': 'WINK', 'text': '利用WINK能夠對影片需要說明部分來進行註解 \n \n 打開WINK，PAUSE為擷取畫面熱鍵 ， \n 進行ffmpeg之路徑設定 ， \n 全部擷取完之後更改全部畫面解析度，解析度為1008x630 ， \n 進行標註、註解，最終進行編譯並檢查編譯結果 ， \n 編譯結果若無問題，將檔案(js , mp4 ,wnk)放入倉儲Download資料夾裡 ， \n 之後進行近端修改 ， \n 利用Source code輸入下列程式碼 ， \n <p><!--配合 Wink 檔案將 js 檔案設定如下--></p>\n<script>// <![CDATA[\nvar winkVideoData = { dataVersion: 1, frameRate: 10, buttonFrameLength: 5, buttonFrameOffset: 2, frameStops: { }, };\n// ]]></script>\n<!-- 接下來將 mp4 檔案從 downloads 目錄取出 -->\n<div class="winkVideoContainerClass"><video width="1008" height="630" autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData" muted="true">\n<source src="./../downloads/wcm_w2_2.mp4" type="video/mp4" /></video>\n<div class="winkVideoOverlayClass"></div>\n<div class="winkVideoControlBarClass"><button class="winkVideoControlBarPlayButtonClass"></button> <button class="winkVideoControlBarPauseButtonClass"></button>\n<div class="winkVideoControlBarProgressLeftClass"></div>\n<div class="winkVideoControlBarProgressEmptyMiddleClass"></div>\n<div class="winkVideoControlBarProgressRightClass"></div>\n<div class="winkVideoControlBarProgressFilledMiddleClass"></div>\n<div class="winkVideoControlBarProgressThumbClass"></div>\n</div>\n<div class="winkVideoPlayOverlayClass"></div>\n</div> \n <source src = "/downloads/wcm_w2_2.mp4"   type = "video/mp4"   / > \n /downloads/ XXXX.mp4  設定成你所想展示影片的名稱 \n 完成之後進行推送 \n \n', 'tags': '', 'url': 'WINK.html'}, {'title': 'W6-Blog', 'text': '創立Blog \n 開啟LEO(在可攜輸入leo) 開啟reveal,pelican進行修改 \n pelican / path / 共用 下 \n SITENAME 為標題 \n pelican / path / 遠端 下 \n SITEURL為BLOG網址 \n --------------------------------- \n 標題\xa0Title:2022 Spring CD 課程 \n 創立時間\xa0Date:2022-03-31 11:00 \n Slug\xa0https://40723146.github.io/cd2022/blog/Slug 代表的網址 \n 例如 Slug 為\xa0w6_40723146 \n 則該頁面導向網址為 https://40723146.github.io/cd2022/blog/w6_40723146 \n', 'tags': '', 'url': 'W6-Blog.html'}, {'title': 'midterm', 'text': '\n \n \n', 'tags': '', 'url': 'midterm.html'}, {'title': 'W10', 'text': '請各組員在下列影片中加入註解說明後, 分別以 w10_block_ui、w10_nx_integ 與 w10_ssh 作為標題, 將說明影片嵌入個人 cd2022 網站頁面 (設為 H2 或 H3) 及 blog 網誌中 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'w10_block_ui', 'text': '配合 Wink 檔案將 js 檔案設定如下 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n', 'tags': '', 'url': 'w10_block_ui.html'}, {'title': 'w10_nx_integ', 'text': '配合 Wink 檔案將 js 檔案設定如下 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n', 'tags': '', 'url': 'w10_nx_integ.html'}, {'title': 'w10_ssh', 'text': '配合 Wink 檔案將 js 檔案設定如下 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n', 'tags': '', 'url': 'w10_ssh.html'}, {'title': 'ONLINE', 'text': '', 'tags': '', 'url': 'ONLINE.html'}, {'title': 'W11', 'text': '1.請自行搜尋 STL 檔案中的 ASCII 與 Binary 格式, 舉例說明這兩種零件檔案格式如何定義? \n 2.請利用 MTB 機械手臂中的 Link2 零件檔案為例, 分別在 Solvespace、NX 與 Onshape 中建立 Link2 零件檔案後, 分別以 Binary 與 ASCII 格式轉出 STL 檔案, 若轉出的 STL 為 Binary 格式, 則請設法以 Python 程式轉為 ASCII 格式, 反之, 若轉出的 STL 為 ASCII 格式, 也請設法以 Python 程式轉為 Binary 格式. \n \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': 'cd2022_uarm_nx12_imported.7z \xa0 中, 若計入重複引用的零件, 總數有多少? 請列出組成此一 uarm 機械手臂所需的 BOM 列表. \n File -> Preferences -> User Interface -> Tools -> Journal -> Journal Language\xa0 \n 將NX檔案儲存成Python \n Menu -> Tools -> Journal . \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W16', 'text': '1.下載 uarm_nx_tic_tae_toe_DH.ttt \xa0和\xa0 w15_uarm_tkinter_control.7z \xa0 \n 2.以coppeliasim 開啟後 \n \n 3.以SciTE執行uarm_tkimter_control.py.，即可操控角度 \n \n Q1.已知左側綠色底座的 uArm 機械手臂, 其基座座標原點位於絕對座標 (1.0, 0.25, 0), 啟動模擬後 green_suctionpad_frame 座標原點則位於 (0.22859, 0.26047, 0.36576), 請列出運算式說明, 啟動模擬後 joint1, joint2 與 joint3 分別以逆時針旋轉 5 度後, 求 green_suctionpad_frame 的絕對座標值. \n \n', 'tags': '', 'url': 'W16.html'}]};