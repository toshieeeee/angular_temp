# Angular_template

>SPA（シングルページアプリケーション）を作成するときのテンプレです。  

## ▼TOPページの役割

### デフォルトで読み込んでいるファイル

> * bootsrap  
> * jQuery（機能はbootStrapと連携してあるものに限定）  
> * angular.js(core_module)  
> * angular-route.js（ルーティングの設定）  


# ▼各種ディレクトリの役割/目的 

##  config/ディレクトリ
役割 :  
ルーティングの設定ファイルなどを格納  

##  directive/ディレクトリ  
役割 :  
HTMLの共通コンポーネントを格納。

例えば、
共通のヘッダー、ナビゲーション、フッターなどを格納。

`呼び出し方法のコードは、のちほど記述`  

##  controller/ディレクトリ
 
 
##  pages/ディレクトリ

`<ng-view></ng-view>`

役割 :  
ディレクティブから、出力されるHTMLのテンプレを格納する

