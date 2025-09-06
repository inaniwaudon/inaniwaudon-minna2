# inaniwaudon-minna

Vite + React で構築された個人サイトです。GitHub Actions を用いてビルドした後、SPA として Cloudflare Pages にデプロイします。

<https://いなにわうどん.みんな>

- 旧レポジトリ：[inaniwaudon-minna](https://github.com/inaniwaudon/inaniwaudon-minna)
- バックエンド：[inaniwaudon-minna-backend](https://github.com/inaniwaudon/inaniwaudon-minna-backend)

## Development

```bash
yarn
yarn run dev
yarn run build
```

デプロイ用に、Environment Secret に以下を設定します

```bash
CMSR2_TOKEN=<CMSR2_TOKEN>
CF_API_TOKEN=<CF_API_TOKEN>
CF_ACCOUNT_ID=<CF_ACCOUNT_ID>
```

## コンテンツの更新

一部コンテンツは、[cmsr2](https://github.com/inaniwaudon/cmsr2) を用いて管理します。

以下のスクリプトを実行してコミットするか、workflow（`prebuild.yml`）を手動実行することにより、内容を更新します。

```bash
npx tsx script/prebuild.ts
```

## 写真の更新

WebP 形式に圧縮した上で、Cloudflare R2 にアップロードし、メタデータを JSON ファイルとして管理します。

1. スクリプトを実行し、圧縮済み画像とメタデータを自動生成する。
既にメタデータが存在する場合は、新たに変換した画像が追記される。
ただし、同名の写真が存在する場合は、タイトル・場所以外の項目が上書きされる。

    ```bash
    npx tsx script/compress-image.ts $key $input_dir
    ```
    
    以下のファイルが生成される。

    - `/src/app/photos/_const/$key.json`：JSON ファイル
    - `$input_dir/dst/*.webp`：圧縮後画像
    - `$input_dir/dst/thumbnail/*.webp`：サムネイル用画像

2. 生成された画像ファイルを `/public/$foo` に移動させる

3. http://localhost:3000/:key/add?dir=/foo にアクセスしてタイトルおよび場所を入力する。
入力が完了したら JSON を出力し、内容を `$key.json` とマージする

4. 画像を `s3://site-photos/photo/$key` と同期する

    ```bash
    aws s3 sync /public/$foo */ s3://site-photos/photo/$key --profile r2 --endpoint-url https://**.r2.cloudflarestorage.com --dryrun
    ```

4. JSON ファイルを編集してコミットする

## チェックイン

iOS 端末からチェックイン機能を利用するには、位置情報を許可したうえで「設定 → Safari → サイト越えトラッキングを防ぐ」を無効にする必要があります。
