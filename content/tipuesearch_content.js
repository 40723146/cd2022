var tipuesearch = {"pages": [{'title': 'About', 'text': '協同產品設計實習 \n 網頁:  https://mde.tw/cd2022 \n 倉儲:  https://github.com/mdecycu/cd2022 \n 討論區:  https://gitter.im/mdecourse/cd2022 \n 導引:  https://mde.tw/cd2022_guide \n \n 簡介: \n 協同產品設計實習承接電腦輔助設計實習, 著重在探討多人模式下, 如何有效執行與機電系統設計相關的產品開發流程 (人與人協同, 人與機器協同, 機器與機器協同). \n IPv6 網路設定 \n SSH , git submodule add URL dir, git clone recurse-submodules URL, git remote add abbr URL, cms.bat and acp.bat \n https://wcm.cycu.org  (BIOS 版本: Acer R01-A4, 2009.03/:10ff::12/pj2022) \n 每四人為一小組, 兩小組為一大組執行機電系統模型設置專案, 任務一將使用  uarm  ( Onshape uArm  與  Evoarm ) 完成 主題一 . \n 主題二: 分別利用  Solvespace ,  NX1980  與  Onshape , 參考 行走機構文獻 , 設計一款可配合 uArm Robot 上下載運物件 (loading and unloading) 的行走機構. \n 主題三: 每一大組必須將 Github 上的大組倉儲與網站內容, 設法同步至電腦輔助設計室  Skylake MD790  電腦第三磁區中的  Fossil SCM server . \n 行事曆 \n 全頁檢視 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Realizable', 'text': '以 4 人一小組, 兩小組成一大組的方式, 透過計算機程式方法 (執行運算及操控) 與電腦輔助設計的建模流程, 完成可實現之機電整合系統設計 (Realizable Mechatronic System Design). \n 機械元件建模工具: \n Solvespace  (開源)、 NX1980  (高端)、 Onshape  (全雲端) \n 電子電機控制與感測模擬工具: \n Beginning Robotics with Raspberry Pi and Arduino  (在校園網路下載) \n Wokwi (web-based): \n https://wokwi.com/ \n https://github.com/wokwi \n https://github.com/wokwi \n Servo motor 控制 \n Unoardusim  (單機) \n PICSimLab  (開源) \n 3D 列印與模擬工具 \n G-code based 列印模擬: \n https://github.com/sudipchakraborty/A-simulated-3D-Printer-In-CoppeliaSim  ( Paper ) \n https://github.com/mdecourse/gsim  (執行需要 PyGObject,  參考 ) \n https://github.com/mdecourse/FIBR3DEmul  (CoppeliaSim plugin in Cpp,  paper) \n G-code processing: \n https://github.com/mdecourse/gcode_machine \n 3D Printer based 列印模擬: \n https://all3dp.com/2/gcode-viewer-3d-printer-simulator-best-tools/ \n 雷射切割模擬工具: \n https://github.com/mdecourse/papercraft \xa0 (Unfold STL for laser cutting)', 'tags': '', 'url': 'Realizable.html'}, {'title': 'Website', 'text': '倉儲 (Repository) and 網站 (Website) \n 使用分散式版次管理系統中的倉儲建立協同設計網站的特性: \n \n 可清楚記錄每一位成員對於協同設計流程的貢獻細節. \n 網頁中納入  Disqus , 可提升各頁面的互動性. \n 利用 Github, Gitlab, Bitbucket 與 Fossil SCM 同步協同設計倉儲內容, 可提升數位資料保全. \n 可回朔設計流程中的任一版本, 並呈現改版說明註記, 讓新成員自行研究探索. \n \n 每一成員均以 SSH 推送版本至各小組與各大組倉儲, 也可以採用 程式方法 集結成員改版內容. \n SSH push 基本概念: \n 以 git 作為帳號, 利用 secure shell 指令登入 github.com, 一旦近端的 private key 與 github.com 網站上使用者事先存放的 public key 屬於同一對, 則取得將近端版本推向 github.com 伺服器的權限, 對倉儲內容進行改版. \n 在近端若使用 Windows 操作系統, 可以採用 Putty 當作執行 secure shell 指令的工具, 但必須在啟動可攜系統時, 便透過 git 指令內建的系統環境變數 GIT_SSH 設為 plink.exe 所在路徑. 之後 git 就可透過 putty 以 secure shell 的方式推送版本. \n 而利用 putty 推送版本的過程需要網路連線與近端 private key 的所在路徑. 網路連線若在近端使用 IPv6 則必須額外設計能支援\xa0 IPv6 串接到 IPv4 網路協定的代理主機 (因為截至目前 github.com 只支援 IPv4 網路協定). 至於近端的 private key 必須是 putty 能讀取的格式, 而放到 github.com 上的 public key 則必須是 github.com 認可的 OpenSSH 格式. \n', 'tags': '', 'url': 'Website.html'}, {'title': 'Brython', 'text': 'Siemens and Python related repositories \n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n add 1 to 100 p261 ROC flag PROC flag USA flag Draw Grid Random Rect Rect Walk Rect U Walk Rect rev U Walk 單節貪食蛇 5 個紅點方塊 Snake BSnake auto_guess ball bezier big_lotto brython_kw bunny cango_spur cango_spur1 cango_three_gears clear clock convert_temp deepmerge display_stl draw ex1 ex2 ex3 ex4 fibo fourbar guess_a_number hw1_1 hw1_2 Keycode knova1 merge3 power_lotto spur spur_w_form stl_binary_ascii stl_writer Tetris turtle1 turtle2 turtle3 turtle4 turtle5 turtle6 turtle7 turtle8 twl_link_ik webcam websocket ycqsort \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'NX1980', 'text': 'Why NX1980? \n 為什麼採用 NX1980? \n 優點: \n \n NX1980 可以直接放入 USB 隨身碟 (全模組總容量約 30 GB), 透過 IPv6 網路連線取得教育版授權後啟動. \n NX1980 可啟用的模組包含永久授權的  ACD10 與 ACD11  完整教育版 CAD/E/M 功能. \n NX1980 的二次開發可以直接採用 Python 程式語言, 在 Generative Design 與 Data Science 整合領域上的發展潛力無窮. \n \n 缺點: \n \n 採用 NX1980 後所建立的零組件檔案, 只能使用 1980 版之後的 NX 套件開啟, 無法以先前的 NX3, NX12 或 NX1782 版本開啟. \n NX1980 套件模組與功能眾多, 完整的官方參考資料需要在維護合約內才能擷取, 造成初學者學習上的重大瓶頸. \n \n 本課程所使用的  NX1980 portable  (for @gm users only, file size: 3 GB, extracted size: 15.2 GB). \n', 'tags': '', 'url': 'NX1980.html'}, {'title': 'Onshape', 'text': 'Why Onshape? \n 為什麼採用 Onshape? \n 優點: \n \n 只要電腦 GPU 顯示卡等級符合要求, 可以直接以瀏覽器開啟, 使用最新版本, 近端電腦無需任何額外套件安裝. \n 多人可以直接在線上協同零組件繪圖, 所完成的零組件可以直接透過 URL 分享. \n 設計繪圖流程具備版次管理, 使用者可以像使用 git 的版次管理系統進行零組件特徵管理. \n 所有檔案全部採雲端儲存, 使用者繪圖過程無需存檔. \n 提供 Featurescript, 使用者可以透過類似 Typescript (Javascript) 程式語言的方式建立客製化參數特徵. \n \n 缺點: \n \n 沒有網路就無法進行設計繪圖 \n 對一般用戶只提供特徵層級的二次開發, 更進階的零組件或延伸開發, 只提供給特定商務用戶. \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Programming', 'text': 'https://www.toptal.com/robotics/programming-a-robot-an-introductory-tutorial \n https://github.com/mdecourse/sobot-rimulator \n Python 編譯環境修正 \n Python 與 NXOpen Python API', 'tags': '', 'url': 'Programming.html'}, {'title': 'Downloads', 'text': '綜合第一工程館八樓電腦輔助設計室純 IPv6 網路設定:  https://mde.tw/wcm2022/content/Network.html \n CoppeliaSim: \n CoppeliaSim Edu may ONLY be used by educational entities composed by following people and institutions: \n students, teachers and professors schools and universities \n Educational entities do NOT include companies, research institutions, non-profit organisations, foundations, etc. \n An educational entity may use CoppeliaSim Edu under following conditions: \n usage should be non-commercial \n cd2022 downloads are provided by cd2022 At mde \n Coppeliasim 4.3.0 \n 內建 script 除了支援 Lua, 同時 支援 Python  ( Scripts in Lua and Python ), 但需在啟動前設定 system/usrset.txt 中的 defaultPython =\xa0 Y:/Python395/python.exe, 且安裝  pyzmq  與  cbor  等模組. \n pip install pyzmq cbor \n regular api reference \n \n Fossil and Solvespace: \n fossil.exe and solvespace.exe  (self-compiled version) \n \n NX1980: \n NX1980 portable  (for @gm users only, file size: 3 GB, extracted size: 15.2 GB) \n \n Compile CoppliaSim Portable System: \n compile_copsim_for_cd2022.7z  (file size: 5 GB, extracted size: 17.3 GB), 包含除了 NX1980 之外的所有課程相關可攜程式套件. \n 下載  PUTTY_0.76.7z  (下載 1 MB, 解開壓縮後 4.36 MB) \n 請注意!! 版本很重要, 使用 PUTTY 0.74 建立的 keys, 無法在 0.76 版中使用. \n \n Webots \n Webots 使用授權 較  CoppeliaSim 使用授權 寬鬆. \n Webots 對於全球資訊網的支援(  https://robotbenchmark.net/ ) 較 CoppeliaSim 佳 (CoppeliaSim 自 4.3.0 rev2 透過  three.js ,  支援瀏覽器前端展示 ). \n CoppeliaSim 執行時所需獨立顯卡的要求 ( requirements ) 較 Webots ( requirements ) 低.', 'tags': '', 'url': 'Downloads.html'}]};