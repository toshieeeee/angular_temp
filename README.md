# Angular_template

>SPA（シングルページアプリケーション）を作成するときのテンプレです。  

## ▼ディレクトリ構造  

root/  
　├ config/  
　├ controller/  
　├ directive/  
　├ pages/  　  
　└ index.html  
 
## ▼TOPページの役割

### デフォルトで読み込んでいるファイル

    `<script src="//code.angularjs.org/1.5.0/angular.min.js"></script>`  
    `<script src="//code.angularjs.org/1.5.0/angular-route.min.js"></script>`  
    `<script src="/js/route.js"></script>` 
     
> * bootsrap  
> * jQuery（機能はbootStrapと連携してあるものに限定）  
> * angular.js(core_module)  
> * angular-route.js（ルーティングの設定）  


# ▼各種ディレクトリの役割/目的 

##  /configディレクトリ
役割 :  
ルーティングの設定ファイルなどを格納  

##  /directiveディレクトリ  
役割 :  
HTMLの共通コンポーネントを格納。

例えば、
共通のヘッダー、ナビゲーション、フッターなどを格納。

`呼び出し方法のコードは、のちほど記述`  

##  /controllerディレクトリ
 
 
##  /pagesディレクトリ

`<ng-view></ng-view>`

役割 :  
ディレクティブから、出力されるHTMLのテンプレを格納する

