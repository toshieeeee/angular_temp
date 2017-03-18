# angular_temp

##SPA（シングルページアプリケーション）を作成するときのテンプレです。

## TOPページの役割

### デフォルトで読み込んでいるファイル

・bootsrap
・jQuery（機能はbootStrapと連携してあるものに限定）
・angular.js(core_module)
・angular-route.js（ルーティングの設定）



##各種ディレクトリの役割/目的 

### /pagesディレクトリ

`<ng-view></ng-view>`

ディレクティブから、出力される
HTMLのテンプレを格納


### /configディレクトリ

ルーティングの設定ファイルなどを格納


### / directiveディレクトリ

HTMLの共通コンポーネントを格納。

例えば、
共通のヘッダー、ナビゲーション、フッターなどを格納。

`呼び出し方法のコードは、のちほど記述`


### / controllerディレクトリ